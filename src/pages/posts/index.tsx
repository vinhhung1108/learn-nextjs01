import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react';

export interface PostProps {
  id: string,
  title: string
}
export interface PostsListPageProps {
  posts: PostProps[],
}

export default function PostsListPage ( {posts}: PostsListPageProps) {
  return (
    <div>
      <h1>Posts List Page</h1>
      <ul>
        { posts.map(post => <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>) }
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsListPageProps> = async() => {
  // console.log('get static props')
  const response = await fetch('http://localhost:4000/post?page=1');
  const data = await response.json()
  if(!Array.isArray(data)) { return {props: {posts: []}}}
  // console.log(data);
  return {
    props: {
      posts:  data.map( (x: any) => ({id: x._id, title: x.title})),
    }
  }
}