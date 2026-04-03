'use client'

import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import { faqs, CALENDLY_URL } from '@/lib/site-data'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Card>
        <button
          type="button"
          className="flex w-full items-start justify-between gap-4 text-left"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Collapse' : 'Expand'} question: ${question}`}
        >
          <span className="flex-1 font-semibold">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 flex-shrink-0 text-charcoal-600" />
          ) : (
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-charcoal-600" />
          )}
        </button>
        {isOpen && <p className="mt-3 text-sm text-charcoal-600">{answer}</p>}
      </Card>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-charcoal-600">
              Common questions about Digital Workers and Capital Rails.
            </p>
          </div>
      </Section>

      {/* Digital Workers FAQs */}
      <Section>
          <div className="mb-12">
            <Badge className="mb-6">USA Edition</Badge>
            <h2 className="text-3xl font-bold mb-8">Digital Workers</h2>
            <div className="space-y-4 max-w-3xl">
              {faqs.digitalWorkers.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
      </Section>

      {/* Capital Rails FAQs */}
      <Section background="cream">
          <div>
            <Badge variant="gold" className="mb-6">Capital Rails</Badge>
            <h2 className="text-3xl font-bold mb-8">Capital Rails</h2>
            <div className="space-y-4 max-w-3xl">
              {faqs.capitalRails.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
      </Section>

      {/* Disclaimer */}
      <Section containerSize="md">
          <Card className="bg-cream-100">
            <p className="text-sm text-charcoal-600 text-center">
              <strong>Disclaimer:</strong> Not legal, tax, or investment advice. 
              Structures vary by asset, jurisdiction, and regulatory environment. 
              Consult with legal and tax professionals before making decisions.
            </p>
          </Card>
      </Section>

      {/* CTA */}
      <Section containerSize="md">
          <Card className="text-center bg-gradient-to-br from-cream-100 to-gold-50/30">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-charcoal-600 mb-6">
              Book a call to discuss your specific situation.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
            >
              Book a 20-min Fit Call
            </a>
          </Card>
      </Section>
    </>
  )
}

