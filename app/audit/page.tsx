import Link from 'next/link'
import { CALENDLY_URL } from '@/lib/site-data'

export const metadata = {
  title: 'Operational Intelligence Audit',
  description: 'Your business does not need more tools. It needs architecture. The Operational Intelligence Audit maps how your business actually operates — exposing hidden friction, revenue leakage, and automation opportunities.',
}

const auditAreas = [
  {
    number: '01',
    title: 'Lead Flow Architecture',
    description: 'How opportunities enter, move through, and convert. Where leads go silent and why.',
  },
  {
    number: '02',
    title: 'Workflow Mapping',
    description: 'Step-by-step visualization of how work currently moves — where it accelerates and where it stalls.',
  },
  {
    number: '03',
    title: 'Communication Architecture',
    description: 'Inboxes, CRM, scheduling, follow-up systems, and AI agents — mapped as a connected system.',
  },
  {
    number: '04',
    title: 'Bottleneck Heatmap',
    description: 'Friction and delay visualized by intensity. Every operational constraint surfaced and prioritized.',
  },
  {
    number: '05',
    title: 'AI Opportunity Matrix',
    description: 'What should be automated first and why — plotted by impact versus implementation complexity.',
  },
  {
    number: '06',
    title: 'Team & Systems Inventory',
    description: 'Current tools, roles, and operational load. What is redundant, what is missing, what is misaligned.',
  },
]

const deliverables = [
  {
    title: 'Workflow Maps',
    description: 'Visual blueprints of current operations — every step, every handoff, every gap.',
  },
  {
    title: 'Modernization Roadmap',
    description: 'Phased implementation timeline: Phase 1 quick wins, Phase 2 infrastructure, Phase 3 scale.',
  },
  {
    title: 'Executive Briefing',
    description: 'A clear, jargon-free summary of findings, priorities, and recommended first actions.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: '60-minute deep-dive into your current operations, pain points, and growth intent.',
  },
  {
    number: '02',
    title: 'Systems Mapping',
    description: 'Workflow documentation, tool audit, communication flow mapping, and team touchpoint analysis.',
  },
  {
    number: '03',
    title: 'Analysis & Modeling',
    description: 'Bottleneck identification, AI opportunity scoring, and phased roadmap construction.',
  },
  {
    number: '04',
    title: 'Delivery Session',
    description: 'Walkthrough of all visuals, findings, and roadmap. Questions answered. Path forward defined.',
  },
]

const forWho = [
  'Growing SMBs experiencing operational chaos',
  'Teams running on disconnected, manual systems',
  'Owners spending time in admin instead of strategy',
  'Businesses losing leads through workflow gaps',
  'Leaders who sense inefficiency but cannot locate it',
]

const afterState = [
  'Operations finally visible and mapped',
  'Friction points named and prioritized',
  'A phased plan — not a vague recommendation',
  'Clarity on what AI actually solves for you',
  'A business that feels organized and future-ready',
]

export default function AuditPage() {
  return (
    <div style={{ backgroundColor: '#FAF7F2' }} className="text-[#1A2B1A]">

      {/* Hero */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">
              Mindful Tech · Flagship Service
            </p>
            <h1 className="mt-4 text-balance text-5xl font-light leading-[1.1] md:text-6xl">
              Operational Intelligence Audit
            </h1>
            <p className="mt-6 text-2xl font-light text-[#7A7468]">
              Your business does not need more tools.
              <br />
              It needs architecture.
            </p>
            <p className="mt-8 max-w-[680px] font-light leading-[1.75] text-[#7A7468]">
              The Operational Intelligence Audit maps how your business actually operates —
              exposing hidden friction, revenue leakage, and automation opportunities — then
              delivers a phased modernization roadmap built for your next decade.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-medium text-[#FAF7F2] transition hover:brightness-110"
                style={{ backgroundColor: '#C4522A' }}
              >
                Book Your Audit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#E8E0D4] bg-[#F2EDE4] px-8 py-3.5 text-sm font-medium text-[#1A2B1A] transition hover:border-[#DDD6CC]"
              >
                Ask a Question First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Audit */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">What We Audit</p>
          <h2 className="mt-4 text-4xl font-light">Six areas. Complete picture.</h2>
          <p className="mt-4 max-w-[680px] font-light leading-[1.75] text-[#7A7468]">
            Most operational audits look at one system in isolation. We map the whole — because
            friction rarely lives where you think it does.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {auditAreas.map((area) => (
              <div
                key={area.number}
                className="rounded-2xl border border-[#E8E0D4] bg-[#F2EDE4]/50 p-6 transition hover:border-[#C4522A]/30"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C4522A]">
                  {area.number}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[#1A2B1A]">{area.title}</h3>
                <p className="mt-2 font-light leading-[1.75] text-[#7A7468]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">What You Receive</p>
          <h2 className="mt-4 text-4xl font-light">Not a report. A roadmap.</h2>
          <p className="mt-4 max-w-[680px] font-light leading-[1.75] text-[#7A7468]">
            Every deliverable is built to be understood by a non-technical operator, not filed
            and forgotten.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E8E0D4] bg-[#F2EDE4]/50 p-6"
              >
                <div
                  className="mb-4 h-px w-12"
                  style={{ backgroundColor: '#C4522A' }}
                />
                <h3 className="text-lg font-medium text-[#1A2B1A]">{item.title}</h3>
                <p className="mt-2 font-light leading-[1.75] text-[#7A7468]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">The Process</p>
          <h2 className="mt-4 text-4xl font-light">Four steps. No ambiguity.</h2>

          <div className="mt-12 grid gap-0">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex gap-8 border-b border-[#E8E0D4] py-8 last:border-0"
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C4522A]">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#1A2B1A]">{step.title}</h3>
                  <p className="mt-2 max-w-[560px] font-light leading-[1.75] text-[#7A7468]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For + After State */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">

            {/* Who it's for */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">This Audit Is For</p>
              <h2 className="mt-4 text-3xl font-light">You, if any of this sounds familiar.</h2>
              <ul className="mt-8 space-y-4">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: '#C4522A' }}
                    />
                    <span className="font-light leading-[1.75] text-[#7A7468]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After state */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">What Changes After</p>
              <h2 className="mt-4 text-3xl font-light">What you walk away with.</h2>
              <ul className="mt-8 space-y-4">
                {afterState.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0"
                      style={{ color: '#C4522A' }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-light leading-[1.75] text-[#1A2B1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="border-b border-[#E8E0D4] py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <blockquote className="font-serif-accent text-3xl font-light italic leading-[1.6] text-[#1A2B1A] md:text-4xl">
            &ldquo;Understanding replaces anxiety.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E8E0D4] bg-[#F2EDE4] p-10 text-center md:p-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4522A]">Ready</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-4xl font-light md:text-5xl">
              Start with the audit. Know exactly what to build.
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-light text-[#7A7468]">
              The audit is the first step in every engagement. It removes guesswork and gives you
              a clear, phased path forward — before any implementation begins.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-medium text-[#FAF7F2] transition hover:brightness-110"
                style={{ backgroundColor: '#C4522A' }}
              >
                Book Your Audit
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#E8E0D4] bg-[#F2EDE4] px-8 py-3.5 text-sm font-medium text-[#1A2B1A] transition hover:border-[#DDD6CC]"
              >
                Have a Question First
              </Link>
            </div>
            <p className="mt-6 text-xs text-[#7A7468]">
              Confidential · Mindful Tech · mindfultech.services
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
