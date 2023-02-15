import { GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';

export interface PostsListPageProps {
  posts: any[],
}

export default function PostsListPage ( {posts}: PostsListPageProps) {
  return (
    <div>
      <h1>Posts List Page</h1>
      <ul>
        { posts.map(post => <li key={post.id}>{post.title}</li>) }
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async(context: GetStaticPropsContext) => {
  console.log('get static props')
  const response = await fetch('http://localhost:4000/post?page=1');
  const data = await response.json()
  console.log(data);
  return {
    props: {
      posts:  data.map( (x: any) => ({id: x._id, title: x.title})),
    }
  }
}