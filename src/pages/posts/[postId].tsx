import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

export interface DetailPostPageProps {
  post: any
}

export default function DetailPostPage({ post }: DetailPostPageProps) {
  // same with "props: DetailPostPageProps"
  const router = useRouter()
  if (router.isFallback) {
    return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
  }
  if (!post) return null

  return (
    <div>
      <h1>Detail Post Page</h1>
      <p>Title: {post.title}</p>
      <p>Id: {post._id}</p>

      <p>Content: {post.content}</p>
    </div>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  console.log('/nGET STATIC PATH')
  const response = await fetch(process.env.API_URL + '/post?page=1')
  const data = await response.json()
  if (!Array.isArray(data)) return { paths: [], fallback: false }
  return {
    paths: data.map((x: any) => ({ params: { postId: x._id } })),
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps<DetailPostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('/nGET STATIC PROPS', context.params?.postId)
  const postId = context.params?.postId
  if (!postId) return { notFound: true }
  const response = await fetch(process.env.API_URL + `/post/${postId}`)
  const data = await response.json()
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  }
}
