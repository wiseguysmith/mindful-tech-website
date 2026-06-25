'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import MindfulLogo from './MindfulLogo'

const DEMO_URL = 'https://demo.mindfultech.services'

const navLinks = [
  { name: 'What We Do',   href: '/solutions' },
  { name: 'The Audit',    href: '/audit' },
  { name: 'Docconnect',   href: 'https://docconnect-461217483312.us-east1.run.app/#', external: true },
  { name: 'Tokenization', href: '/tokenization' },
  { name: 'About',        href: '/about' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-[#1A2B1A]/10 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          scrolled
            ? 'border-b border-[#DDD6CC] bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-[#FAF7F2]/80 backdrop-blur-sm'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="group flex h-12 shrink-0 items-center gap-3">
            <span className="flex h-10 w-8 items-center justify-center">
              <MindfulLogo size={27} color="#1A2B1A" className="-translate-y-px" />
            </span>
            <span className="text-base font-light tracking-tight text-[#1A2B1A] transition-colors group-hover:text-[#C4522A]">
              mindful tech
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-1.5 text-sm font-light text-[#7A7468] transition-colors hover:text-[#1A2B1A]"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-sm font-light transition-colors',
                    pathname === item.href
                      ? 'bg-[#F2EDE4] text-[#1A2B1A] font-medium'
                      : 'text-[#7A7468] hover:text-[#1A2B1A]'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#DDD6CC] bg-transparent px-4 py-2 text-sm font-light text-[#1A2B1A] transition-all hover:border-[#C4522A] hover:text-[#C4522A]"
            >
              View Demo
            </a>
            <Link
              href="/audit"
              className="rounded-md border border-[#DDD6CC] bg-transparent px-4 py-2 text-sm font-light text-[#1A2B1A] transition-all hover:border-[#C4522A] hover:text-[#C4522A]"
            >
              Start an Audit
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-4 py-2 text-sm font-medium text-[#FAF7F2] transition-all hover:brightness-110"
              style={{ backgroundColor: '#C4522A' }}
            >
              Book a Strategy Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="relative h-8 w-8 text-[#1A2B1A] md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Menu className={cn('absolute inset-0 h-8 w-8 transition-all duration-300', open ? 'opacity-0 rotate-90 scale-0' : 'opacity-100')} />
            <X    className={cn('absolute inset-0 h-8 w-8 transition-all duration-300', open ? 'opacity-100' : 'opacity-0 -rotate-90 scale-0')} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          'overflow-hidden border-t border-[#E8E0D4] bg-[#FAF7F2] transition-all duration-300 md:hidden',
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}>
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((item, i) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-md px-3 py-2 text-base font-light text-[#7A7468] transition-colors hover:bg-[#F2EDE4] hover:text-[#1A2B1A]"
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-light transition-colors',
                    pathname === item.href
                      ? 'bg-[#F2EDE4] text-[#1A2B1A] font-medium'
                      : 'text-[#7A7468] hover:bg-[#F2EDE4] hover:text-[#1A2B1A]'
                  )}
                  style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="space-y-2 border-t border-[#E8E0D4] pt-4 mt-2">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md border border-[#DDD6CC] px-4 py-2.5 text-center text-sm font-light text-[#1A2B1A] transition-colors hover:border-[#C4522A]"
                onClick={() => setOpen(false)}
              >
                View Demo
              </a>
              <Link
                href="/audit"
                className="block w-full rounded-md border border-[#DDD6CC] px-4 py-2.5 text-center text-sm font-light text-[#1A2B1A] transition-colors hover:border-[#C4522A]"
                onClick={() => setOpen(false)}
              >
                Start an Audit
              </Link>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md px-4 py-2.5 text-center text-sm font-medium text-[#FAF7F2] transition-all hover:brightness-110"
                style={{ backgroundColor: '#C4522A' }}
                onClick={() => setOpen(false)}
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
