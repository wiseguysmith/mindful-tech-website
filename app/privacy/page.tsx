import Section from '@/components/Section'

export const metadata = {
  title: 'Privacy Policy',
  description: 'MindfulTech privacy policy and data practices.',
}

export default function PrivacyPage() {
  return (
    <Section background="cream" padding="xl" containerSize="md">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-bold text-near-black mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US')}
        </p>
        <div className="space-y-6 text-slate-700">
          <p>
            MindfulTech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our website and services.
          </p>

          <h2 className="text-xl font-semibold text-near-black">Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Information you provide:</strong> Name, email address, phone number, and message content when you submit our contact form or book a call.</li>
            <li><strong>Booking data:</strong> When you schedule through Calendly, we receive your name, email, and any information you provide in the booking flow.</li>
            <li><strong>Usage data:</strong> We may use analytics (e.g., Plausible) to understand how visitors use our site. This may include page views, referrer, and general location—typically in aggregated, non-identifying form.</li>
            <li><strong>Cookies:</strong> Where necessary for site functionality, we may use cookies. We do not use advertising or third-party tracking cookies.</li>
          </ul>

          <h2 className="text-xl font-semibold text-near-black">How We Use It</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and schedule calls</li>
            <li>Provide and improve our services</li>
            <li>Communicate with you about our offerings</li>
            <li>Understand how our website performs and improve the user experience</li>
          </ul>

          <h2 className="text-xl font-semibold text-near-black">Third Parties</h2>
          <p>We may share data with trusted service providers who assist in operating our site and business:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Formspree:</strong> Contact form submission handling</li>
            <li><strong>Calendly:</strong> Appointment scheduling</li>
            <li><strong>Analytics:</strong> Plausible or similar privacy-respecting analytics</li>
            <li><strong>Hosting:</strong> Our website and email infrastructure</li>
          </ul>
          <p>These providers are bound by their own privacy and data protection commitments.</p>

          <h2 className="text-xl font-semibold text-near-black">Data Retention &amp; Deletion</h2>
          <p>We retain contact and booking data as long as needed to fulfill the purpose for which it was collected, or as required by law. You may request deletion of your personal data at any time by contacting us.</p>

          <h2 className="text-xl font-semibold text-near-black">International Users</h2>
          <p>Our services may be accessed from various countries. If you are in the European Economic Area (EEA) or United Kingdom, we process your data in accordance with applicable laws such as the GDPR. You have rights including access, rectification, erasure, and the right to object. Contact us to exercise these rights.</p>

          <h2 className="text-xl font-semibold text-near-black">Contact</h2>
          <p>For privacy-related questions or to exercise your rights, contact us at{' '}
            <a href="mailto:info@mindfultech.services" className="text-electric-teal hover:underline">info@mindfultech.services</a>.
          </p>
        </div>
      </div>
    </Section>
  )
}
