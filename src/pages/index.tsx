import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'

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
  return (
    <div>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ marginTop: '100px' }}></div>
      <Link href="/about">Go to About</Link>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
