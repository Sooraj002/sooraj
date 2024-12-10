// src/app/layout.tsx
import type { Metadata } from 'next'
import { Alegreya_Sans_SC, Balsamiq_Sans, Noto_Sans_Mono } from 'next/font/google'
import './globals.css'

const alegreya = Alegreya_Sans_SC({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-alegreya' 
})

const balsamiq = Balsamiq_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-balsamiq' 
})

const notoMono = Noto_Sans_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
})

export const metadata: Metadata = {
  title: 'Sooraj Nambiar - MERN Stack Developer',
  description: 'Portfolio of Sooraj Nambiar, a MERN Stack Developer',
  icons: {
    icon: 'https://static.thenounproject.com/png/345543-200.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`
      ${alegreya.variable} 
      ${balsamiq.variable} 
      ${notoMono.variable}
    `}>
      <body>{children}</body>
    </html>
  )
}

