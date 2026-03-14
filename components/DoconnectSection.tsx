'use client'

import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { doconnectContent } from '@/lib/site-data'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function DoconnectSection() {
  return (
    <Section id="doconnect" background="cream">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-4">
            {doconnectContent.headline}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {doconnectContent.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {doconnectContent.services.map((service, idx) => (
            <Card key={idx} hover>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-teal mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{service}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <a
            href={doconnectContent.notarizeNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-deep-blue text-soft-white hover:bg-deep-blue/90 transition-all duration-200 rounded-md"
          >
            Notarize Now
          </a>
          {doconnectContent.ctas.map((cta, idx) =>
            idx === 0 ? (
              <Button
                key={idx}
                variant="primary"
                size="lg"
                onClick={() => window.open(cta.href, '_blank')}
              >
                {cta.label}
              </Button>
            ) : (
              <Link
                key={idx}
                href={cta.href}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-md"
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
      </Container>
    </Section>
  )
}
