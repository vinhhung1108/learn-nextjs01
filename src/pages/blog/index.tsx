import { PostItem } from '@/components/blog'
import { MainLayout } from '@/components/layout'
import { getPostList } from '@/utils/posts'
import { Container, Divider } from '@mui/material'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'

export interface BlogProps {
  id: string
  title: string
}
export interface BlogListPageProps {
  posts: any
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <MuiLink href={`/blog/${post.slug}`} component={Link}>
                <PostItem post={post} />
              </MuiLink>

              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const postList = await getPostList()

  return {
    props: {
      // posts: postList.map((x: any) => ({ id: x.id, title: x.title })),
      posts: postList,
    },
  }
}
