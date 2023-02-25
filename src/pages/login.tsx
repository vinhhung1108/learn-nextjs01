import { authApi } from '@/api-client'
import * as React from 'react'

export default function LoginPage() {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'kem1',
        password: '123456',
      })
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
      await authApi.logout()
    } catch (error) {
      console.log('Failed to logout ', error)
    }
  }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
