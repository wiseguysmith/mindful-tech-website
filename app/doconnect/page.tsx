import Link from 'next/link'
import { doconnectContent, CALENDLY_URL, DOCONNECT_URL } from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Digital Workforce Systems',
  description: 'System design for small businesses that need intelligent workflow handling across intake, routing, and operations.',
}

export default function DocconnectPage() {
  return (
    <>
      <Section background="cream" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-soft-white to-electric-teal/5" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
              {doconnectContent.headline}
            </h1>
            <p className="text-xl text-slate-600">
              {doconnectContent.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="services">
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
              href={DOCONNECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-all duration-200 rounded-md"
            >
              Open Docconnect
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-all duration-200 rounded-md"
            >
              {doconnectContent.ctas[0].label}
            </a>
            <Link
              href="/doconnect#use-cases"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-md"
            >
              {doconnectContent.ctas[1].label}
            </Link>
            <Link
              href="/doconnect/apply"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-near-black transition-all duration-200 rounded-md"
            >
              {doconnectContent.ctas[2].label}
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="use-cases" background="cream">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-8 text-center">
            Digital Workforce Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Client Intake Routing</h3>
              <p className="text-slate-600 text-sm">
                Route new requests with cleaner logic and less manual triage.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Inbox and Task Flow</h3>
              <p className="text-slate-600 text-sm">
                Organize communications, priorities, and assignments across your stack.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Lead Follow-through</h3>
              <p className="text-slate-600 text-sm">
                Capture, qualify, and follow up with qualified opportunities faster.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Operational Handoffs</h3>
              <p className="text-slate-600 text-sm">
                Keep work moving between people and systems without context loss.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="charcoal" padding="xl">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">
              Ready to build your digital workforce?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We map your workflows and design system architecture that actually fits your business.
            </p>
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
