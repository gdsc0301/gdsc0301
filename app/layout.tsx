import './globals.css';

import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { defaultMetadata } from './metadata'
import { Analytics } from '@vercel/analytics/react'

import Header from './components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={montserrat.className + ' antialiased'}>
        <div className='max-w-dvw overflow-x-hidden'>
          <Header />
          {children}
        </div>
      </body>
      <Analytics />
    </html>
  )
}
