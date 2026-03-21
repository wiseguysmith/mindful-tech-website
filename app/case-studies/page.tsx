'use client'

import Section from '@/components/Section'
import Card from '@/components/Card'
import Badge from '@/components/Badge'
import { caseStudies, CALENDLY_URL } from '@/lib/site-data'

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-charcoal-600">
              Examples of capital rails structures we&apos;ve designed. Results are placeholders—actual outcomes vary by asset and structure.
            </p>
          </div>
      </Section>

      {/* Case Studies */}
      <Section>
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <Card key={idx} hover className="max-w-4xl mx-auto">
                <Badge variant="gold" className="mb-4">Capital Rails</Badge>
                <h2 className="text-2xl font-bold mb-6">{study.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Situation</h3>
                    <p className="text-charcoal-600">{study.situation}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Constraints</h3>
                    <ul className="space-y-2">
                      {study.constraints.map((constraint, constraintIdx) => (
                        <li key={constraintIdx} className="flex items-start gap-2 text-charcoal-600">
                          <span className="text-gold-500">•</span>
                          <span>{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Structure Designed</h3>
                    <p className="text-charcoal-600">{study.structure}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Outcome</h3>
                    <p className="text-charcoal-600 italic">{study.outcome}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Next Step</h3>
                    <p className="text-charcoal-600">{study.nextStep}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
      </Section>

      {/* Disclaimer */}
      <Section background="cream" containerSize="md">
          <Card className="bg-white">
            <p className="text-sm text-charcoal-600 text-center">
              <strong>Note:</strong> These case studies are templates with placeholder outcomes. 
              Actual results vary based on asset type, revenue patterns, regulatory environment, 
              and market conditions. Not legal, tax, or investment advice.
            </p>
          </Card>
      </Section>

      {/* CTA */}
      <Section containerSize="md">
          <Card className="text-center bg-gradient-to-br from-cream-100 to-gold-50/30">
            <h2 className="text-2xl font-bold mb-4">Have a Similar Asset?</h2>
            <p className="text-charcoal-600 mb-6">
              Let&apos;s discuss how we can structure capital rails for your cash-flowing asset.
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

