'use client'

import Link from 'next/link'
import Reveal from '@/components/landing/Reveal'
import { homepageContent } from '@/lib/homepage-content'
import { CALENDLY_URL } from '@/lib/site-data'

export default function CTA() {
  return (
    <section id="start" className="py-20 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-zinc-700/70 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:p-14">
          <p className="text-xs uppercase tracking-[0.2em] text-purple-300">Start</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
            {homepageContent.cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">{homepageContent.cta.text}</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-300 via-orange-200 to-violet-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-105"
            >
              {homepageContent.cta.primary}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-zinc-600 bg-zinc-900 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-400"
            >
              {homepageContent.cta.secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
