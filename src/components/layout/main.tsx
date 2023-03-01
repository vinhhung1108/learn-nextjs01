import { LayoutProps } from '@/models'
import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React, { useEffect } from 'react'
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
        <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
          Max with SM
        </Container>
        <Container sx={{ bgcolor: 'secondary.main' }}>Max with default (md)</Container>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/works">Works</Link>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
