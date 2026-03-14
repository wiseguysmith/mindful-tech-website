import Link from 'next/link'
import { solutionsContent, CALENDLY_URL } from '@/lib/site-data'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { MessageSquare, Zap, Link2, Wrench, CheckCircle2 } from 'lucide-react'

const icons = [MessageSquare, Zap, Link2, Wrench]

export const metadata = {
  title: 'Solutions',
  description: 'AI Workers, Automation Systems, Protocol Integrations, and Custom Buildouts. Infrastructure for digital workers and connected systems.',
}

export default function SolutionsPage() {
  return (
    <>
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
              Solutions
            </h1>
            <p className="text-xl text-slate-600">
              We help businesses deploy AI workers, automate workflows, and plug into protocol infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutionsContent.map((solution, idx) => {
              const Icon = icons[idx]
              return (
                <Card key={idx} id={idx === 2 ? 'protocol' : undefined} hover>
                  <div className="p-3 bg-slate-100 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-near-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-near-black mb-2">{solution.title}</h2>
                  <p className="text-slate-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-electric-teal mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">Ready to build?</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-all duration-200 rounded-md"
            >
              Book a Strategy Call
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Or explore{' '}
              <Link href="/doconnect" className="text-electric-teal hover:underline">
                Docconnect
              </Link>
              {' '}for protocol-specific workflows.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
