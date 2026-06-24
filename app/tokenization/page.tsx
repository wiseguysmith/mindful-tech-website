import Link from 'next/link'
import {
  tokenizationContent,
  CALENDLY_URL,
} from '@/lib/site-data'
import { Building2, CheckCircle2, Cpu, Layers, Shield } from 'lucide-react'

const focusAreas = [
  'Revenue structures',
  'Real assets',
  'Equity and governance',
  'Community reserves',
]

const partnerCategories = [
  'Community treasury',
  'Sustainability infrastructure',
  'Real estate tokenization',
  'Carbon credits',
]

function PrimaryAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md bg-terracotta-400 px-7 py-3.5 text-sm font-medium text-cream-50 transition hover:brightness-110"
    >
      {children}
    </a>
  )
}

function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md border border-forest-400 px-7 py-3.5 text-sm font-medium text-forest-500 transition hover:bg-forest-500 hover:text-cream-50"
    >
      {children}
    </Link>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
  inverse = false,
}: {
  eyebrow: string
  title: string
  body?: string
  inverse?: boolean
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 text-4xl font-light leading-tight md:text-5xl ${
          inverse ? 'text-cream-100' : 'text-forest-500'
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-lg font-light leading-[1.7] ${inverse ? 'text-cream-500' : 'text-muted-text'}`}>
          {body}
        </p>
      )}
    </div>
  )
}

export default function TokenizationPage() {
  return (
    <div className="bg-cream-100 text-forest-500">
      <section className="relative overflow-hidden border-b border-cream-300 py-16 md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(26,43,26,0.045) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="eyebrow">Global Infrastructure</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-light leading-[1.05] md:text-6xl">
              {tokenizationContent.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-light leading-[1.65] text-muted-text">
              {tokenizationContent.hero.subhead}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryAnchor href={CALENDLY_URL}>{tokenizationContent.hero.primaryCTA}</PrimaryAnchor>
              <OutlineLink href="/tokenization#process">{tokenizationContent.hero.secondaryCTA}</OutlineLink>
            </div>
          </div>

          <div className="rounded-lg border border-cream-300 bg-cream-200/75 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta-400">
              Capital Infrastructure
            </p>
            <div className="mt-6 grid gap-3">
              {focusAreas.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-cream-300 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium text-forest-500">{item}</span>
                  <CheckCircle2 className="h-4 w-4 text-terracotta-400" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-light leading-[1.7] text-muted-text">
              Structure first, tokens second. We help teams evaluate when tokenization serves the
              asset, the stakeholders, and the operating model.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-forest-400 bg-forest-500 py-4 text-cream-100">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 text-sm font-medium sm:px-6 lg:px-8">
          {tokenizationContent.trustStrip.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="abr" className="border-b border-cream-300 bg-cream-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-cream-300 bg-cream-200/70 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Current Project</p>
                <h2 className="mt-4 text-4xl font-light leading-tight text-forest-500 md:text-5xl">
                  Altgeld Bitcoin Reserve
                </h2>
                <p className="mt-5 text-lg font-light leading-[1.7] text-muted-text">
                  A community-operated Bitcoin treasury initiative structured around long-term
                  financial sovereignty and durable governance.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Altgeld Gardens', 'Wyoming DAO LLC', 'Multisig custody', 'Community reserve'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cream-400 bg-cream-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-forest-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-terracotta-400">
                  Project Signals
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    'Community treasury model rooted in Altgeld Gardens, Chicago.',
                    'DAO-based operating structure with secure custody design.',
                    'Long-term plan focused on financial literacy, ownership, and local entrepreneurship.',
                    'Mindful Tech is part of the team building the operating infrastructure.',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-400" />
                      <p className="font-light leading-[1.65] text-forest-500">{item}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-6 border-l border-terracotta-400 bg-cream-100 p-5 font-serif-accent text-lg italic leading-[1.6] text-forest-500">
                  This is a model for permanent empowerment: ownership, trust, and sovereignty on
                  modern financial infrastructure.
                </blockquote>
                <p className="mt-5 flex items-center gap-2 text-sm font-medium text-forest-500">
                  <Building2 className="h-4 w-4 text-terracotta-400" />
                  Selected proof module. Specific public claims should be verified before launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-tokenize" className="border-b border-cream-300 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What We Tokenize"
            body="Revenue, assets, and equity - with compliant structures and interoperable infrastructure."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {tokenizationContent.whatWeTokenize.map((item) => (
              <div key={item.title} className="rounded-lg border border-cream-300 bg-cream-200/70 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-forest-100 text-forest-400">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-medium text-forest-500">{item.title}</h3>
                <p className="mt-3 font-light leading-[1.65] text-muted-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="border-b border-cream-300 bg-forest-500 py-16 text-cream-100 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Projects & Partners"
            body="Selected work across real estate, carbon, community capital, and asset infrastructure."
            inverse
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {tokenizationContent.partners.map((partner, index) => (
              <div key={partner.name} className="rounded-lg border border-forest-400 bg-cream-100 p-5 text-forest-500">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-terracotta-400">
                  {partnerCategories[index]}
                </p>
                <h3 className="mt-4 text-xl font-medium">{partner.name}</h3>
                <p className="mt-3 text-sm font-light leading-[1.65] text-muted-text">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="border-b border-cream-300 bg-cream-100 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Tech Stack"
            body="L1/L2 chains, oracles, stablecoins, fintech rails, and AI orchestration."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tokenizationContent.techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 rounded-lg border border-cream-300 bg-cream-50 px-4 py-2.5"
              >
                <Cpu className="h-4 w-4 text-forest-400" />
                <span className="text-sm font-medium text-forest-500">{tech.name}</span>
                <span className="rounded bg-gold-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-gold-500">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-cream-300 bg-cream-200 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Methodology"
            title="Our Process"
            body="From discovery to launch, structure first."
          />
          <div className="mt-12 rounded-lg border border-cream-300 bg-cream-100">
            {tokenizationContent.processSteps.map((step) => (
              <div
                key={step.step}
                className="grid gap-4 border-b border-cream-300 p-5 last:border-0 md:grid-cols-[96px_1fr]"
              >
                <div className="text-sm font-medium uppercase tracking-[0.16em] text-terracotta-400">
                  {String(step.step).padStart(2, '0')}
                </div>
                <div className="grid gap-2 md:grid-cols-[0.45fr_0.55fr]">
                  <h3 className="text-xl font-medium text-forest-500">{step.title}</h3>
                  <p className="font-light leading-[1.65] text-muted-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="border-b border-cream-300 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Use Cases & Experience"
            body="Real projects across real estate, carbon, community reserves, and revenue structures."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {tokenizationContent.useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-lg border border-cream-300 bg-cream-200/70 p-5">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-forest-100 text-forest-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-forest-500">{useCase.title}</h3>
                    <p className="mt-2 text-sm font-light leading-[1.65] text-muted-text">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 bg-cream-200 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 rounded-lg border border-cream-300 bg-cream-100 p-5">
            <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-muted-text" />
            <div>
              <h3 className="font-medium text-forest-500">Disclaimer</h3>
              <p className="mt-1 text-sm font-light leading-[1.65] text-muted-text">
                {tokenizationContent.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-500 py-14 text-cream-100 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light leading-tight text-cream-100 md:text-5xl">
            Building a tokenization project?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-light leading-[1.7] text-cream-500">
            Let&apos;s discuss structure, tech stack, and whether tokenization actually serves the
            asset.
          </p>
          <div className="mt-8">
            <PrimaryAnchor href={CALENDLY_URL}>Book a Strategy Call</PrimaryAnchor>
          </div>
        </div>
      </section>
    </div>
  )
}
