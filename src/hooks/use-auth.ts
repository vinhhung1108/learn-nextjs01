import { authApi } from '@/api-client'
import { useRouter } from 'next/router'
import useSWR, { useSWRConfig } from 'swr'
import { PublicConfiguration } from 'swr/_internal'

export function useAuth(option?: Partial<PublicConfiguration>) {
  const router = useRouter()
  const { mutate: mutateAll } = useSWRConfig()
  const {
    data: profile,
    error,
    mutate,
    isLoading,
  } = useSWR('/auth/profile', {
    dedupingInterval: 60 * 60 * 1000, //1hr
    ...option,
  })

  async function login() {
    await authApi.login({
      username: 'kem1',
      password: '123456',
    })
    await mutate()
  }
  async function logout() {
    await authApi.logout()
    // await mutate({ data: {} }, true)
    await mutateAll('/auth/profile', { data: {} }, true)
  }
  return {
    profile,
    error,
    login,
    logout,
    isLoading,
    mutate,
  }
}
