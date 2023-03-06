import { Post } from '@/models'
import { getPostList } from '@/utils/posts'
import { Container, Divider } from '@mui/material'
import { Box } from '@mui/system'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { use } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse/lib'
import remarkPrism from 'remark-prism'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import { unified } from 'unified'
import Script from 'next/script'
import { Seo } from '@/components/common'

export interface BlogPageProps {
  post: Post
}

export default function DetailPostPage({ post }: BlogPageProps) {
  if (!post) return null

  return (
    <Box>
      <Seo
        data={{
          title: `${post.title} | Detail Blog Page`,
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
          thumbnailUrl:
            post.thumbnailUrl ||
            'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        }}
      />
      <Container>
        <h1>Post Detail Page</h1>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>
        <Divider />
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>
      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList()

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList()
  const slug = context.params?.slug
  if (!slug) return { notFound: true }
  const post = postList.find((x) => x.slug === slug)
  if (!post) return { notFound: true }

  //parse markdown to Html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'Agenda' }) // auto add table of contents
    .use(remarkPrism) //Style for code stage
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog Page Detail' })
    .use(rehypeFormat)
    .use(rehypeSlug) //add id to <h1>
    // .use(rehypeAutolinkHeadings, { behavior: 'wrap' }) //add link to <h1>
    .use(rehypeStringify)
    .process(post.mdContent || '')
  post.htmlContent = file.toString()
  return {
    props: {
      post,
    },
  }
}
