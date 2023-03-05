import { MainLayout } from '@/components/layout'
import { getPostList } from '@/utils/posts'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

export interface BlogProps {
  id: string
  title: string
}
export interface BlogListPageProps {
  posts: BlogProps[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <div>
      <h1>Blog List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // const response = await fetch(process.env.API_URL + '/post?page=1')
  // const data = await response.json()
  // if (!Array.isArray(data)) {
  //   return { props: { posts: [] } }
  // }
  // console.log(data);

  //convert markdown file into list of javascript object
  const data = await getPostList()

  return {
    props: {
      posts: data.map((x: any) => ({ id: x._id, title: x.title })),
    },
  }
}
