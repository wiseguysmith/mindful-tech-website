'use client'

import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import { FORMSPREE_ENDPOINT } from '@/lib/site-data'
import { CheckCircle2 } from 'lucide-react'

export default function DoconnectOnboardingForm() {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    useCase: '',
    currentStack: '',
    timeline: '',
    email: '',
    name: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'doconnect-onboarding',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          company: '',
          role: '',
          useCase: '',
          currentStack: '',
          timeline: '',
          email: '',
          name: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitStatus === 'success') {
    return (
      <Card className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-electric-teal mx-auto mb-4" />
        <h3 className="text-xl font-bold text-near-black mb-2">Application Received</h3>
        <p className="text-slate-600">
          We&apos;ll review your information and reach out shortly to discuss your Docconnect workflow.
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-near-black mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-near-black mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-near-black mb-1">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-near-black mb-1">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Operations Lead, Founder"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          />
        </div>
        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-near-black mb-1">
            Use Case / What are you looking to build? *
          </label>
          <textarea
            id="useCase"
            name="useCase"
            required
            rows={4}
            value={formData.useCase}
            onChange={handleChange}
            placeholder="Describe your Docconnect workflow goals..."
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          />
        </div>
        <div>
          <label htmlFor="currentStack" className="block text-sm font-medium text-near-black mb-1">
            Current Stack
          </label>
          <input
            type="text"
            id="currentStack"
            name="currentStack"
            value={formData.currentStack}
            onChange={handleChange}
            placeholder="e.g. HubSpot, Docconnect, custom CRM"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          />
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-near-black mb-1">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-electric-teal focus:border-electric-teal"
          >
            <option value="">Select...</option>
            <option value="asap">ASAP</option>
            <option value="1-3 months">1–3 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="exploring">Just exploring</option>
          </select>
        </div>
        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </form>
    </Card>
  )
}
