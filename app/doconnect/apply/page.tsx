import Section from '@/components/Section'
import Container from '@/components/Container'
import DoconnectOnboardingForm from '@/components/DoconnectOnboardingForm'
import Link from 'next/link'

export const metadata = {
  title: 'Docconnect Onboarding',
  description: 'Apply to build a Docconnect workflow with MindfulTech.',
}

export default function DocconnectApplyPage() {
  return (
    <Section padding="xl" background="cream">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
            Build a Docconnect Workflow
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tell us about your business and what you&apos;re looking to build. We&apos;ll review and reach out to discuss next steps.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <DoconnectOnboardingForm />
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Prefer to talk first?{' '}
          <Link href="/contact" className="text-electric-teal hover:underline">
            Contact us
          </Link>
          {' '}or{' '}
          <a
            href="https://calendly.com/mindfultechnology"
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric-teal hover:underline"
          >
            book a strategy call
          </a>
          .
        </p>
      </Container>
    </Section>
  )
}
