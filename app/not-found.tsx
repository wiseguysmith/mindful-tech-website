'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Home, ArrowLeft } from 'lucide-react'

/**
 * Custom 404 Page
 * 
 * As your CTO mentor: This is Next.js App Router's way of handling 404 errors.
 * The file must be named `not-found.tsx` in the app directory. It provides
 * a branded, helpful error page that matches your site's aesthetic instead of
 * a generic browser error.
 */
export default function NotFound() {
  const router = useRouter()
  return (
    <Section background="default" padding="xl">
      <Container size="md">
        <div className="text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-near-black/20 mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-electric-teal to-transparent mx-auto"></div>
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-all duration-200 rounded-md w-full sm:w-auto"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.back()}
              className="w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 mr-2 inline" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Or visit:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/solutions" className="text-slate-600 hover:text-near-black underline">
                Solutions
              </Link>
              <Link href="/doconnect" className="text-slate-600 hover:text-near-black underline">
                Docconnect
              </Link>
              <Link href="/process" className="text-slate-600 hover:text-near-black underline">
                Process
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-near-black underline">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-near-black underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

