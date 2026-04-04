'use client'

import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

export default function Problem() {
  return (
    <section className="section-shell bg-[#08090f]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={homepageContent.problem.headline} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homepageContent.problem.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className="surface-panel p-6"
            >
              <h3 className="text-xl font-semibold text-zinc-100">{card.title}</h3>
              <p className="mt-3 text-zinc-400">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
