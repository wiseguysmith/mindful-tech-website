'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { CALENDLY_URL } from '@/lib/site-data'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const beforeAfter = [
  {
    before: 'Inbox overload - nothing routed, nothing tracked',
    after: 'Centralized communication. Every message categorized and assigned.',
  },
  {
    before: 'Leads go silent. Follow-up depends on memory',
    after: 'Automated follow-up. No lead falls through a gap.',
  },
  {
    before: 'Team spending hours on admin instead of client work',
    after: 'Administration handled by intelligent systems.',
  },
  {
    before: 'Disconnected tools - CRM, forms, email all separate',
    after: 'One connected operating system. Everything in sync.',
  },
]

const audiences = [
  {
    label: 'SMB Owners & Operators',
    description:
      'Your operations are growing faster than your systems. We map what is broken and build what replaces it.',
    cta: 'Start with the Audit',
    href: '/audit',
    color: '#C4522A',
  },
  {
    label: 'Founders & Builders',
    description:
      'Building from scratch or restructuring. We give you the operational foundation before you need it.',
    cta: 'Explore What We Do',
    href: '/solutions',
    color: '#2D5229',
  },
  {
    label: 'Asset Owners & Operators',
    description:
      'Tokenization, protocol infrastructure, and operational readiness for the next era of assets.',
    cta: 'See Tokenization',
    href: '/tokenization',
    color: '#B8860B',
  },
]

const principles = [
  {
    title: 'Calm over chaos',
    body: 'Systems that bring clarity, balance, and order to how your business operates.',
  },
  {
    title: 'Systems over noise',
    body: 'We solve real operational problems with measurable, scalable architecture.',
  },
  {
    title: 'Infrastructure over hype',
    body: 'We build enduring systems, not short-term automations that break under pressure.',
  },
  {
    title: 'Educate before building',
    body: 'Clients understand what they are building before a single tool is connected.',
  },
]

const trustItems = [
  'Intelligent Systems',
  'Operational Modernization',
  'AI Implementation',
  'Systems Architecture',
  'Strategic Education',
]

const heroSignals = [
  'Lead flow mapped',
  'Follow-up automated',
  'Tools connected',
  'Team capacity restored',
]

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-terracotta-400 px-6 py-3 text-sm font-medium text-cream-50 transition hover:brightness-110"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  )
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md border border-cream-400 px-6 py-3 text-sm font-medium text-forest-500 transition hover:border-forest-500 hover:bg-cream-200"
    >
      {children}
    </a>
  )
}

export default function HomePage() {
  useReveal()

  return (
    <div className="bg-cream-100 text-forest-500">
      <section className="relative overflow-hidden border-b border-cream-300 py-16 md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(26,43,26,0.045) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="eyebrow animate-arrive" style={{ animationDelay: '0.1s' }}>
                Intelligent Systems Consultancy
              </p>
              <h1
                className="mt-5 max-w-4xl text-5xl font-light leading-[1.04] text-forest-500 md:text-6xl lg:text-7xl"
                style={{ animationDelay: '0.2s' }}
              >
                Most businesses are running on systems built for a different era.
              </h1>
              <p
                className="mt-7 max-w-xl text-lg font-light leading-[1.7] text-muted-text"
                style={{ animationDelay: '0.35s' }}
              >
                Mindful Tech helps you understand what needs to change - and builds the intelligent
                infrastructure that replaces it.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <PrimaryButton href="/audit">Start with the Audit</PrimaryButton>
                <SecondaryButton href={CALENDLY_URL}>Book a Strategy Call</SecondaryButton>
              </div>
              <p className="mt-9 text-xs font-light uppercase tracking-[0.16em] text-muted-text">
                Mindfully bridging the gap into the digital age.
              </p>
            </div>

            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-md rounded-lg border border-cream-300 bg-cream-200/70 p-6">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-cream-300" />
                <div className="relative">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta-400">
                    Operational Architecture
                  </p>
                  <div className="mt-8 space-y-4">
                    {heroSignals.map((signal, index) => (
                      <div key={signal} className="flex items-center gap-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-400 bg-cream-100 text-xs font-medium text-forest-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="h-px flex-1 bg-cream-400" />
                        <div className="flex min-w-[190px] items-center gap-2 rounded-md border border-cream-300 bg-cream-100 px-3 py-2">
                          <Check className="h-4 w-4 text-terracotta-400" />
                          <span className="text-sm font-light text-forest-500">{signal}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 border-l border-terracotta-400 pl-4 text-sm font-light leading-[1.65] text-muted-text">
                    A calmer operating system starts with understanding where the work actually
                    breaks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 bg-cream-200 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="text-xs font-light uppercase tracking-[0.12em] text-muted-text"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="eyebrow">The Transformation</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
              What changes when the system is right.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="reveal flex items-center gap-3 rounded-lg border border-cream-300 bg-cream-100 px-5 py-3">
              <span className="h-2 w-2 rounded-full bg-cream-400" />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-text">
                Before
              </span>
            </div>
            <div
              className="reveal flex items-center gap-3 rounded-lg border border-terracotta-200 bg-terracotta-50 px-5 py-3"
              style={{ transitionDelay: '80ms' }}
            >
              <span className="h-2 w-2 rounded-full bg-terracotta-400" />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-terracotta-400">
                After
              </span>
            </div>

            {beforeAfter.map((item, index) => (
              <div key={item.before} className="contents">
                <div
                  className="reveal rounded-lg border border-cream-300 bg-cream-200/65 p-5"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <p className="font-light leading-[1.65] text-muted-text">{item.before}</p>
                </div>
                <div
                  className="reveal rounded-lg border border-terracotta-200 bg-terracotta-50 p-5"
                  style={{ transitionDelay: `${index * 70 + 35}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-terracotta-400" />
                    <p className="font-light leading-[1.65] text-forest-500">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-forest-400 bg-forest-500 py-16 text-cream-100 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="reveal">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta-300">
                The Reframe
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-light leading-[1.08] text-cream-100 md:text-5xl">
                Modernization is strategic, not technical.
              </h2>
            </div>
            <div className="reveal max-w-2xl space-y-6 text-cream-500" style={{ transitionDelay: '120ms' }}>
              <p className="text-lg font-light leading-[1.7]">
                The question is not which tools to use. It is how this business should actually
                operate in the next ten years.
              </p>
              <p className="font-light leading-[1.75]">
                The businesses that will thrive are not the ones that adopted AI fastest. They are
                the ones that adopted it most intentionally.
              </p>
              <p className="border-l border-terracotta-300 pl-5 font-serif-accent text-xl italic text-cream-300">
                The gap is implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="eyebrow">Find Your Path</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">Where do you fit?</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audiences.map((audience, index) => (
              <div
                key={audience.label}
                className="reveal group flex min-h-[250px] flex-col rounded-lg border border-cream-300 bg-cream-200/70 p-6 transition-colors hover:border-[var(--accent)] hover:bg-cream-100"
                style={
                  {
                    transitionDelay: `${index * 80}ms`,
                    '--accent': audience.color,
                  } as React.CSSProperties
                }
              >
                <div className="mb-5 h-1 w-10 rounded-full" style={{ backgroundColor: audience.color }} />
                <h3 className="text-xl font-medium text-forest-500">{audience.label}</h3>
                <p className="mt-3 flex-1 font-light leading-[1.65] text-muted-text">
                  {audience.description}
                </p>
                <Link
                  href={audience.href}
                  className="mt-6 inline-flex items-center text-sm font-medium"
                  style={{ color: audience.color }}
                >
                  {audience.cta}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 bg-cream-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal max-w-5xl">
            <p className="eyebrow">How We Think</p>
            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Principles that guide every system we build.
            </h2>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-lg border border-cream-300 bg-cream-100 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="reveal border-b border-cream-300 p-6 last:border-b-0 md:border-r md:last:border-r-0 lg:border-b-0"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="mb-5 h-px w-10 bg-terracotta-400" />
                <h3 className="min-h-[48px] text-base font-medium leading-snug text-forest-500">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-[1.65] text-muted-text">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="reveal text-4xl font-light leading-[1.12] md:text-5xl">
            What does your business look like when its operations match its ambition?
          </h2>
          <p className="reveal mx-auto mt-5 max-w-xl font-light leading-[1.7] text-muted-text">
            Start with the audit, or book a strategy call.
          </p>
          <div className="reveal mt-9 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/audit">Start with the Audit</PrimaryButton>
            <SecondaryButton href={CALENDLY_URL}>Book a Strategy Call</SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
