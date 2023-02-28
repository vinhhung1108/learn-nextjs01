import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
import moment from 'moment-timezone'
import type { AppProps } from 'next/app'
import 'moment/locale/en-gb'
import { SWRConfig } from 'swr'
import axiosClient from '@/api-client/axios-client'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  moment.tz.setDefault('Asia/Ho_Chi_Minh')
  moment.locale('en-bg')
  console.log('Render  App')
  const Layout = Component.Layout ?? EmptyLayout
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}
