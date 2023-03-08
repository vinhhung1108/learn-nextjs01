import { authApi } from '@/api-client'
import { LoginForm } from '@/components/auth'
import { useAuth } from '@/hooks'
import { LoginPayload } from '@/models'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()

  const { profile, error, login, logout, isLoading, mutate } = useAuth({
    revalidateOnMount: true,
    revalidateOnFocus: true,
    dedupingInterval: 2000,
  })

  async function handleLoginClick() {
    try {
      await login({
        username: 'kem3',
        password: '123456',
      })
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

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload)
      // console.log('Redirect to dashboard')
      await router.push('/')
    } catch (error) {
      console.log('Failed to login ', error)
    }
  }

  return (
    <Box>
      <Paper elevation={4} sx={{ mt: 8, p: 4, maxWidth: '480px', mx: 'auto', textAlign: 'center' }}>
        <Typography component="h1" variant="h4" sx={{ mb: 3 }}>
          LOGIN PAGE
        </Typography>

        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  )
}
