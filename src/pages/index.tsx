import { Inter } from '@next/font/google'

import { HeroSection } from '@/components/common/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/system'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
