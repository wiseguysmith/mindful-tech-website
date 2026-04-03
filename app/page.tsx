'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  Gauge,
  Layers,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Workflow,
} from 'lucide-react'
import AnimatedPipelineBackground from '@/components/landing/AnimatedPipelineBackground'
import AgentCapabilityCard from '@/components/landing/AgentCapabilityCard'
import Reveal from '@/components/landing/Reveal'

const agentCapabilities = [
  {
    title: 'Capture Agent',
    description: 'Transforms forms, chat, and call notes into clean structured input with context attached.',
    icon: Sparkles,
  },
  {
    title: 'Ops Agent',
    description: 'Routes every task to the right system, handles retries, and removes workflow dead ends.',
    icon: Workflow,
  },
  {
    title: 'Insight Agent',
    description: 'Surfaces bottlenecks and wins every week so optimization is built into operations.',
    icon: Gauge,
  },
  {
    title: 'Guardrail Agent',
    description: 'Applies policy, approval rules, and quality checks before outputs reach your team.',
    icon: ShieldCheck,
  },
]

const architectureLayers = [
  {
    title: 'Context Layer',
    text: 'Central memory store for clients, cases, and operational rules. Agents read one source of truth.',
  },
  {
    title: 'Orchestration Layer',
    text: 'Event-driven pipelines coordinate humans, APIs, and AI workers with transparent handoffs.',
  },
  {
    title: 'Control Layer',
    text: 'Versioned playbooks, permissions, and monitoring keep automation stable as your business evolves.',
  },
]

const results = [
  'Less manual follow-up and fewer dropped tasks',
  'Faster client response times across channels',
  'Higher output quality with repeatable systems',
  'A team that focuses on strategy, not busywork',
]

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="bg-[#07080c] text-zinc-100">
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-amber-300 via-purple-400 to-amber-300"
        style={{ scaleX: progressScale }}
      />

      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden border-b border-zinc-800/80">
        <AnimatedPipelineBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-zinc-900/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-amber-200/90">
              <WandSparkles className="h-4 w-4" />
              Mindful Automation Architecture
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-zinc-100 md:text-7xl">
              Mindful systems that work for you, not against you.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              We design conversion-focused automation systems that make operations calm, measurable,
              and scalable.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-300 to-purple-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-105"
            >
              Build My System
            </Link>
            <Link
              href="#system"
              className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/70 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-purple-300/40 hover:bg-zinc-800"
            >
              See The System
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-zinc-800/70 py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <Reveal className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-2xl font-semibold text-zinc-100">Manual work chaos</h2>
            <p className="mt-3 text-zinc-400">
              Teams jump between tools, context gets lost, and high-value work is delayed by admin load.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-2xl font-semibold text-zinc-100">Pipeline fragmentation</h2>
            <p className="mt-3 text-zinc-400">
              Leads, requests, and approvals stall because every process has different logic and no owner.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-2xl font-semibold text-zinc-100">Execution fatigue</h2>
            <p className="mt-3 text-zinc-400">
              Teams burn energy repeating tasks instead of shipping strategic work that drives growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-zinc-800/70 py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">The Shift</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              From fragile automations to mindful operating systems.
            </h2>
            <p className="mt-6 text-lg text-zinc-300">
              Mindful systems are designed around clarity: every input is intentional, every agent has a
              role, and every output moves the business forward.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="system" className="border-b border-zinc-800/70 py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl font-semibold md:text-5xl">System: input to outcomes</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Input</p>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>Web forms and chat messages</li>
                <li>Documents and meeting notes</li>
                <li>CRM and operational triggers</li>
              </ul>
            </Reveal>

            <Reveal delay={0.12} className="rounded-2xl border border-purple-300/25 bg-zinc-900/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-purple-200">Agents</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-lg border border-zinc-700/90 bg-zinc-950/60 p-3">
                  <p className="font-medium text-zinc-100">Route</p>
                </div>
                <div className="rounded-lg border border-zinc-700/90 bg-zinc-950/60 p-3">
                  <p className="font-medium text-zinc-100">Reason</p>
                </div>
                <div className="rounded-lg border border-zinc-700/90 bg-zinc-950/60 p-3">
                  <p className="font-medium text-zinc-100">Execute</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Output</p>
              <ul className="mt-4 space-y-3 text-zinc-300">
                <li>Assigned tasks with context attached</li>
                <li>Client-ready responses and updates</li>
                <li>Dashboards for visibility and control</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/70 py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl font-semibold md:text-5xl">Agent capabilities</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {agentCapabilities.map((agent, index) => (
              <Reveal key={agent.title} delay={index * 0.08}>
                <AgentCapabilityCard {...agent} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/70 py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="text-4xl font-semibold md:text-5xl">Custom architecture, not templates</h2>
            <p className="mt-5 text-zinc-300">
              Every system is designed around your workflows, service model, and growth targets. No
              one-size-fits-all stack.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {architectureLayers.map((layer, index) => (
              <Reveal
                key={layer.title}
                delay={0.08 * index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <div className="mb-3 inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs uppercase tracking-[0.16em] text-zinc-300">
                  Layer {index + 1}
                </div>
                <h3 className="text-2xl font-semibold">{layer.title}</h3>
                <p className="mt-3 text-zinc-400">{layer.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800/70 py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-4xl font-semibold md:text-5xl">Results that compound</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {results.map((result, index) => (
              <Reveal
                key={result}
                delay={index * 0.1}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/45 p-5 transition hover:border-amber-200/30"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full border border-amber-200/20 bg-amber-200/10 p-1.5">
                    <Layers className="h-4 w-4 text-amber-200" />
                  </div>
                  <p className="text-zinc-200">{result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-3xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 text-center md:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-300">CTA</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
              Build the operating system your team deserves.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
              If your workflow feels complex, that is the signal to design better systems, not work
              harder.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-300 to-purple-400 px-7 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-105"
              >
                Book Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-zinc-600 bg-zinc-900 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-400"
              >
                Explore How It Works
                <Bot className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
