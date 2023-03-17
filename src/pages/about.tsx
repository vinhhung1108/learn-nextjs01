import { AdminLayout } from '@/components/layout'
import { Box, Button, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// const Header = dynamic(()=> import('@/components/common/header'), { ssr: false})

export default function AboutPage() {
  const [postList, setPostList] = useState([])
  const router = useRouter()
  console.log('About query: ', router.query)
  const page = Number(router.query?.page) || 1
  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch('http://localhost:3000' + `/api/post?page=${page}`)
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
    <Box sx={{ backgroundColor: lightBlue[50], p: 4 }}>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <Button variant="contained" color="success">
        TEST BUTTON
      </Button>
      {/* <Header /> */}
      <ul className="post-list">
        {postList && postList.map((x: any) => <li key={x._id}>{x.title}</li>)}
      </ul>

      <button onClick={handleNextPage}>Next Page</button>
      <div>Content About page</div>
    </Box>
  )
}

AboutPage.Layout = AdminLayout

export async function getStaticProps() {
  console.log('get Static Props')

  return {
    props: {},
  }
}
