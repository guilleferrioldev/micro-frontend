import { Inter } from 'next/font/google'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout ({children}: {children: React.ReactNode}) {
    return (
        <main className={`${inter.className}`} style={{maxWidth: '100dvh', maxHeight: '100dvh'}}>
            <Header/>
            <section style={{ padding: 10, height: 'calc(100dvh - 60px)', width: '100dvw', display: 'flex', justifyContent: 'center'}}>
                {children}
            </section>
        </main>
    )
}