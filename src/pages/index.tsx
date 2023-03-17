import { Inter } from '@next/font/google'

import { Seo } from '@/components/common'
import { HeroSection, RecentPosts } from '@/components/home'
import { FeatureWorks } from '@/components/home/featured-works'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/system'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Home page demo',
          description: 'Home page with description SEO',
          url: 'https://demo.com',
          thumbnailUrl:
            'https://res.cloudinary.com/dpnrgnzwn/image/upload/v1677860366/Rectangle_30_1_qcyjoy.jpg',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
