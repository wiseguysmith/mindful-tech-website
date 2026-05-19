'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Gauge,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import AnimatedPipelineBackground from '@/components/landing/AnimatedPipelineBackground'
import AgentCapabilityCard from '@/components/landing/AgentCapabilityCard'
import Reveal from '@/components/landing/Reveal'

const agentCapabilities = [
  {
    title: 'Intake Intelligence',
    description: 'Forms, chat, and call notes transformed into clean structured input — with context attached and nothing lost.',
    icon: Sparkles,
  },
  {
    title: 'Operational Routing',
    description: 'Every task reaches the right system. Handoffs are explicit, retries are handled, dead ends are removed.',
    icon: Workflow,
  },
  {
    title: 'Operational Clarity',
    description: 'Bottlenecks surface before they compound. What is working and what is not becomes visible, not guesswork.',
    icon: Gauge,
  },
  {
    title: 'Quality Assurance',
    description: 'Policy, approval rules, and quality checks applied before outputs reach your team or your clients.',
    icon: ShieldCheck,
  },
]

const architectureLayers = [
  {
    title: 'Knowledge Layer',
    text: 'One source of truth for clients, cases, and operational rules. Every system reads from the same foundation.',
  },
  {
    title: 'Orchestration Layer',
    text: 'Event-driven pipelines coordinate people, systems, and AI with transparent handoffs at every step.',
  },
  {
    title: 'Governance Layer',
    text: 'Versioned logic, permissions, and monitoring keep the system stable as your business evolves.',
  },
]

const outcomes = [
  'Administration handled by systems, not people',
  'Faster response times across every client channel',
  'Consistent output quality built into operations',
  'A team focused on the work that actually moves the business',
]

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div style={{ backgroundColor: '#0A0A0F' }} className="text-[#E8E8F0]">
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left"
        style={{ scaleX: progressScale, backgroundColor: '#1DB97E' }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden border-b border-[#2A2A3A]">
        <AnimatedPipelineBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1DB97E]/20 bg-[#111118]/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#1DB97E]/90">
              <BookOpen className="h-4 w-4" />
              Intelligent Systems Consultancy
            </p>
            <h1 className="text-balance text-5xl font-light leading-[1.1] text-[#E8E8F0] md:text-7xl">
              Most businesses are running on systems built for a different era.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-[#8888A0] md:text-xl">
              Mindful Tech helps you understand what needs to change — and builds the intelligent
              infrastructure that replaces it.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-7 py-3 text-sm font-medium text-[#0A0A0F] transition hover:brightness-105"
              style={{ backgroundColor: '#1DB97E' }}
            >
              Book a Strategy Call
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center justify-center rounded-md border border-[#2A2A3A] bg-[#111118]/70 px-7 py-3 text-sm font-medium text-[#E8E8F0] transition hover:border-[#3A3A4A] hover:bg-[#1A1A24]"
            >
              Explore Our Approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-b border-[#2A2A3A] py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <Reveal className="rounded-2xl border border-[#2A2A3A] bg-[#111118]/40 p-6">
            <h2 className="text-xl font-medium text-[#E8E8F0]">Disconnected operations</h2>
            <p className="mt-3 text-[#8888A0]">
              Tools that do not speak to each other. Context lost between systems. Work that should
              happen automatically, happening manually.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-[#2A2A3A] bg-[#111118]/40 p-6">
            <h2 className="text-xl font-medium text-[#E8E8F0]">Invisible costs</h2>
            <p className="mt-3 text-[#8888A0]">
              The real cost of administrative overload is not obvious. It is the leads that fall
              through gaps and the strategic work that never gets started.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="rounded-2xl border border-[#2A2A3A] bg-[#111118]/40 p-6">
            <h2 className="text-xl font-medium text-[#E8E8F0]">The gap is implementation</h2>
            <p className="mt-3 text-[#8888A0]">
              The future is already here. Most businesses are not behind because they are slow — they
              are behind because no one has shown them a clear path forward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Reframe */}
      <section id="approach" className="border-b border-[#2A2A3A] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1DB97E]">The Reframe</p>
            <h2 className="mt-4 text-balance text-4xl font-light md:text-6xl">
              Modernization is not a technical project. It is a strategic one.
            </h2>
            <p className="mt-6 max-w-[680px] text-lg font-light leading-[1.75] text-[#8888A0]">
              The question is not which tools to use. It is how this business should actually operate
              in the next ten years. The businesses that will thrive are not the ones that adopted AI
              fastest — they are the ones that adopted it most intentionally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* System Architecture */}
      <section id="system" className="border-b border-[#2A2A3A] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#1DB97E]">How It Works</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">From input to outcome</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-[#2A2A3A] bg-[#111118]/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8888A0]">Input</p>
              <ul className="mt-4 space-y-3 text-[#E8E8F0]">
                <li>Web forms and client inquiries</li>
                <li>Documents and meeting notes</li>
                <li>CRM and operational triggers</li>
              </ul>
            </Reveal>

            <Reveal delay={0.12} className="rounded-2xl border border-[#1DB97E]/25 bg-[#111118]/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#1DB97E]">Intelligent Systems</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-lg border border-[#2A2A3A] bg-[#0A0A0F]/60 p-3">
                  <p className="font-medium text-[#E8E8F0]">Route</p>
                </div>
                <div className="rounded-lg border border-[#2A2A3A] bg-[#0A0A0F]/60 p-3">
                  <p className="font-medium text-[#E8E8F0]">Reason</p>
                </div>
                <div className="rounded-lg border border-[#2A2A3A] bg-[#0A0A0F]/60 p-3">
                  <p className="font-medium text-[#E8E8F0]">Execute</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="rounded-2xl border border-[#2A2A3A] bg-[#111118]/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[#8888A0]">Output</p>
              <ul className="mt-4 space-y-3 text-[#E8E8F0]">
                <li>Assigned tasks with context attached</li>
                <li>Client-ready responses and updates</li>
                <li>Dashboards for visibility and control</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="border-b border-[#2A2A3A] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#1DB97E]">Capabilities</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">What intelligent systems do</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {agentCapabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 0.08}>
                <AgentCapabilityCard {...capability} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="border-b border-[#2A2A3A] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1DB97E]">Architecture</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">Designed for your operation, not a template</h2>
            <p className="mt-5 max-w-[680px] font-light leading-[1.75] text-[#8888A0]">
              Every system is built around how your business actually works — its data flows, its
              people, its standards. Not adapted from something generic.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {architectureLayers.map((layer, index) => (
              <Reveal
                key={layer.title}
                delay={0.08 * index}
                className="rounded-2xl border border-[#2A2A3A] bg-[#111118]/50 p-6"
              >
                <div className="mb-3 inline-flex rounded-full border border-[#2A2A3A] bg-[#1A1A24] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#8888A0]">
                  Layer {index + 1}
                </div>
                <h3 className="text-xl font-medium">{layer.title}</h3>
                <p className="mt-3 font-light text-[#8888A0]">{layer.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-b border-[#2A2A3A] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#1DB97E]">After State</p>
            <h2 className="mt-4 text-4xl font-light md:text-5xl">What life looks like after</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <Reveal
                key={outcome}
                delay={index * 0.1}
                className="group rounded-xl border border-[#2A2A3A] bg-[#111118]/45 p-5 transition hover:border-[#1DB97E]/30"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full border border-[#1DB97E]/20 bg-[#1DB97E]/10 p-1.5">
                    <Layers className="h-4 w-4 text-[#1DB97E]" />
                  </div>
                  <p className="text-[#E8E8F0]">{outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-3xl border border-[#2A2A3A] bg-[#111118] p-10 text-center md:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1DB97E]">The Question</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-light md:text-5xl">
              What does your business look like when its operations finally match its ambition?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-light text-[#8888A0]">
              That is the question worth sitting with. When you are ready to answer it, we are here.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-7 py-3 text-sm font-medium text-[#0A0A0F] transition hover:brightness-105"
                style={{ backgroundColor: '#1DB97E' }}
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-md border border-[#2A2A3A] bg-[#1A1A24] px-7 py-3 text-sm font-medium text-[#E8E8F0] transition hover:border-[#3A3A4A]"
              >
                Explore How It Works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
