import { Inter } from '@next/font/google'

import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  const router = useRouter()
  function goToDetailPage() {
    // router.push({
    //   pathname: '/posts/[postId]',
    //   query: {
    //     postId: 12345,
    //     ref: 'abcd',
    //   },
    // })
  }
  return <Box>Home page</Box>
}

Home.Layout = MainLayout

export default Home
