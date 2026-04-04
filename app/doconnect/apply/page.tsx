import Section from '@/components/Section'
import Container from '@/components/Container'
import DoconnectOnboardingForm from '@/components/DoconnectOnboardingForm'
import Link from 'next/link'

export const metadata = {
  title: 'Digital Workforce Onboarding',
  description: 'Apply to start a Digital Workforce build with MindfulTech.',
}

export default function DocconnectApplyPage() {
  return (
    <Section padding="xl" background="cream">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
            Start Your Digital Workforce
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tell us how your business works today. We&apos;ll review the bottlenecks and map the right system path.
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
