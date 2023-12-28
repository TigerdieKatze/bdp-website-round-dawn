import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import bg from '../public/background.jpg'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bdp-round-dawn',
  description: 'Öffentliche Websitenvorlage für den BDP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className='-z-10 h-screen w-screen fixed blur-bg'>
          <Image src='/background.jpg' alt='Background Image' layout='fill' objectFit='cover' />
        </div>
        {children}      
      </body>
    </html>
  )
}
