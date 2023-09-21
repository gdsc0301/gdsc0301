import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { defaultMetadata } from './metadata'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className + ' antialiased'}>{children}</body>
    </html>
  )
}
