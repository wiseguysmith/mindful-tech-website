import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mindful Tech | Intelligent Systems Consultancy',
    template: '%s | Mindful Tech',
  },
  description: 'Mindful Tech helps businesses transition into the digital future through intelligent automation, AI systems, and strategic education — making modernization understandable, accessible, and human-centered.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindfultech.services',
    siteName: 'Mindful Tech',
    title: 'Mindful Tech | Intelligent Systems Consultancy',
    description: 'Mindfully bridging the gap into the digital age. Intelligent systems built for how business actually works.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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

