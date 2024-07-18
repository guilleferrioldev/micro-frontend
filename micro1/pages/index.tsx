import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

const PageComponent = dynamic(() => import("remote/pages/index"), {
   ssr: false,
   suspense: true
})

export default function Home() {
  return (
    <PageComponent></PageComponent>
  )
}
