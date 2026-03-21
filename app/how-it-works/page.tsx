'use client'

import Section from '@/components/Section'
import Card from '@/components/Card'
import { howItWorksSteps, whatWeNeed, CALENDLY_URL } from '@/lib/site-data'
import { CheckCircle2 } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-charcoal-600">
              Our structured approach to designing capital rails for cash-flowing assets.
            </p>
          </div>
      </Section>

      {/* Process Timeline */}
      <Section>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Connector line */}
                  {idx < howItWorksSteps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-charcoal-200" />
                  )}
                  
                  <div className="flex gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-charcoal-800 text-cream-50 flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-charcoal-600">{step.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </Section>

      {/* What We Need From You */}
      <Section background="cream">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              What We Need From You
            </h2>
            <Card>
              <ul className="space-y-4">
                {whatWeNeed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
      </Section>

      {/* CTA */}
      <Section containerSize="md">
          <Card className="text-center bg-gradient-to-br from-cream-100 to-gold-50/30">
            <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-charcoal-600 mb-6">
              Let&apos;s discuss your asset and capital needs.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
            >
              Request a Feasibility Audit
            </a>
          </Card>
      </Section>
    </>
  )
}

