import { HeaderLayout, MainLayout } from '@/components/layouts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <MainLayout>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </MainLayout>
    )
}
