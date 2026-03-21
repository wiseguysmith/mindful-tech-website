'use client'

import { useState, useEffect } from 'react'
import { CALENDLY_URL } from '@/lib/site-data'

interface CalendlyEmbedProps {
  className?: string
}

/**
 * Calendly Embed Component
 * 
 * As your CTO mentor: This component handles Calendly iframe embedding with
 * a fallback if the iframe fails to load. We use onError and a timeout to detect
 * if the embed is blocked or fails. This provides a better UX than a broken iframe.
 */
export default function CalendlyEmbed({ className }: CalendlyEmbedProps) {
  const [showFallback, setShowFallback] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
    // Show fallback if iframe doesn't load within 5 seconds
    const timeout = setTimeout(() => {
      if (!iframeLoaded) {
        setShowFallback(true)
      }
    }, 5000)

    return () => clearTimeout(timeout)
  }, [iframeLoaded])

  if (showFallback) {
    return (
      <div className={`relative ${className}`} style={{ minHeight: '400px' }}>
        <div className="absolute inset-0 flex items-center justify-center bg-cream-50 rounded border border-charcoal-200">
          <div className="text-center p-8">
            <p className="text-charcoal-600 mb-4">
              Unable to load calendar. Please click below to schedule.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
            >
              Open Calendar in New Window
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ minHeight: '700px' }}>
      <iframe
        src={CALENDLY_URL}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a call"
        className="absolute inset-0 rounded border border-charcoal-200"
        style={{ minHeight: '700px' }}
        onLoad={() => setIframeLoaded(true)}
        onError={() => setShowFallback(true)}
      />
    </div>
  )
}

