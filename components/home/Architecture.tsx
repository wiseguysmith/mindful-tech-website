'use client'

import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

export default function Architecture() {
  return (
    <section className="section-shell bg-[#08090f]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Design"
          title={homepageContent.architecture.headline}
          description={homepageContent.architecture.text}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepageContent.architecture.steps.map((step, index) => (
            <Reveal
              key={step}
              delay={index * 0.08}
              className="surface-panel-soft p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Step {index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-zinc-100">{step}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
