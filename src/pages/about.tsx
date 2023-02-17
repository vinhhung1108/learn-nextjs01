import Header from '@/components/common/header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// const Header = dynamic(()=> import('@/components/common/header'), { ssr: false})

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log('About query: ', router.query)
  const page = Number(router.query?.page) || 1
  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`http://localhost:4000/post?page=${page}`)
      const data = await response.json()
      setPostList(data)
    })()
  }, [page])
  function handleNextPage() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (page || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    <div>
      <h1>About page - here</h1>
      <Header />
      <ul className="post-list">
        {postList && postList.map((x: any) => <li key={x._id}>{x.title}</li>)}
      </ul>

      <button onClick={handleNextPage}>Next Page</button>
    </div>
  )
}

export async function getStaticProps() {
  console.log('get Static Props')

  return {
    props: {},
  }
}
