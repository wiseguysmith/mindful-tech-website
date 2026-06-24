import Link from 'next/link'
import { doconnectContent, CALENDLY_URL, DOCONNECT_URL } from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Docconnect Solutions',
  description: 'Evaluate, integrate, and operationalize Docconnect-based workflows. Protocol connectivity for coordination, access, and service delivery.',
}

export default function DocconnectPage() {
  return (
    <>
      <Section background="cream" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-forest-50/20" />
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
                  <CheckCircle2 className="w-5 h-5 text-terracotta-400 mt-0.5 flex-shrink-0" />
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
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-terracotta-400 text-cream-50 hover:brightness-110 transition-all duration-200 rounded-md"
            >
              Notarize Now
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-terracotta-400 text-cream-50 hover:brightness-110 transition-all duration-200 rounded-md"
            >
              {doconnectContent.ctas[0].label}
            </a>
            <Link
              href="/doconnect#use-cases"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-forest-400 text-forest-500 hover:bg-forest-500 hover:text-cream-50 transition-all duration-200 rounded-md"
            >
              {doconnectContent.ctas[1].label}
            </Link>
            <Link
              href="/doconnect/apply"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-forest-400 text-forest-500 hover:bg-forest-500 hover:text-cream-50 transition-all duration-200 rounded-md"
            >
              {doconnectContent.ctas[2].label}
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="use-cases" background="cream">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-near-black mb-8 text-center">
            Docconnect Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Service Provider Onboarding</h3>
              <p className="text-slate-600 text-sm">
                Streamline partner and provider onboarding with Docconnect-verified identity and document flows.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Client Intake & Routing</h3>
              <p className="text-slate-600 text-sm">
                Route clients through Docconnect-enabled workflows with compliance-aware handoffs.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Transaction & Settlement</h3>
              <p className="text-slate-600 text-sm">
                Integrate Docconnect for verifiable transaction flows and interoperable settlement.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg font-bold text-near-black mb-2">Compliance & Audit Trails</h3>
              <p className="text-slate-600 text-sm">
                Build audit-ready documentation and compliance design around Docconnect interactions.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section background="charcoal" padding="xl">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-100 mb-4">
              Ready to build a Docconnect workflow?
            </h2>
            <p className="text-xl text-cream-500 mb-8">
              Let&apos;s design the right integration for your business.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-terracotta-400 text-cream-50 hover:brightness-110 transition-all duration-200 rounded-md"
            >
              Book a Strategy Call
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
