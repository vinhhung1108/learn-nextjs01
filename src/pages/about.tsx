// import Header from '@/components/common/header';
import { useRouter } from 'next/router';
import React from 'react'
import dynamic from 'next/dynamic';

const Header = dynamic(()=> import('@/components/common/header'), { ssr: false})

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  // const router = useRouter()
  // console.log('About query: ', router.query)
  return (
    <div>
      <h1>About page - here</h1>
      <Header />
    </div>
  );
}
