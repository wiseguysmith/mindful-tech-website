'use client'

import { Inbox, PenSquare, Target, Settings2 } from 'lucide-react'
import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

const icons = [Inbox, PenSquare, Target, Settings2]

export default function DigitalWorkforce() {
  return (
    <section id="digital-workforce" className="section-shell bg-[#08090f]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Primary Pillar"
          title={homepageContent.workforce.headline}
          description={homepageContent.workforce.text}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {homepageContent.workforce.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="surface-panel group p-6 transition duration-500 hover:-translate-y-0.5 hover:border-zinc-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.24)]">
                  <div className="mb-4 inline-flex rounded-lg border border-amber-200/25 bg-gradient-to-br from-amber-300/18 to-purple-500/18 p-3">
                    <Icon className="h-5 w-5 text-amber-200 transition-colors duration-300 group-hover:text-purple-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
