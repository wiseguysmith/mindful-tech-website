import Section from '@/components/Section'

export const metadata = {
  title: 'Terms of Service',
  description: 'MindfulTech terms of service and conditions of use.',
}

export default function TermsPage() {
  return (
    <Section background="cream" padding="xl" containerSize="md">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold text-near-black mb-8">Terms of Service</h1>
        <p className="text-slate-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
        <div className="space-y-6 text-slate-700">
          <p>
            By using MindfulTech&apos;s website and services, you agree to these terms. Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold text-near-black">Services</h2>
          <p>MindfulTech provides infrastructure for digital workers, automation, and protocol integrations. Our offerings include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI agents and digital workers for lead handling, inbox triage, scheduling, and client intake</li>
            <li>Automation systems connecting CRMs, forms, email, and messaging</li>
            <li>Protocol integrations (e.g., Docconnect and related services) for verifiable, interoperable workflows</li>
            <li>Capital rails structuring, tokenization advisory, and related infrastructure consulting</li>
          </ul>
          <p>Specific engagements, deliverables, and fees are governed by separate agreements between you and MindfulTech.</p>

          <h2 className="text-xl font-semibold text-near-black">Engagements</h2>
          <p>Use of this website (browsing, contact forms, or booking calls) does not create a client relationship or binding agreement. Actual work is subject to a signed statement of work, retainer agreement, or other written contract.</p>

          <h2 className="text-xl font-semibold text-near-black">Disclaimer</h2>
          <p>Our content and services do not constitute legal, tax, or investment advice. You should consult qualified professionals (attorneys, accountants, financial advisors) for your specific situation. MindfulTech is not responsible for decisions you make based on information on this site or in our communications.</p>

          <h2 className="text-xl font-semibold text-near-black">Tokenization & Capital Rails</h2>
          <p>Capital rails, asset tokenization, and related services involve significant regulatory uncertainty and risk. We provide structuring and infrastructure support—not investment advice, securities advice, or legal opinion. Outcomes depend on asset type, jurisdiction, market conditions, and regulatory changes. You are solely responsible for your own due diligence and compliance.</p>

          <h2 className="text-xl font-semibold text-near-black">Liability</h2>
          <p>To the fullest extent permitted by law, MindfulTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you (if any) for the specific service giving rise to the claim in the twelve months preceding the claim.</p>

          <h2 className="text-xl font-semibold text-near-black">Contact</h2>
          <p>For questions about these terms, contact{' '}
            <a href="mailto:info@mindfultech.services" className="text-electric-teal hover:underline">info@mindfultech.services</a>.
          </p>
        </div>
      </div>
    </Section>
  )
}
