import Head from 'next/head'
import { RemoteTable } from '@/components'

const sectionStyle = {
  width: '95dvw',
  minHeight: '100%',
  background: 'white', 
  borderRadius: '10px',
  boxShadow: '0 0 10px rgb(168, 19, 29, 0.3)',
  padding: 10,
  display: 'grid',
} as React.CSSProperties

export default function Home() {
  return (
    <>
      <Head>
        <title>Micro Frontend CRUD Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div style={sectionStyle}>
          <RemoteTable/>
        </div>
    </>
  )
}
