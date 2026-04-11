/**
 * Site Data Configuration
 * MindfulTech rebrand: Infrastructure for digital workers, connected systems, and protocol-ready businesses.
 */

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mindfultechnology'
// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local (e.g. https://formspree.io/f/your-form-id)
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
export const DOCONNECT_URL = process.env.NEXT_PUBLIC_DOCONNECT_URL || 'https://docconnect-461217483312.us-east1.run.app'

// Hero (rebrand)
export const heroContent = {
  headline: 'Build Smarter Operations with AI, Automation, and Connected Protocols',
  subhead: 'MindfulTech helps businesses deploy digital workers, automate revenue workflows, and plug into next-generation protocol infrastructure without the chaos.',
  primaryCTA: 'Book a Strategy Call',
  secondaryCTA: 'Explore Solutions',
}

// Trust / Positioning Strip
export const trustStrip = [
  'AI Agent Systems',
  'Workflow Automation',
  'Protocol Integrations',
  'Secure Operational Design',
  'Revenue & Compliance Flows',
]

// What We Do - 4 cards
export const whatWeDoCards = [
  {
    title: 'AI Workers',
    description: 'Deploy agents for lead handling, inbox triage, scheduling, client intake, research, and follow-up.',
  },
  {
    title: 'Automation Systems',
    description: 'Connect your CRM, forms, email, messaging, and databases into one reliable operating flow.',
  },
  {
    title: 'Protocol Integrations',
    description: 'Add modern connectivity layers such as Docconnect and related services where your business benefits from verifiable, interoperable workflows.',
  },
  {
    title: 'Custom Buildouts',
    description: 'For teams that need tailored logic, onboarding flows, dashboards, and secure internal tooling.',
  },
]

// Who We Serve (Industries)
export const industries = [
  'Professional services',
  'Real estate and title workflows',
  'Hospitality and local service businesses',
  'Clinics and operationally heavy teams',
  'Protocol-native and Web3-adjacent ventures',
]

// Industries page content (expanded)
export const industriesContent = [
  {
    title: 'Professional Services',
    description: 'Law firms, consultancies, and service businesses that need intake automation, client routing, and workflow efficiency.',
  },
  {
    title: 'Real Estate & Title Workflows',
    description: 'Property managers, title companies, and real estate teams with document-heavy, compliance-sensitive operations.',
  },
  {
    title: 'Hospitality & Local Services',
    description: 'Hotels, restaurants, and local businesses that benefit from booking automation, guest communication, and operational flows.',
  },
  {
    title: 'Clinics & Operationally Heavy Teams',
    description: 'Healthcare-adjacent and operationally complex teams that need HIPAA-aware automation, scheduling, and intake.',
  },
  {
    title: 'Protocol-Native & Web3-Adjacent Ventures',
    description: 'Teams building on or integrating with protocols like Docconnect, seeking verifiable workflows and interoperable systems.',
  },
]

// Solutions page content (expanded)
export const solutionsContent = [
  {
    title: 'AI Workers',
    description: 'Deploy agents for lead handling, inbox triage, scheduling, client intake, research, and follow-up.',
    features: ['Lead capture & triage', 'Inbox automation', 'Scheduling & reminders', 'Client intake flows', 'Research & follow-up'],
  },
  {
    title: 'Automation Systems',
    description: 'Connect your CRM, forms, email, messaging, and databases into one reliable operating flow.',
    features: ['CRM integration', 'Form & document intake', 'Email & messaging', 'Database sync', 'End-to-end workflows'],
  },
  {
    title: 'Protocol Integrations',
    description: 'Add modern connectivity layers such as Docconnect and related services where your business benefits from verifiable, interoperable workflows.',
    features: ['Docconnect integration', 'Verifiable workflows', 'Interoperable systems', 'Compliance design', 'Partner routing'],
  },
  {
    title: 'Custom Buildouts',
    description: 'For teams that need tailored logic, onboarding flows, dashboards, and secure internal tooling.',
    features: ['Custom dashboards', 'Onboarding flows', 'Internal tooling', 'Secure portals', 'Tailored logic'],
  },
]

// Docconnect content
export const doconnectContent = {
  headline: 'Digital Workforce Systems',
  intro: 'We design intelligent workflows that help small businesses handle intake, routing, and operational follow-through with more clarity and less manual drag.',
  services: [
    'Digital workforce strategy and workflow design',
    'Inbox, form, and lead routing architecture',
    'Custom intake and onboarding flow design',
    'Business-system integrations across CRM and communications',
    'Operational handoff logic for teams and partners',
    'Compliance-aware process structure',
    'Unified dashboard planning for requests and actions',
    'Ongoing system refinement for growth',
  ],
  ctas: [
    { label: 'Talk About Your Digital Workforce', href: CALENDLY_URL },
    { label: 'See Workforce Use Cases', href: '/doconnect#use-cases' },
    { label: 'Start a Workforce Build', href: '/doconnect/apply' },
  ],
  notarizeNowUrl: DOCONNECT_URL,
}

// Add-ons / Linked Services
export const addOns = [
  'Identity / onboarding flows',
  'Form and document intake',
  'Scheduling and routing',
  'CRM sync',
  'Notification systems (email, SMS, WhatsApp)',
  'Payment collection or invoicing',
  'Analytics dashboards',
  'Admin portals',
  'Knowledge base / support automation',
  'Secure client portals',
]

// Process - How we build
export const processSteps = [
  { step: 1, title: 'Audit the workflow', description: 'Understand current processes and pain points.' },
  { step: 2, title: 'Map the system', description: 'Design the architecture and data flows.' },
  { step: 3, title: 'Design the logic', description: 'Define rules, automations, and integrations.' },
  { step: 4, title: 'Integrate the tools / protocol', description: 'Connect CRM, forms, Docconnect, and other systems.' },
  { step: 5, title: 'Launch, test, and refine', description: 'Deploy, monitor, and iterate.' },
]

// Why MindfulTech
export const whyMindfulTech = [
  'We design for actual operations, not just demos',
  'We connect tools people already use',
  'We build for security, scale, and clarity',
  'We can bridge traditional business workflows with newer protocol layers',
]

// CTA Band
export const ctaBand = {
  headline: 'Need a system that can think, route, and connect?',
  subhead: "Let's design the right stack for your business.",
  cta: 'Book a Strategy Call',
}

// Navigation (rebrand)
export const navigation = [
  { name: 'System', href: '/#system' },
  { name: 'Digital Workforce', href: '/doconnect' },
  { name: 'Ownership', href: '/tokenization' },
  { name: 'Title2Token', href: 'https://title2token.mindfultech.services', external: true },
  { name: 'Start', href: '/contact' },
]

// Tokenization page content
export const tokenizationContent = {
  hero: {
    headline: 'Real Estate Ownership Systems',
    subhead: 'We design tokenized infrastructure for real estate ownership, investor access, and programmable cash-flow logic.',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Explore Ownership Architecture',
  },
  trustStrip: [
    'Real-asset infrastructure',
    'Ownership architecture',
    'Investor access systems',
    'Programmable cash-flow logic',
    'Real estate structures',
    'System-first design',
  ],
  whatWeTokenize: [
    {
      title: 'Property Ownership Structures',
      description: 'Design ownership architecture that maps legal structure, investor participation, and operating flow.',
    },
    {
      title: 'Investor Access Systems',
      description: 'Create clear access pathways for participation with compliant onboarding and transparent reporting.',
    },
    {
      title: 'Cash-flow Logic',
      description: 'Program how value moves across stakeholders with structured rules and operational visibility.',
    },
  ],
  abr: {
    title: 'Ownership Architecture Spotlight',
    subtitle: 'A structured model for real-estate participation and programmable cash-flow operations',
    location: 'Real estate-focused operating model',
    structure: 'Custom ownership system design',
    highlights: [
      'Maps property ownership structures into clear participation layers.',
      'Defines investor access logic with transparent rule sets.',
      'Implements programmable cash-flow pathways for distribution events.',
      'Builds reporting visibility across operators, sponsors, and participants.',
      'Keeps legal and operational constraints aligned from day one.',
    ],
    tagline: 'From operations to ownership: structured systems that move value with clarity.',
    role: 'MindfulTech designs the system architecture and operational flow layer.',
  },
  partners: [
    {
      name: 'Real Estate Operators',
      description: 'Teams modernizing ownership and investment structure for real assets.',
      initials: 'RE',
    },
    {
      name: 'Asset Sponsors',
      description: 'Groups creating structured participation models around property cash flow.',
      initials: 'AS',
    },
    {
      name: 'Investor Networks',
      description: 'Communities and funds seeking transparent access to real-estate opportunities.',
      initials: 'IN',
    },
    {
      name: 'Operations Teams',
      description: 'Organizations improving settlement and reporting workflows.',
      initials: 'OP',
    },
  ],
  techStack: [
    { name: 'Ownership Registry Layer', category: 'Core' },
    { name: 'Investor Onboarding Logic', category: 'Core' },
    { name: 'Cash-flow Rules Engine', category: 'Finance' },
    { name: 'Reporting & Audit Layer', category: 'Compliance' },
    { name: 'Settlement Integrations', category: 'Infrastructure' },
    { name: 'Portfolio Dashboards', category: 'Operations' },
    { name: 'Identity & Access Controls', category: 'Security' },
    { name: 'Data Sync Connectors', category: 'Infrastructure' },
    { name: 'Automation Orchestration', category: 'Operations' },
  ],
  processSteps: [
    { step: 1, title: 'Discovery & Fit', description: 'Understand your asset, regulatory context, and tokenization goals.' },
    { step: 2, title: 'Structure Design', description: 'Design compliant structures—revenue participation, SPV, DAO, or hybrid.' },
    { step: 3, title: 'Technical Architecture', description: 'Smart contracts, oracles, custody, and chain selection.' },
    { step: 4, title: 'Build & Integrate', description: 'Deploy infrastructure, connect fintech rails, orchestrate agents.' },
    { step: 5, title: 'Launch & Governance', description: 'Go live, monitor, and iterate on governance and operations.' },
  ],
  useCases: [
    {
      title: 'Fractional Property Participation',
      description: 'Structured investor participation models for income-generating assets.',
    },
    {
      title: 'Portfolio Cash-flow Distribution',
      description: 'Programmatic logic for distribution windows, reporting, and settlement signals.',
    },
    {
      title: 'Sponsor and Investor Alignment',
      description: 'Clear participation architecture connecting operators, sponsors, and investors.',
    },
    {
      title: 'Ownership Data Infrastructure',
      description: 'Unified data models for property structures, obligations, and lifecycle visibility.',
    },
  ],
  disclaimer: 'This is not legal, tax, or investment advice. Tokenization structures vary by jurisdiction and asset type. Consult qualified professionals for your situation.',
}

// Footer (rebrand)
export const footerContent = {
  phone: '+1 720-891-6563',
  email: 'info@mindfultech.services',
  links: [
    { name: 'Ownership Systems', href: '/tokenization' },
    { name: 'Digital Workforce', href: '/doconnect' },
    { name: 'System', href: '/#system' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Start', href: '/contact' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/mindfultech' },
  ],
  disclaimer: 'Not legal, tax, or investment advice.',
}

// Legacy exports (for Solutions, About, FAQ pages - migrate gradually)
export type Edition = 'usa' | 'capital-rails'
export const heroContentLegacy = {
  'capital-rails': {
    headline: 'Turn real-world cash flow into global capital — without selling control.',
    subhead: 'We design capital rails for cash-flowing assets: revenue participation, SPV + token hybrids, and de-risked pilots. Structure first. Tokens second.',
    primaryCTA: 'Request a Feasibility Audit',
    secondaryCTA: 'Book a 20-min Fit Call',
    trustLine: 'LATAM + U.S. execution • Guardrails by default • Investor-grade visibility',
  },
  usa: {
    headline: 'Digital Workers That Print Time™',
    subhead: 'AI agents + automation for inbox triage, lead capture, and speed-to-lead < 60s. Security-first defaults, guardrails by default.',
    primaryCTA: 'Book a 20-min Fit Call',
    secondaryCTA: 'Quick Lead Form',
    trustLine: 'Implementation timeline: ~3 weeks • Guardrails by default • Speed-to-lead < 60s',
  },
}

// What We Do sections
export const whatWeDo = {
  digitalWorkers: {
    title: 'Digital Workers',
    description: 'Inbox triage, lead capture, follow-ups across email, SMS, and chat. Speed-to-lead < 60s.',
    features: [
      'Website chat + SMS handoff',
      'CRM routing & automation',
      'HubSpot/Google + n8n/Zapier integration',
      '10+ hours/week back from busywork',
    ],
  },
  capitalRails: {
    title: 'Capital Rails',
    description: 'Revenue tokenization, structuring, and investor visibility for cash-flowing assets.',
    features: [
      'Revenue participation structures',
      'SPV + token hybrid setups',
      'Automated payout distribution',
      'Investor-grade visibility & reporting',
    ],
  },
}

// Services
export const services = {
  digitalWorkers: [
    {
      title: 'Digital Worker Setup',
      idealFor: 'SMBs wanting inbound automation',
      deliverables: [
        '1-3 digital workers (email + web chat)',
        'HubSpot or Pipedrive pipeline',
        'Lead capture widget + auto-responders',
        '2-5 automations (n8n/Zapier)',
        'Email/SMS templates + playbooks',
      ],
      timeframe: '~3 weeks',
      pricing: 'Starting at $1,250 setup + $350/mo',
    },
    {
      title: 'Enterprise Automation',
      idealFor: 'Multi-location or regulated operations',
      deliverables: [
        'Custom agent behaviors + retrieval',
        'SSO (Google/Microsoft), roles & permissions',
        'Audit logs + optional US data residency',
        'HIPAA/TCPA guidance where applicable',
        'Dedicated success manager',
      ],
      timeframe: 'Custom',
      pricing: 'Custom pricing',
    },
  ],
  capitalRails: [
    {
      title: 'Tokenization Feasibility Audit',
      idealFor: 'Asset owners exploring capital options',
      deliverables: [
        'Cash flow analysis & verification',
        'Structure recommendations (revenue participation, SPV, hybrid)',
        'Regulatory landscape assessment',
        'Technical feasibility review',
        'Investor fit analysis',
      ],
      timeframe: '2-3 weeks',
      pricing: 'Flat audit fee',
    },
    {
      title: 'Capital Structuring + Deal Architecture',
      idealFor: 'Ready to structure a deal',
      deliverables: [
        'Legal structure design (SPV, token mechanics)',
        'Revenue slice definition (% + term)',
        'Payout rules & settlement logic',
        'Investor documentation',
        'Technical architecture',
      ],
      timeframe: 'Retainer-based',
      pricing: 'Retainer',
    },
    {
      title: 'Revenue Tokenization Pilot',
      idealFor: 'Testing the waters with a small tranche',
      deliverables: [
        'Small revenue slice tokenization',
        'On-chain/off-chain settlement abstraction',
        'Automated distribution setup',
        'Investor onboarding',
        'Reporting dashboard',
      ],
      timeframe: '4-6 weeks',
      pricing: 'Small, low-risk pilot fee',
    },
    {
      title: 'SPV + Token Hybrid Setup',
      idealFor: 'Complex structures requiring legal + tech coordination',
      deliverables: [
        'SPV formation & token wrapper',
        'Legal documentation',
        'Smart contract deployment',
        'Investor portal',
        'Ongoing compliance support',
      ],
      timeframe: '6-8 weeks',
      pricing: 'Success fee + retainer',
    },
    {
      title: 'Investor Syndication / Capital Introduction',
      idealFor: 'Need capital connections',
      deliverables: [
        'Investor matching',
        'Deal presentation',
        'Due diligence coordination',
        'Capital introduction',
      ],
      timeframe: 'Ongoing',
      pricing: 'Success fee (optional)',
      optional: true,
    },
  ],
}

// How Revenue Tokenization Works
export const tokenizationSteps = [
  {
    step: 1,
    title: 'Verify cash flow',
    description: 'Review financial reports, revenue streams, and cash flow patterns.',
  },
  {
    step: 2,
    title: 'Define revenue slice',
    description: 'Set percentage and term for the revenue participation structure.',
  },
  {
    step: 3,
    title: 'Deploy payout rules',
    description: 'On-chain/off-chain settlement abstraction with automated logic.',
  },
  {
    step: 4,
    title: 'Distribute automatically',
    description: 'Monthly/weekly automated payouts to investors based on revenue.',
  },
]

// Who We Serve
export const whoWeServe = [
  {
    category: 'Asset Owners',
    description: 'Anyone with assets + ambition',
    bullets: [
      'Unlock capital without selling control',
      'Structure-first approach',
      'Keep your asset, share revenue',
      'LATAM + U.S. execution',
    ],
  },
  {
    category: 'Investors',
    description: 'Family offices, crypto funds, institutions',
    bullets: [
      'Visibility into cash-flowing assets',
      'Predictable distributions',
      'Structured downside protection',
      'Investor-grade reporting',
    ],
  },
  {
    category: 'Governments & Institutions',
    description: 'Public sector and institutional partners',
    bullets: [
      'Infrastructure tokenization',
      'Revenue participation models',
      'Compliance-first structures',
      'Pilot program design',
    ],
  },
]

// Team
export const teamMembers = [
  {
    name: 'Elijah Smith',
    title: 'CEO',
    image: '/team/elijah-smith.png',
    bio: 'Software engineer and blockchain developer with experience across Ethereum, Bitcoin, and Cardano. Chainlink Oracles & CCIP certified. Founder of Empower, a national tech and wellness event with 1,000+ attendees. Led fundraising for NECOM, a LATAM carbon credit tokenization protocol. Started MindfulTech from a belief that AI and blockchain can either advance or fracture society—it depends on how mindfully we apply it.',
  },
  {
    name: 'Deependra Tyagi',
    title: 'CTO',
    image: '/team/deependra-tyagi.png',
    bio: 'Deependra drives technical implementation at MindfulTech. A co-founder with 10+ years in AI multi-agent orchestration, he has built 100+ agent systems and led engineering teams at Allstate, the American insurance company, for seven years. University of Kentucky. Brings startup and enterprise experience to shipping AI and automation that works.',
  },
  {
    name: 'Lucy Michalski',
    title: 'Head of Digital Product Design',
    image: '/team/lucy-michalski.png',
    bio: 'Lucy owns the overall product experience at MindfulTech. A design leader with background in ecommerce UI/UX, brand design, and marketing for startups and organizations across multiple industries. Transylvania University. Uses Figma and design systems to shape how users experience AI and automation.',
  },
]

// Credibility / Proof
export const credibility = {
  achievements: [
    'Built tokenization/automation projects',
    'Ran events / led teams of 50+',
    'Working in LATAM + U.S.',
  ],
  partners: [
    { name: 'RIPPIO', location: 'LATAM', country: 'Argentina', flag: '🇦🇷' },
    { name: 'IMPESA', location: 'LATAM', country: 'Costa Rica', flag: '🇨🇷' },
    { name: 'NECOM', location: 'LATAM', country: 'Costa Rica', flag: '🇨🇷' },
    { name: 'GREENCHAIN', location: 'LATAM', country: 'Costa Rica', flag: '🇨🇷' },
    { name: 'DREAM UP PROPERTIES', location: 'US', country: 'United States', flag: '🇺🇸' },
    { name: 'AETHER', location: 'US', country: 'United States', flag: '🇺🇸' },
  ],
}

// How It Works (Capital Rails process)
export const howItWorksSteps = [
  {
    step: 1,
    title: 'Discovery + Asset Fit',
    description: 'We analyze your cash flow, constraints, and capital needs to determine fit.',
  },
  {
    step: 2,
    title: 'Structure Design',
    description: 'Select the right rail (revenue participation, SPV, hybrid) for your asset.',
  },
  {
    step: 3,
    title: 'De-risking',
    description: 'Documentation, reporting setup, and legal alignment before pilot.',
  },
  {
    step: 4,
    title: 'Pilot',
    description: 'Launch with a small tranche or revenue slice to validate the structure.',
  },
  {
    step: 5,
    title: 'Scale',
    description: 'Expand issuance, syndication, and automation based on pilot results.',
  },
]

export const whatWeNeed = [
  'Financial reports (revenue, cash flow)',
  'Asset documentation',
  'Regulatory constraints (if any)',
  'Capital requirements',
  'Timeline expectations',
]

// Case Studies (templates with placeholders)
export const caseStudies = [
  {
    title: 'LATAM Real Estate Revenue Tokenization',
    situation: 'A property management company with consistent rental revenue sought to unlock capital without selling properties.',
    constraints: [
      'Regulatory uncertainty in local jurisdiction',
      'Need for investor transparency',
      'Requirement to maintain operational control',
    ],
    structure: 'Revenue participation structure with 15% revenue slice over 3 years, tokenized on-chain with off-chain settlement.',
    outcome: '[Placeholder - Results pending]',
    nextStep: 'Scaling to additional properties in portfolio.',
  },
  {
    title: 'SaaS Revenue Tokenization Pilot',
    situation: 'A B2B SaaS company wanted to raise capital against recurring revenue without diluting equity.',
    constraints: [
      'Monthly recurring revenue model',
      'Need for predictable investor distributions',
      'Compliance with securities regulations',
    ],
    structure: 'SPV + token hybrid with automated monthly distributions based on MRR.',
    outcome: '[Placeholder - Results pending]',
    nextStep: 'Expanding to larger revenue slice.',
  },
  {
    title: 'Hospitality Revenue Participation',
    situation: 'A hotel group needed capital for expansion while maintaining ownership.',
    constraints: [
      'Seasonal revenue fluctuations',
      'Multiple properties',
      'International investor base',
    ],
    structure: 'Multi-property revenue participation with seasonal smoothing and automated quarterly distributions.',
    outcome: '[Placeholder - Results pending]',
    nextStep: 'Adding additional properties to the structure.',
  },
]

// FAQs
export const faqs = {
  digitalWorkers: [
    {
      question: 'How fast can we be live?',
      answer: 'Implementation timeline is typically ~3 weeks from kickoff to go-live, depending on complexity.',
    },
    {
      question: 'Do I need a new app?',
      answer: 'No. We integrate with your existing tools (HubSpot, Google Workspace, n8n/Zapier).',
    },
    {
      question: 'Will a human review sensitive stuff?',
      answer: 'Always. We have guardrails in place for sensitive matters, and humans review when needed.',
    },
    {
      question: 'What about security?',
      answer: 'Security-first defaults: role-based access, audit trails, least-privilege credentials. TCPA/HIPAA aware where relevant.',
    },
  ],
  capitalRails: [
    {
      question: 'Do I lose ownership?',
      answer: 'No. You keep the asset. Investors receive a time-bound share of revenue, not ownership.',
    },
    {
      question: 'Is this a security?',
      answer: 'Structures vary. We design compliant structures and work with legal counsel. Not legal, tax, or investment advice.',
    },
    {
      question: 'What jurisdictions do you support?',
      answer: 'We work in LATAM + U.S. Specific structures depend on asset location and regulatory requirements.',
    },
    {
      question: 'How do payouts work?',
      answer: 'Automated monthly or weekly distributions based on revenue. On-chain/off-chain settlement abstraction handles the mechanics.',
    },
    {
      question: 'What if revenue drops?',
      answer: 'Structures include downside protection mechanisms. Investors understand the revenue-linked nature of returns.',
    },
    {
      question: 'What\'s the timeline?',
      answer: 'Feasibility audit: 2-3 weeks. Pilot: 4-6 weeks. Full structure: 6-8 weeks. Timeline varies by complexity.',
    },
  ],
}

// Legacy navigation (replaced by rebrand navigation above)
export const navigationLegacy = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
]

