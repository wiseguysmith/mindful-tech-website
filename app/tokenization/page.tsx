'use client'

import Link from 'next/link'
import {
  tokenizationContent,
  CALENDLY_URL,
} from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import { CheckCircle2, ArrowRight, Shield, Layers, Cpu, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TokenizationPage() {
  return (
    <div className="tokenization-page">
      {/* 1. Hero - with pattern overlay */}
      <Section background="cream" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-soft-white to-electric-teal/5" />
        <div className="absolute inset-0 bg-tokenization-dots opacity-60" aria-hidden />
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden />
        <Container className="relative">
          <p className="section-label text-center mb-4">Global Infrastructure</p>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-near-black mb-6 text-balance leading-tight">
              {tokenizationContent.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 text-balance max-w-3xl mx-auto leading-relaxed">
              {tokenizationContent.hero.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 shadow-md hover:shadow-lg transition-all rounded-xl"
              >
                {tokenizationContent.hero.primaryCTA}
              </a>
              <Link
                href="/tokenization#process"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-xl"
              >
                {tokenizationContent.hero.secondaryCTA}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Trust Strip - refined */}
      <Section padding="sm" className="bg-near-black text-soft-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tokenization-grid opacity-30" aria-hidden />
        <Container size="xl" className="relative">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
            {tokenizationContent.trustStrip.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-teal shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. ABR Spotlight - premium credibility section */}
      <Section id="abr" background="cream" className="relative">
        <div className="absolute inset-0 bg-tokenization-dots opacity-40" aria-hidden />
        <Container className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="card-proof p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-near-black text-electric-teal flex items-center justify-center text-xl font-bold shadow-lg">
                    ABR
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-electric-teal/15 text-electric-teal rounded-full mb-2">
                      Current Project
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-near-black leading-tight">
                      {tokenizationContent.abr.title}
                    </h2>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-slate-700 mb-2">
                {tokenizationContent.abr.subtitle}
              </p>
              <p className="text-slate-600 mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-teal" />
                {tokenizationContent.abr.location} • {tokenizationContent.abr.structure}
              </p>
              <div className="space-y-4 mb-8">
                {tokenizationContent.abr.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric-teal mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-electric-teal pl-6 py-3 text-slate-700 italic bg-slate-50/50 -mx-2 px-4 rounded-r-lg">
                {tokenizationContent.abr.tagline}
              </blockquote>
              <p className="mt-6 font-semibold text-near-black flex items-center gap-2">
                <Building2 className="w-5 h-5 text-electric-teal" />
                {tokenizationContent.abr.role}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. What We Tokenize - elevated cards */}
      <Section id="what-we-tokenize" className="bg-tokenization-grid">
        <Container>
          <p className="section-label text-center">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-4">
            What We Tokenize
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Revenue, assets, and equity—with compliant structures and interoperable infrastructure.
          </p>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {tokenizationContent.whatWeTokenize.map((item, idx) => (
              <div key={idx} className="card-elevated p-6 lg:p-8 flex flex-col">
                <div className="p-3.5 bg-electric-teal/10 rounded-xl w-fit mb-5">
                  <Layers className="w-6 h-6 text-electric-teal" />
                </div>
                <h3 className="text-xl font-bold text-near-black mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Partners - proof-point cards */}
      <Section background="cream" id="partners">
        <Container>
          <p className="section-label text-center">Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-4">
            Projects & Partners
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Current and past engagements across real estate, carbon, community reserves, and asset tokenization.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenizationContent.partners.map((partner, idx) => (
              <div
                key={idx}
                className={cn(
                  'card-elevated p-6 text-center flex flex-col items-center',
                  idx === 0 && 'lg:col-span-1 lg:row-span-1'
                )}
              >
                <div className="w-20 h-20 rounded-2xl bg-near-black text-electric-teal flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                  {partner.initials}
                </div>
                <h3 className="text-lg font-bold text-near-black mb-2">{partner.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Tech Stack - refined badges */}
      <Section id="tech-stack" className="bg-tokenization-grid">
        <Container>
          <p className="section-label text-center">Infrastructure</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-4">
            Tech Stack
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            L1/L2 chains, oracles, stablecoins, fintech rails, and AI orchestration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tokenizationContent.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-soft-white border border-slate-200 shadow-sm hover:shadow-md hover:border-electric-teal/40 transition-all duration-200"
              >
                <Cpu className="w-4 h-4 text-electric-teal shrink-0" />
                <span className="font-medium text-near-black text-sm">{tech.name}</span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Process - clearer flow */}
      <Section background="cream" id="process" padding="xl">
        <Container>
          <p className="section-label text-center">Methodology</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-4">
            Our Process
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            From discovery to launch—structure first, tokens second.
          </p>
          <div className="grid md:grid-cols-5 gap-6 lg:gap-4">
            {tokenizationContent.processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                <div className="card-elevated p-6 text-center h-full w-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-electric-teal text-near-black flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-near-black mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{step.description}</p>
                </div>
                {idx < tokenizationContent.processSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 lg:-right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Use Cases - proof styling */}
      <Section id="use-cases">
        <Container>
          <p className="section-label text-center">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-4">
            Use Cases & Experience
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Real projects across real estate, carbon, community reserves, and revenue structures.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {tokenizationContent.useCases.map((uc, idx) => (
              <div key={idx} className="card-proof p-6 flex items-start gap-4">
                <div className="p-2 bg-electric-teal/10 rounded-lg shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-electric-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-near-black mb-1">{uc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Disclaimer - refined */}
      <Section padding="md" className="bg-slate-100/80 border-y border-slate-200">
        <Container size="md">
          <div className="flex items-start gap-5">
            <div className="p-2.5 bg-soft-white rounded-xl border border-slate-200 shadow-sm shrink-0">
              <Shield className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="font-bold text-near-black mb-2">Disclaimer</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {tokenizationContent.disclaimer}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. CTA - distinct close */}
      <Section background="charcoal" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-tokenization-dots opacity-20" aria-hidden />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-teal/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden />
        <Container size="md" className="relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">
              Building a tokenization project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss structure, tech stack, and how we can help.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 shadow-lg hover:shadow-xl transition-all rounded-md"
            >
              Book a Strategy Call
            </a>
          </div>
        </Container>
      </Section>
    </div>
  )
}
