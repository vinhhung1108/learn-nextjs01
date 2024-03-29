import { LayoutProps } from '@/models'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('Mounting Layout')
    return () => console.log('Unmounting Layout')
  }, [])
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
