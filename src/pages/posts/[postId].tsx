import { useRouter } from 'next/router';
import React from 'react';

export interface DetailPostPageProps {
}

export default function DetailPostPage (props: DetailPostPageProps) {
    const router = useRouter();
    const { postId } = router.query;
  return (
    <div>
      <h1>Detail Post Page</h1>

      <p>
        Query Params: 
         - PostID: {postId}
      </p>
    </div>
  );
}
