import { LayoutProps } from '@/models'
import Link from 'next/link'
import React, { useEffect } from 'react'

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('Mounting Layout')
    return () => console.log('Unmounting Layout')
  }, [])
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link> | <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  )
}
