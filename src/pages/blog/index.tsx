import { PostItem } from '@/components/blog'
import { MainLayout } from '@/components/layout'
import { Post } from '@/models'
import { getPostList } from '@/utils/posts'
import { Container, Divider, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export interface BlogListPageProps {
  posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <MuiLink href={`/blog/${post.slug}`} component={Link} sx={{ color: 'text.primary' }}>
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
