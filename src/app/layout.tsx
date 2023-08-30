import './globals.css'
import type { Metadata } from 'next'
import { Arimo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const arimo = Arimo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viral Social Media Ideas',
  description: 'Generate viral social media idea with Ai for musicians',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
