'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navigation, CALENDLY_URL } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/**
 * Navbar Component
 * 
 * Sticky navigation with mobile menu. Uses Next.js Link for client-side navigation.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-near-black/20 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav
        className="sticky top-0 z-40 bg-soft-white/95 backdrop-blur-sm border-b border-slate-200"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6 lg:gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-baseline group shrink-0">
              <span className="text-xl font-bold font-display text-near-black group-hover:text-slate-600 transition-colors">
                MindfulTech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-600 hover:text-near-black transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-near-black transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-md"
              >
                Explore Solutions
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
              >
                Book a Strategy Call
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-slate-600 hover:text-near-black transition-transform duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={cn(
                    'absolute inset-0 h-6 w-6 transition-all duration-300',
                    mobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 h-6 w-6 transition-all duration-300',
                    mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden border-t border-slate-200 bg-soft-white overflow-hidden transition-all duration-300 ease-in-out shadow-lg',
            mobileMenuOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item, idx) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'block text-base font-medium text-slate-600 hover:text-near-black transition-all duration-200 hover:pl-2',
                    mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${idx * 50}ms` : '0ms',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block text-base font-medium text-slate-600 hover:text-near-black transition-all duration-200 hover:pl-2',
                    mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  )}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${idx * 50}ms` : '0ms',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div
              className={cn(
                'pt-4 space-y-2 border-t border-slate-200 transition-all duration-300',
                mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{
                transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms',
              }}
            >
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore Solutions
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

