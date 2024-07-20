import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MainLayout ({children}: {children: React.ReactNode}) {
    return (
        <main className={`${inter.className}`} style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
            {children}
        </main>
    )
}