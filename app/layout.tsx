import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BroomFi - Cryptocurrency Trading Platform',
  description: 'Trade cryptocurrencies with ease on BroomFi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

