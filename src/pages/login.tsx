import { authApi } from '@/api-client'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import * as React from 'react'

// import { useSWRConfig } from 'swr'

export default function LoginPage() {
  const router = useRouter()
  // const { mutate: mutateAll } = useSWRConfig()
  const { profile, error, login, logout, isLoading, mutate } = useAuth({
    revalidateOnMount: true,
    revalidateOnFocus: true,
    dedupingInterval: 2000,
  })

  async function handleLoginClick() {
    try {
      await login()
      console.log('Redirect to dashboard')
      await router.push('/about')
    } catch (error) {
      console.log('Failed to login ', error)
    }
  }

  async function handleGetProfileClick() {
    try {
      await authApi.getProfile()
    } catch (error) {
      console.log('Failed to get Profile ', error)
    }
  }

  async function handleLogoutClick() {
    try {
      await logout()
      console.log('Redirect to login page')
    } catch (error) {
      console.log('Failed to logout ', error)
    }
  }
  // if (isLoading) return 'Loading...'
  // if (!isLoading && error) {
  // mutate({ data: {} }, false)
  // mutateAll('/auth/profile', { data: {} }, true)
  // }
  // if (!isLoading && profile?.data?.username) {
  //   console.log('Success to ridirect to about page')
  //   router.push('/about')
  // }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to About</button>
    </div>
  )
}
