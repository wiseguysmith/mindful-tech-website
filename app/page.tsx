'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MindfulLogo from '@/components/MindfulLogo'
import { CALENDLY_URL } from '@/lib/site-data'

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Animated hero tree — matches logo structure ─── */
function HeroTree() {
  const c = '#1A2B1A'
  const B = ({ x1, y1, x2, y2, w = 2.5, d = '0s' }: { x1: number; y1: number; x2: number; y2: number; w?: number; d?: string }) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={c} strokeWidth={w} strokeLinecap="round"
      style={{ strokeDasharray: 300, strokeDashoffset: 300,
               animation: `drawBranch 1s ${d} ease-out forwards` }} />
  )
  const Leaf = ({ cx, cy, d = '0s' }: { cx: number; cy: number; d?: string }) => (
    <ellipse cx={cx} cy={cy} rx={9} ry={12} fill={c}
      style={{ opacity: 0, animation: `popNode 0.35s ${d} ease-out forwards` }} />
  )
  const Node = ({ cx, cy, r = 7, d = '0s', fill = c }: { cx: number; cy: number; r?: number; d?: string; fill?: string }) => (
    <circle cx={cx} cy={cy} r={r} fill={fill}
      style={{ opacity: 0, animation: `popNode 0.35s ${d} ease-out forwards` }} />
  )

  return (
    <svg viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[320px]">
      <style>{`
        @keyframes drawBranch { to { stroke-dashoffset: 0; } }
        @keyframes popNode    { to { opacity: 1; } }
      `}</style>

      {/* Trunk */}
      <B x1={120} y1={222} x2={120} y2={80} w={7} d="0.05s" />

      {/* Center upper */}
      <B x1={120} y1={80} x2={120} y2={46} w={5} d="0.5s" />
      <Leaf cx={120} cy={34} d="1.1s" />

      {/* Inner upper-left */}
      <B x1={120} y1={94} x2={82}  y2={60} w={4} d="0.6s" />
      <Leaf cx={73}  cy={50} d="1.15s" />

      {/* Outer upper-left */}
      <B x1={120} y1={108} x2={50} y2={68} w={4} d="0.65s" />
      <Leaf cx={38}  cy={58} d="1.2s" />

      {/* Inner upper-right */}
      <B x1={120} y1={94}  x2={158} y2={60} w={4} d="0.6s" />
      <Leaf cx={167} cy={50} d="1.15s" />

      {/* Outer upper-right */}
      <B x1={120} y1={108} x2={190} y2={68} w={4} d="0.65s" />
      <Leaf cx={202} cy={58} d="1.2s" />

      {/* Mid-left arm */}
      <B x1={120} y1={140} x2={66}  y2={120} w={3.5} d="0.45s" />
      <B x1={66}  y1={120} x2={28}  y2={107} w={3}   d="0.75s" />
      <Leaf cx={16}  cy={100} d="1.25s" />
      <B x1={66}  y1={120} x2={44}  y2={142} w={3}   d="0.8s" />
      <Leaf cx={36}  cy={152} d="1.28s" />

      {/* Mid-right arm */}
      <B x1={120} y1={140} x2={174} y2={120} w={3.5} d="0.45s" />
      <B x1={174} y1={120} x2={212} y2={107} w={3}   d="0.75s" />
      <Leaf cx={224} cy={100} d="1.25s" />
      <B x1={174} y1={120} x2={196} y2={142} w={3}   d="0.8s" />
      <Leaf cx={204} cy={152} d="1.28s" />

      {/* ── Roots ── */}
      {/* Horizontal bar */}
      <B x1={60}  y1={222} x2={180} y2={222} w={4} d="0.2s" />

      {/* Far left horizontal */}
      <B x1={60}  y1={222} x2={24}  y2={222} w={3.2} d="0.3s" />
      <Node cx={16} cy={222} r={8} d="1.05s" />

      {/* Far right horizontal */}
      <B x1={180} y1={222} x2={216} y2={222} w={3.2} d="0.3s" />
      <Node cx={224} cy={222} r={8} d="1.05s" />

      {/* Left drop */}
      <line x1={60} y1={222} x2={60} y2={222}
        stroke={c} strokeWidth="3" strokeLinecap="round" />
      <path d="M 60 222 Q 60 246 80 246"
        stroke={c} strokeWidth="3.2" strokeLinecap="round" fill="none"
        style={{ strokeDasharray: 200, strokeDashoffset: 200,
                 animation: 'drawBranch 0.6s 0.85s ease-out forwards' }} />
      <Node cx={88} cy={246} r={7.5} d="1.1s" />

      {/* Right drop */}
      <path d="M 180 222 Q 180 246 160 246"
        stroke={c} strokeWidth="3.2" strokeLinecap="round" fill="none"
        style={{ strokeDasharray: 200, strokeDashoffset: 200,
                 animation: 'drawBranch 0.6s 0.85s ease-out forwards' }} />
      <Node cx={152} cy={246} r={7.5} d="1.1s" />

      {/* Center down to gold accent */}
      <B x1={120} y1={222} x2={120} y2={254} w={3.2} d="0.25s" />
      <Node cx={120} cy={264} r={10} d="1.3s" fill="#B8860B" />
      <circle cx={120} cy={264} r={4} fill={c} opacity="0.5"
        style={{ opacity: 0, animation: 'popNode 0.3s 1.35s ease-out forwards' }} />

      {/* Pulsing glow on apex */}
      <circle cx={120} cy={34} r={18} fill={c} opacity="0.06">
        <animate attributeName="r" values="18;26;18" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.06;0.02;0.06" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx={16} cy={222} r={14} fill="#C4522A" opacity="0.08">
        <animate attributeName="r" values="14;20;14" dur="3.5s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx={224} cy={222} r={14} fill="#C4522A" opacity="0.08">
        <animate attributeName="r" values="14;20;14" dur="3.5s" begin="1.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

/* ─── Before / After ─── */
const beforeAfter = [
  { before: 'Inbox overload — nothing routed, nothing tracked',     after: 'Centralized communication. Every message categorized and assigned.' },
  { before: 'Leads go silent. Follow-up depends on memory',         after: 'Automated follow-up. No lead falls through a gap.' },
  { before: 'Team spending hours on admin instead of client work',  after: 'Administration handled by intelligent systems.' },
  { before: 'Disconnected tools — CRM, forms, email all separate',  after: 'One connected operating system. Everything in sync.' },
]

/* ─── Audience routes ─── */
const audiences = [
  {
    label: 'SMB Owners & Operators',
    description: 'Your operations are growing faster than your systems. We map what is broken and build what replaces it.',
    cta: 'Start with the Audit',
    href: '/audit',
    color: '#C4522A',
  },
  {
    label: 'Founders & Builders',
    description: 'Building from scratch or restructuring. We give you the operational foundation before you need it.',
    cta: 'Explore What We Do',
    href: '/solutions',
    color: '#2D5229',
  },
  {
    label: 'Asset Owners & Operators',
    description: 'Tokenization, protocol infrastructure, and operational readiness for the next era of assets.',
    cta: 'See Tokenization',
    href: '/tokenization',
    color: '#B8860B',
  },
]

/* ─── Principles ─── */
const principles = [
  { title: 'Calm over chaos',             body: 'Systems that bring clarity, balance, and order to how your business operates.' },
  { title: 'Systems over noise',          body: 'We solve real operational problems with measurable, scalable architecture.' },
  { title: 'Infrastructure over hype',    body: 'We build enduring systems — not short-term automations that break under pressure.' },
  { title: 'Education before implementation', body: 'Clients understand what they are building before a single tool is connected.' },
]

export default function HomePage() {
  useReveal()

  return (
    <div style={{ backgroundColor: '#FAF7F2' }} className="text-[#1A2B1A]">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden border-b border-[#E8E0D4] py-24 lg:py-32">
        {/* Subtle texture */}
        <div className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26,43,26,0.04) 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left — copy */}
            <div>
              <p className="eyebrow animate-arrive" style={{ animationDelay: '0.1s' }}>
                Intelligent Systems Consultancy
              </p>
              <h1 className="mt-5 text-5xl font-light leading-[1.08] tracking-tight text-[#1A2B1A] md:text-6xl lg:text-7xl animate-arrive"
                style={{ animationDelay: '0.2s' }}>
                Most businesses are running on systems built for a different era.
              </h1>
              <p className="mt-7 max-w-lg text-lg font-light leading-[1.75] text-[#7A7468] animate-arrive"
                style={{ animationDelay: '0.35s' }}>
                Mindful Tech helps you understand what needs to change — and builds the intelligent
                infrastructure that replaces it.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-arrive" style={{ animationDelay: '0.5s' }}>
                <Link href="/audit"
                  className="inline-flex items-center rounded-md px-6 py-3 text-sm font-medium text-[#FAF7F2] transition-all hover:brightness-110"
                  style={{ backgroundColor: '#C4522A' }}>
                  Start with the Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-[#DDD6CC] bg-transparent px-6 py-3 text-sm font-light text-[#1A2B1A] transition-all hover:border-[#1A2B1A]">
                  Book a Strategy Call
                </a>
              </div>

              {/* Tagline */}
              <p className="mt-10 text-xs font-light tracking-[0.18em] uppercase text-[#7A7468] animate-arrive"
                style={{ animationDelay: '0.65s' }}>
                Mindfully bridging the gap into the digital age.
              </p>
            </div>

            {/* Right — animated tree */}
            <div className="flex justify-center lg:justify-end animate-arrive" style={{ animationDelay: '0.3s' }}>
              <HeroTree />
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="border-b border-[#E8E0D4] bg-[#F2EDE4] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Intelligent Systems', 'Operational Modernization', 'AI Implementation', 'Systems Architecture', 'Strategic Education'].map((t) => (
              <span key={t} className="text-xs font-light tracking-[0.15em] uppercase text-[#7A7468]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BEFORE / AFTER ══ */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="eyebrow">The Transformation</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-light lg:text-5xl">
              What changes when the system is right.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {/* Before column header */}
            <div className="reveal flex items-center gap-3 rounded-xl border border-[#E8E0D4] bg-[#FAF7F2] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#DDD6CC]" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#7A7468]">Before</span>
            </div>
            <div className="reveal flex items-center gap-3 rounded-xl border border-[#C4522A]/30 bg-[#FBF0EC] px-5 py-3" style={{ transitionDelay: '80ms' }}>
              <span className="h-2.5 w-2.5 rounded-full bg-[#C4522A]" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#C4522A]">After</span>
            </div>

            {beforeAfter.map((item, i) => (
              <>
                {/* Before card */}
                <div key={`b-${i}`}
                  className="reveal rounded-2xl border border-[#E8E0D4] bg-[#F2EDE4] p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}>
                  <p className="font-light leading-[1.7] text-[#7A7468]">{item.before}</p>
                </div>
                {/* After card */}
                <div key={`a-${i}`}
                  className="reveal rounded-2xl border border-[#C4522A]/20 bg-[#FBF0EC] p-6"
                  style={{ transitionDelay: `${i * 80 + 40}ms` }}>
                  <div className="flex items-start gap-3">
                    <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#C4522A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="font-light leading-[1.7] text-[#1A2B1A]">{item.after}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE REFRAME ══ */}
      <section className="border-b border-[#E8E0D4] bg-[#1A2B1A] py-24 text-[#FAF7F2]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="reveal">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#C4522A]">The Reframe</p>
              <h2 className="mt-5 text-4xl font-light leading-[1.1] lg:text-5xl">
                Modernization is not a technical project.
                <br />
                <span className="text-[#DDD6CC]">It is a strategic one.</span>
              </h2>
            </div>
            <div className="reveal space-y-6" style={{ transitionDelay: '150ms' }}>
              <p className="text-lg font-light leading-[1.75] text-[#C8BFB2]">
                The question is not which tools to use. It is how this business should actually
                operate in the next ten years.
              </p>
              <p className="font-light leading-[1.75] text-[#C8BFB2]">
                The businesses that will thrive are not the ones that adopted AI fastest. They are
                the ones that adopted it most intentionally.
              </p>
              <p className="font-serif-accent text-xl italic text-[#E8E0D4]">
                &ldquo;The gap is implementation.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHO IS THIS FOR — Audience Routing ══ */}
      <section className="border-b border-[#E8E0D4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="eyebrow">Find Your Path</p>
            <h2 className="mt-4 text-4xl font-light lg:text-5xl">Where do you fit?</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audiences.map((a, i) => (
              <div key={a.label}
                className="reveal group flex flex-col rounded-2xl border border-[#E8E0D4] bg-[#F2EDE4] p-8 transition-all hover:shadow-md"
                style={{ transitionDelay: `${i * 100}ms`, '--accent': a.color } as React.CSSProperties}>
                <div className="mb-3 h-1 w-10 rounded-full transition-all group-hover:w-16"
                  style={{ backgroundColor: a.color }} />
                <h3 className="text-xl font-medium text-[#1A2B1A]">{a.label}</h3>
                <p className="mt-3 flex-1 font-light leading-[1.7] text-[#7A7468]">{a.description}</p>
                <Link href={a.href}
                  className="mt-6 inline-flex items-center text-sm font-medium transition-colors"
                  style={{ color: a.color }}>
                  {a.cta}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRINCIPLES ══ */}
      <section className="border-b border-[#E8E0D4] bg-[#F2EDE4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <p className="eyebrow">How We Think</p>
            <h2 className="mt-4 text-4xl font-light lg:text-5xl">Principles that guide every system we build.</h2>
          </div>

          <div className="mt-14 grid gap-px border border-[#DDD6CC] rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={p.title}
                className="reveal bg-[#FAF7F2] p-8 transition-colors hover:bg-[#F2EDE4]"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mb-4 h-0.5 w-8 bg-[#C4522A]" />
                <h3 className="text-base font-medium text-[#1A2B1A]">{p.title}</h3>
                <p className="mt-2 text-sm font-light leading-[1.7] text-[#7A7468]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="reveal flex justify-center mb-8">
            <MindfulLogo size={56} color="#1A2B1A" accentColor="#C4522A" />
          </div>
          <h2 className="reveal text-4xl font-light leading-[1.1] lg:text-5xl" style={{ transitionDelay: '80ms' }}>
            What does your business look like when its operations finally match its ambition?
          </h2>
          <p className="reveal mx-auto mt-6 max-w-xl font-light leading-[1.75] text-[#7A7468]"
            style={{ transitionDelay: '160ms' }}>
            That is the question worth sitting with. When you are ready to answer it, we are here.
          </p>
          <div className="reveal mt-10 flex flex-wrap justify-center gap-4" style={{ transitionDelay: '240ms' }}>
            <Link href="/audit"
              className="inline-flex items-center rounded-md px-8 py-3.5 text-sm font-medium text-[#FAF7F2] transition-all hover:brightness-110"
              style={{ backgroundColor: '#C4522A' }}>
              Start with the Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-[#DDD6CC] bg-transparent px-8 py-3.5 text-sm font-light text-[#1A2B1A] transition-all hover:border-[#1A2B1A]">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
