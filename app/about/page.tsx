import Image from 'next/image'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import { teamMembers, credibility, CALENDLY_URL } from '@/lib/site-data'

export const metadata = {
  title: 'About',
  description: 'Mission: unlock capital ethically, build investor-grade rails, empower LATAM + U.S.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero / Mission */}
      <Section background="cream" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
              About MindfulTech
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Unlocking capital ethically. Building investor-grade rails. Empowering LATAM + U.S.
            </p>
            <p className="text-slate-700">
              We design and build infrastructure for digital workers, connected systems, and protocol-ready businesses—with experience across tokenization, AI agents, and operational automation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-12">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} hover className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-near-black">{member.name}</h3>
                <p className="text-electric-teal font-medium mb-4">{member.title}</p>
                <p className="text-sm text-slate-600 text-left">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Credibility */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-near-black mb-12">
            Experience & Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <h3 className="text-lg font-bold text-near-black mb-4">Achievements</h3>
              <ul className="space-y-2">
                {credibility.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="text-electric-teal">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-bold text-near-black mb-4">Partner Geography</h3>
              <div className="flex flex-wrap gap-3">
                {credibility.partners.map((p) => (
                  <span
                    key={p.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm"
                  >
                    <span>{p.flag}</span>
                    <span className="font-medium">{p.name}</span>
                    <span className="text-slate-500">({p.country})</span>
                  </span>
                ))}
              </div>
            </Card>
          </div>
          <div className="text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-electric-teal text-near-black hover:bg-electric-teal/90 transition-colors rounded-md"
            >
              Book a Strategy Call
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
