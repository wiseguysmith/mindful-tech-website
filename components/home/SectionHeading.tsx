'use client'

import Reveal from '@/components/landing/Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} y={18}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-amber-200/90">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-4xl font-semibold md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-zinc-300 md:text-lg">{description}</p> : null}
    </Reveal>
  )
}
