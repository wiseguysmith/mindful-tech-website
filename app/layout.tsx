import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MindfulTech | Infrastructure for Digital Workers & Connected Systems',
    template: '%s | MindfulTech',
  },
  description: 'Infrastructure for digital workers, connected systems, and protocol-ready businesses. Deploy AI agents, automate workflows, and plug into next-generation protocol infrastructure.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindfultech.services',
    siteName: 'MindfulTech',
    title: 'MindfulTech | Infrastructure for Digital Workers & Connected Systems',
    description: 'Infrastructure for digital workers, connected systems, and protocol-ready businesses.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

