'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()
  const isActiveItem = (href: string) => {
    if (href.includes('#')) {
      return pathname === '/'
    }
    return pathname === href
  }

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
        className="sticky top-0 z-40 border-b border-zinc-800 bg-[#07080c]/90 backdrop-blur-md"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-6 lg:gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-baseline group shrink-0">
              <span className="text-xl font-bold font-display text-zinc-100 transition-colors group-hover:text-purple-200">
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
                    className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'rounded-md px-2 py-1 text-sm font-medium transition-colors',
                      isActiveItem(item.href)
                        ? 'bg-zinc-800/80 text-amber-200'
                        : 'text-zinc-400 hover:text-zinc-100'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex md:items-center md:gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-300 to-purple-400 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:brightness-105"
              >
                Start Your System
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="p-2 text-zinc-300 transition-transform duration-200 hover:text-zinc-100 md:hidden"
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
            'overflow-hidden border-t border-zinc-800 bg-[#0a0b11] shadow-lg transition-all duration-300 ease-in-out md:hidden',
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
                    'block text-base font-medium text-zinc-400 transition-all duration-200 hover:pl-2 hover:text-zinc-100',
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
                    'block rounded-md px-2 py-1 text-base font-medium transition-all duration-200 hover:pl-2',
                    isActiveItem(item.href)
                      ? 'bg-zinc-800/80 text-amber-200'
                      : 'text-zinc-400 hover:text-zinc-100',
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
                'space-y-2 border-t border-zinc-800 pt-4 transition-all duration-300',
                mobileMenuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{
                transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms',
              }}
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-amber-300 to-purple-400 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:brightness-105"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your System
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

