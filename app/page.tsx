'use client'

import Link from 'next/link'
import {
  heroContent,
  trustStrip,
  whatWeDoCards,
  industries,
  addOns,
  processSteps,
  whyMindfulTech,
  ctaBand,
  CALENDLY_URL,
} from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Card from '@/components/Card'
import DoconnectSection from '@/components/DoconnectSection'
import { MessageSquare, Zap, Link2, Wrench, CheckCircle2, ArrowRight } from 'lucide-react'

const whatWeDoIcons = [MessageSquare, Zap, Link2, Wrench]

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Section background="cream" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-soft-white to-electric-teal/5" />
        <Container className="relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-near-black mb-6 text-balance">
              {heroContent.headline}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 text-balance">
              {heroContent.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
              >
                {heroContent.primaryCTA}
              </a>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-md"
              >
                {heroContent.secondaryCTA}
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Trust Strip */}
      <Section padding="sm" className="bg-near-black text-soft-white">
        <Container size="xl">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
            {trustStrip.map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-teal" />
                {item}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. What We Do */}
      <Section id="what-we-do">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoCards.map((card, idx) => {
              const Icon = whatWeDoIcons[idx]
              return (
                <Card key={idx} hover>
                  <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-near-black" />
                  </div>
                  <h3 className="text-xl font-bold text-near-black mb-2">{card.title}</h3>
                  <p className="text-slate-600">{card.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Who We Serve */}
      <Section background="cream" id="who-we-serve">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-12">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <Card key={idx} hover>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-teal mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{industry}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Doconnect Section */}
      <DoconnectSection />

      {/* 6. Add-ons / Linked Services */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-4">
            Add-ons & Linked Services
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We integrate identity, forms, scheduling, CRM, notifications, and more into your workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((addOn, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
              >
                {addOn}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Process */}
      <Section background="cream" id="process">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card hover className="text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-electric-teal text-near-black flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-near-black mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </Card>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. Why MindfulTech */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-12">
            Why MindfulTech
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyMindfulTech.map((value, idx) => (
              <Card key={idx} hover>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-teal mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{value}</span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. CTA Band */}
      <Section background="charcoal" padding="xl">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">
              {ctaBand.headline}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {ctaBand.subhead}
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
            >
              {ctaBand.cta}
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
