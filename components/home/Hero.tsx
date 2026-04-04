'use client'

import Link from 'next/link'
import Reveal from '@/components/landing/Reveal'
import AnimatedPipelineBackground from '@/components/landing/AnimatedPipelineBackground'
import { homepageContent } from '@/lib/homepage-content'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden border-b border-zinc-800/70">
      <AnimatedPipelineBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b11]/10 to-[#07080c]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="mb-6 inline-flex rounded-full border warm-ring bg-zinc-900/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-200/90">
            {homepageContent.hero.eyebrow}
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-zinc-100 md:text-7xl">
            {homepageContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            {homepageContent.hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-300 via-orange-200 to-violet-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-105"
          >
            {homepageContent.hero.ctas.primary}
          </Link>
          <Link
            href="#system"
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/70 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-purple-300/40 hover:bg-zinc-800"
          >
            {homepageContent.hero.ctas.secondary}
          </Link>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
          {homepageContent.hero.helpers.map((item) => (
            <span
              key={item}
              className="rounded-full border border-zinc-700/70 bg-zinc-900/65 px-3 py-1 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
