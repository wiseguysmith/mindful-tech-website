'use client'

import { motion } from 'framer-motion'
import Reveal from '@/components/landing/Reveal'
import SectionHeading from '@/components/home/SectionHeading'
import { homepageContent } from '@/lib/homepage-content'

export default function SystemVisualization() {
  return (
    <section id="system" className="section-shell relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(217,119,6,0.14),transparent_44%),radial-gradient(circle_at_82%_24%,rgba(147,51,234,0.16),transparent_46%),linear-gradient(to_bottom,rgba(9,10,16,0.28),rgba(7,8,12,0.72))]" />
      <motion.div
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-amber-300/12 blur-3xl"
        animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-6 h-72 w-72 rounded-full bg-violet-500/14 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Visualization"
          title={homepageContent.system.headline}
          description="One system layer turns noise into movement."
          centered
        />

        <Reveal className="surface-panel mt-10 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-400">Input</span>
            <span className="text-xs uppercase tracking-[0.18em] text-amber-200/90">System Layer</span>
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-400">Output</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {homepageContent.system.flows.map((flow, index) => (
            <Reveal
              key={`${flow.input}-${flow.system}`}
              delay={0.08 + index * 0.1}
              className="surface-panel p-6"
            >
              <div className="grid grid-cols-1 items-center gap-3 text-sm sm:grid-cols-[1fr_auto_1fr_auto_1fr] md:text-base">
                <div className="rounded-lg border border-zinc-700/80 bg-zinc-950/65 px-3 py-2 text-zinc-300">
                  {flow.input}
                </div>
                <span className="hidden text-zinc-500 sm:block">{'>'}</span>
                <span className="text-zinc-500 sm:hidden">{'v'}</span>
                <div className="rounded-lg border border-purple-300/30 bg-zinc-900/70 px-3 py-2 font-medium text-purple-200">
                  {flow.system}
                </div>
                <span className="hidden text-zinc-500 sm:block">{'>'}</span>
                <span className="text-zinc-500 sm:hidden">{'v'}</span>
                <div className="rounded-lg border border-amber-200/25 bg-zinc-950/65 px-3 py-2 text-amber-200/90">
                  {flow.output}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
