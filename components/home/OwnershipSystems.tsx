'use client'

import Link from 'next/link'
import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

export default function OwnershipSystems() {
  return (
    <section id="ownership" className="section-shell bg-[#0b0c13]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Secondary Pillar"
          title={homepageContent.ownership.headline}
          description={homepageContent.ownership.text}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="surface-panel p-7">
            <div className="grid grid-cols-1 items-center gap-3 text-sm sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/65 px-3 py-2 text-zinc-300">
                Property node
              </div>
              <span className="hidden text-zinc-500 sm:block">{'>'}</span>
              <span className="text-zinc-500 sm:hidden">{'v'}</span>
              <div className="rounded-lg border border-purple-300/30 bg-zinc-900/70 px-3 py-2 text-purple-200">
                Ownership flow
              </div>
              <span className="hidden text-zinc-500 sm:block">{'>'}</span>
              <span className="text-zinc-500 sm:hidden">{'v'}</span>
              <div className="rounded-lg border border-amber-200/25 bg-zinc-950/65 px-3 py-2 text-amber-200/90">
                Investor nodes
              </div>
            </div>
            <p className="mt-5 text-zinc-400">
              Structured ownership logic for real assets: calm design, compliant architecture, clear cash-flow pathways.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="surface-panel p-7">
            <ul className="space-y-3 text-zinc-300">
              {homepageContent.ownership.bullets.map((item) => (
                <li key={item} className="rounded-lg border border-zinc-700/80 bg-zinc-950/55 px-3 py-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/tokenization"
              className="mt-6 inline-flex rounded-md border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-400"
            >
              Explore Ownership Systems
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
