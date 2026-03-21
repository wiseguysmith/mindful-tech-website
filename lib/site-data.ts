/**
 * Site Data Configuration
 * MindfulTech rebrand: Infrastructure for digital workers, connected systems, and protocol-ready businesses.
 */

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mindfultechnology'
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/placeholder'
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
  headline: 'Docconnect Solutions',
  intro: 'We help businesses evaluate, integrate, and operationalize Docconnect-based workflows where protocol connectivity can improve coordination, access, service delivery, or transaction flow.',
  services: [
    'Docconnect strategy and use-case design',
    'API / protocol integration planning',
    'Workflow mapping for Docconnect-enabled services',
    'Front-end pages for onboarding into Docconnect flows',
    'Partner routing and service handoff logic',
    'Compliance-aware documentation and operations design',
    'CRM / inbox / form integrations around Docconnect interactions',
    'Custom dashboards for activity, requests, and handoffs',
  ],
  ctas: [
    { label: 'Talk About a Docconnect Integration', href: CALENDLY_URL },
    { label: 'See Docconnect Use Cases', href: '/doconnect#use-cases' },
    { label: 'Build a Docconnect Workflow', href: '/doconnect/apply' },
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
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Tokenization', href: '/tokenization' },
  { name: 'Docconnect', href: 'https://docconnect-461217483312.us-east1.run.app/#', external: true },
  { name: 'Industries', href: '/industries' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

// Tokenization page content
export const tokenizationContent = {
  hero: {
    headline: 'Global Tokenization Infrastructure',
    subhead: 'We design and build tokenization rails for revenue, assets, and equity—with experience across real estate, carbon credits, and community-led sovereign reserves.',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Explore Our Process',
  },
  trustStrip: [
    'Lofty.ai',
    'NECOM',
    'ABR Wealth Fund DAO',
    'Greenchain',
    'Carbon Credits',
    'Revenue • Assets • Equity',
  ],
  whatWeTokenize: [
    {
      title: 'Revenue Tokenization',
      description: 'Turn cash-flowing assets into tokenized revenue participation—without selling ownership. SPV + token hybrids, automated distributions, investor-grade visibility.',
    },
    {
      title: 'Asset Tokenization',
      description: 'Real estate, carbon credits, and physical assets on-chain. Verifiable ownership, compliant structures, interoperable settlement.',
    },
    {
      title: 'Equity & Governance',
      description: 'Token-based ownership, DAO structures, and community-led treasuries. From Wyoming DAO LLCs to sovereign Bitcoin reserves.',
    },
  ],
  abr: {
    title: 'Altgeld Bitcoin Reserve (ABR)',
    subtitle: 'The first community-operated Bitcoin treasury in the United States',
    location: 'Altgeld Gardens, Chicago',
    structure: 'Wyoming DAO LLC',
    highlights: [
      'First community-operated Bitcoin treasury in the United States, founded in Altgeld Gardens, Chicago.',
      'Structured as a Wyoming DAO LLC with secure 2-of-3 multisig cold storage vault.',
      'Bitcoin Reserve Act passed—building a sovereign fund for the Bitcoin community in Chicago.',
      'Mission: Long-term financial sovereignty for underserved Black communities through Bitcoin savings, education, and decentralized governance.',
      '21-year plan: Youth mentorship, financial literacy, peace incentives, rent relief, homeownership, local entrepreneurship—funded without ever selling Bitcoin.',
    ],
    tagline: "This is not charity. This is not hype. This is a model for permanent empowerment. ABR isn't just stacking sats. We're stacking hope, trust, and ownership—on the blockchain.",
    role: 'MindfulTech is on the team building ABR.',
  },
  partners: [
    {
      name: 'ABR Wealth Fund DAO',
      description: 'Community-operated Bitcoin treasury. Chicago. Bitcoin Reserve Act. Sovereign fund for underserved communities.',
      initials: 'ABR',
    },
    {
      name: 'Greenchain',
      description: 'Sustainability and blockchain infrastructure.',
      initials: 'GC',
    },
    {
      name: 'Lofty.ai',
      description: 'Real estate tokenization platform. Part of the build team.',
      initials: 'L',
    },
    {
      name: 'NECOM',
      description: 'Carbon credit tokenization. On the team.',
      initials: 'N',
    },
  ],
  techStack: [
    { name: 'Cardano', category: 'L1' },
    { name: 'Ethereum', category: 'L1' },
    { name: 'Base', category: 'L2' },
    { name: 'Bitcoin L1', category: 'L1' },
    { name: 'Stablecoins', category: 'Assets' },
    { name: 'Fintech Rails', category: 'Infrastructure' },
    { name: 'AI Multi-Agent Orchestration', category: 'AI' },
    { name: 'Chainlink Oracles', category: 'Infrastructure' },
    { name: 'Chainlink CCIP', category: 'Infrastructure' },
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
      title: 'Real Estate Tokenization',
      description: 'Fractional ownership, revenue participation, and liquidity for property portfolios. Built Lofty.ai.',
    },
    {
      title: 'Carbon Credit Tokenization',
      description: 'On-chain carbon credits with verifiable provenance. NECOM.',
    },
    {
      title: 'Community Bitcoin Reserves',
      description: 'Sovereign reserves, DAO governance, multisig custody. ABR Wealth Fund DAO.',
    },
    {
      title: 'Revenue Participation & SPVs',
      description: 'Tokenized revenue slices, automated distributions, investor reporting.',
    },
  ],
  disclaimer: 'This is not legal, tax, or investment advice. Tokenization structures vary by jurisdiction and asset type. Consult qualified professionals for your situation.',
}

// Footer (rebrand)
export const footerContent = {
  phone: '+1 720-891-6563',
  email: 'info@mindfultech.services',
  links: [
    { name: 'Tokenization', href: '/tokenization' },
    { name: 'Docconnect Services', href: '/doconnect' },
    { name: 'Protocol Integrations', href: '/solutions#protocol' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Contact', href: '/contact' },
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

