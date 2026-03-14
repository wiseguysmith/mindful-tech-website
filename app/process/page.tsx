import { processSteps, whatWeNeed, CALENDLY_URL } from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Process',
  description: 'Our 5-step process: Audit, Map, Design, Integrate, Launch. How we build your operations stack.',
}

export default function ProcessPage() {
  return (
    <>
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
              Our Process
            </h1>
            <p className="text-xl text-slate-600">
              A structured approach to designing and deploying your operations stack.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
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
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-near-black text-center mb-8">
              What We Need From You
            </h2>
            <Card>
              <ul className="space-y-4">
                {whatWeNeed.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-electric-teal mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Ready to start?</p>
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
