'use client'

import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

export default function Shift() {
  return (
    <section className="section-shell bg-[#0a0b12]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="The Shift" title={homepageContent.shift.headline} description={homepageContent.shift.text} />
      </div>
    </section>
  )
}
