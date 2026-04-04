'use client'

import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

export default function Outcomes() {
  return (
    <section className="section-shell bg-[#0a0b12]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={homepageContent.outcomes.headline} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {homepageContent.outcomes.items.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.1}
              className="surface-panel-soft p-5 text-zinc-200"
            >
              {item}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
