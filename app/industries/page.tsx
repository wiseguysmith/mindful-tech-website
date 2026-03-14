import { industriesContent, CALENDLY_URL } from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Industries',
  description: 'Who we serve: Professional services, Real estate, Hospitality, Clinics, and Protocol-native ventures.',
}

export default function IndustriesPage() {
  return (
    <>
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
              Who We Serve
            </h1>
            <p className="text-xl text-slate-600">
              We work with businesses across industries that need smarter operations, automation, and protocol connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesContent.map((industry, idx) => (
              <Card key={idx} hover>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-bold text-near-black mb-2">{industry.title}</h2>
                    <p className="text-slate-600 text-sm">{industry.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Not sure if we fit your industry?</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-all duration-200 rounded-md"
            >
              Book a Strategy Call
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
