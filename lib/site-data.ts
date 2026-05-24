/**
 * Site Data — Mindful Tech
 * Intelligent Systems Consultancy
 * "Mindfully bridging the gap into the digital age."
 */

export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/mindfultechnology'
export const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || ''
export const DOCONNECT_URL = process.env.NEXT_PUBLIC_DOCONNECT_URL || 'https://docconnect-461217483312.us-east1.run.app'

// Hero
export const heroContent = {
  headline: 'Most businesses are running on systems built for a different era.',
  subhead: 'Mindful Tech helps you understand what needs to change — and builds the intelligent infrastructure that replaces it.',
  primaryCTA: 'Book a Strategy Call',
  secondaryCTA: 'Explore Our Approach',
}

// Trust / Positioning Strip
export const trustStrip = [
  'Intelligent Systems',
  'Operational Modernization',
  'AI Implementation',
  'Systems Architecture',
  'Strategic Education',
]

// What We Do — 4 cards
export const whatWeDoCards = [
  {
    title: 'Intelligent Automation',
    description: 'AI systems that handle intake, routing, scheduling, follow-up, and triage — so your team focuses on the work that actually matters.',
  },
  {
    title: 'Connected Infrastructure',
    description: 'Your CRM, forms, communication channels, and databases — unified into one reliable operating system instead of a collection of disconnected tools.',
  },
  {
    title: 'Protocol Integrations',
    description: 'Modern connectivity layers where verifiable, interoperable workflows improve coordination, access, and service delivery.',
  },
  {
    title: 'Strategic Education',
    description: 'Clients understand what they are building before they build it. Implementation without comprehension creates fragile systems.',
  },
]

// Who We Serve
export const industries = [
  'Professional services and consulting',
  'Real estate and title operations',
  'Hospitality and local service businesses',
  'Clinics and operationally complex teams',
  'Ventures building on modern protocol infrastructure',
]

// Industries page content
export const industriesContent = [
  {
    title: 'Professional Services',
    description: 'Law firms, consultancies, and service businesses where intake automation, client routing, and operational clarity translate directly into capacity and revenue.',
  },
  {
    title: 'Real Estate & Title Operations',
    description: 'Property managers, title companies, and real estate teams with document-heavy, compliance-sensitive workflows that benefit from intelligent structure.',
  },
  {
    title: 'Hospitality & Local Services',
    description: 'Hotels, restaurants, and local businesses where booking automation, guest communication, and operational consistency determine the client experience.',
  },
  {
    title: 'Clinics & Operationally Complex Teams',
    description: 'Healthcare-adjacent and operationally intensive teams that need thoughtful automation, scheduling intelligence, and compliant intake systems.',
  },
  {
    title: 'Protocol-Native Ventures',
    description: 'Teams building on or integrating with modern protocol infrastructure — seeking verifiable workflows and interoperable systems that scale.',
  },
]

// Solutions page content
export const solutionsContent = [
  {
    title: 'Intelligent Automation',
    description: 'AI systems that handle intake, routing, scheduling, follow-up, and triage — built around how your business actually operates.',
    features: ['Lead capture and routing', 'Inbox intelligence', 'Scheduling and reminders', 'Client intake systems', 'Research and follow-up automation'],
  },
  {
    title: 'Connected Infrastructure',
    description: 'Your tools unified into one reliable operating system — CRM, forms, communication, and databases working in concert.',
    features: ['CRM integration', 'Form and document intake', 'Email and messaging coordination', 'Database synchronization', 'End-to-end workflow design'],
  },
  {
    title: 'Protocol Integrations',
    description: 'Modern connectivity layers where verifiable, interoperable workflows improve how your business coordinates, accesses, and delivers.',
    features: ['Docconnect integration', 'Verifiable workflow design', 'Interoperable systems', 'Compliance-aware architecture', 'Partner routing and handoffs'],
  },
  {
    title: 'Custom Architecture',
    description: 'For teams with tailored requirements — bespoke logic, onboarding systems, dashboards, and secure internal tooling built to specification.',
    features: ['Custom dashboards', 'Onboarding architecture', 'Internal tooling', 'Secure client portals', 'Business-specific logic'],
  },
]

// Docconnect content
export const doconnectContent = {
  headline: 'Docconnect Integration',
  intro: 'We help businesses evaluate, integrate, and operationalize Docconnect-based workflows where protocol connectivity can meaningfully improve coordination, access, service delivery, or transaction flow.',
  services: [
    'Docconnect strategy and use-case design',
    'API and protocol integration planning',
    'Workflow mapping for Docconnect-enabled services',
    'Onboarding pages for Docconnect flows',
    'Partner routing and service handoff logic',
    'Compliance-aware documentation and operational design',
    'CRM, inbox, and form integrations around Docconnect interactions',
    'Custom dashboards for activity, requests, and handoffs',
  ],
  ctas: [
    { label: 'Discuss a Docconnect Integration', href: CALENDLY_URL },
    { label: 'See Docconnect Use Cases', href: '/doconnect#use-cases' },
    { label: 'Build a Docconnect Workflow', href: '/doconnect/apply' },
  ],
  notarizeNowUrl: DOCONNECT_URL,
}

// Add-ons
export const addOns = [
  'Identity and onboarding flows',
  'Form and document intake',
  'Scheduling and routing',
  'CRM synchronization',
  'Notification systems — email, SMS, messaging',
  'Payment collection and invoicing',
  'Analytics dashboards',
  'Administrative portals',
  'Knowledge base and support intelligence',
  'Secure client portals',
]

// Process — How we work
export const processSteps = [
  { step: 1, title: 'Understand the business', description: 'Before any system is designed, we understand the operation — its flows, friction points, and the outcomes that matter.' },
  { step: 2, title: 'Map the architecture', description: 'We design the system as a whole: how data moves, where intelligence is applied, and how the pieces connect.' },
  { step: 3, title: 'Define the logic', description: 'Rules, automations, integrations, and handoffs are specified clearly before any tool is touched.' },
  { step: 4, title: 'Build and integrate', description: 'Implementation follows the architecture. Tools are connected, systems activated, and workflows deployed.' },
  { step: 5, title: 'Launch, refine, and educate', description: 'We go live, monitor performance, and ensure the team understands what they have built and how to evolve it.' },
]

// Why Mindful Tech
export const whyMindfulTech = [
  'We lead with systems thinking — not tool recommendations',
  'Clients understand what they are building before it is built',
  'We design for actual operations, not demonstrations',
  'Modernization is approached strategically, not reactively',
]

// CTA Band
export const ctaBand = {
  headline: 'What does your business look like when its operations finally match its ambition?',
  subhead: 'That is the question worth sitting with. When you are ready to answer it, we are here.',
  cta: 'Book a Strategy Call',
}

// Navigation
export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Automation', href: '/solutions' },
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
    headline: 'Tokenization Infrastructure',
    subhead: 'We design and build tokenization architecture for revenue, assets, and equity — with experience across real estate, carbon credits, and community-led capital structures.',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Explore Our Process',
  },
  trustStrip: [
    'Lofty.ai',
    'NECOM',
    'ABR Wealth Fund DAO',
    'Greenchain',
    'Carbon Credits',
    'Revenue · Assets · Equity',
  ],
  whatWeTokenize: [
    {
      title: 'Revenue Tokenization',
      description: 'Turn cash-flowing assets into tokenized revenue participation — without selling ownership. SPV and token hybrid structures, automated distributions, investor-grade transparency.',
    },
    {
      title: 'Asset Tokenization',
      description: 'Real estate, carbon credits, and physical assets on-chain. Verifiable ownership, compliant structures, interoperable settlement.',
    },
    {
      title: 'Equity & Governance',
      description: 'Token-based ownership, DAO structures, and community-operated treasuries. From Wyoming DAO LLCs to sovereign Bitcoin reserves.',
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
      'Bitcoin Reserve Act passed — building a sovereign fund for the Bitcoin community in Chicago.',
      'Mission: Long-term financial sovereignty for underserved Black communities through Bitcoin savings, education, and decentralized governance.',
      '21-year plan: Youth mentorship, financial literacy, peace incentives, rent relief, homeownership, local entrepreneurship — funded without ever selling Bitcoin.',
    ],
    tagline: 'This is not charity. This is not hype. This is a model for permanent empowerment. ABR is building ownership, trust, and sovereignty — on the blockchain.',
    role: 'Mindful Tech is on the team building ABR.',
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
    { step: 2, title: 'Structure Design', description: 'Design compliant structures — revenue participation, SPV, DAO, or hybrid.' },
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
      description: 'Tokenized revenue structures, automated distributions, investor reporting.',
    },
  ],
  disclaimer: 'Not legal, tax, or investment advice. Tokenization structures vary by jurisdiction and asset type. Consult qualified professionals for your situation.',
}

// Footer
export const footerContent = {
  tagline: 'Mindfully bridging the gap into the digital age.',
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

// About page
export const aboutContent = {
  mission: {
    headline: 'Why Mindful Tech exists.',
    body: 'Most businesses are running on systems built for a different era. Not because they are behind — because no one has shown them a better path. The cost is invisible: time lost to administration, leads that fall through gaps, teams doing work that systems should handle. The future is already here. The gap is implementation.',
  },
  philosophy: {
    headline: 'How we think.',
    body: 'Modernization is not a technical project. It is a strategic one. The question is not which tools to use — it is how this business should actually operate in the next ten years. The businesses that will thrive are not the ones that adopted AI fastest. They are the ones that adopted it most intentionally.',
  },
  approach: {
    headline: 'What makes us different.',
    points: [
      'We lead with systems thinking — seeing business as architecture, not a collection of tasks.',
      'We educate before we implement — clients understand what they are building before it is built.',
      'We design for calm — intelligent infrastructure should reduce complexity, not add to it.',
      'We make modernization accessible — it is not reserved for large corporations.',
    ],
  },
  transformation: {
    headline: 'What life looks like after.',
    body: 'Operations running on intelligent infrastructure. Teams focused on what humans do best. Leaders who understand their systems and can evolve them. A business that feels modern — not because it uses new tools, but because it thinks differently about how work gets done.',
  },
}

// How It Works steps
export const howItWorksSteps = processSteps

// What We Need from clients
export const whatWeNeed = [
  'An open mind — modernization requires reconsidering how work is done, not just which tools are used.',
  'A real business problem — we work best with specific pain: leads falling through gaps, admin overload, disconnected systems.',
  'Commitment to understanding — clients who engage with the process get better outcomes.',
  'Patience with the design phase — good architecture takes time. We do not rush the thinking.',
]

// FAQ items (object format for the legacy FAQ page)
export const faqs = {
  digitalWorkers: [
    {
      question: 'What is an intelligent systems consultancy?',
      answer: 'We are not an AI agency, a software vendor, or a freelance automation shop. We are a strategic modernization consultancy — one that leads with systems thinking and education before implementation.',
    },
    {
      question: 'Is this just automation with a different name?',
      answer: 'Automation is one component. Intelligent systems are the architecture that automation operates within — the rules, the data flows, the handoffs, and the intelligence that makes automation reliable.',
    },
    {
      question: 'How do you approach AI without the hype?',
      answer: 'AI is introduced as infrastructure, not magic. The framing is always: here is what this does, here is how it does it, here is what a real business uses it for.',
    },
    {
      question: 'Do you work with businesses that are not technical?',
      answer: 'That is exactly who we are built for. Our education-first approach means you understand what is being built before it is built.',
    },
  ],
  capitalRails: [
    {
      question: 'What can be tokenized?',
      answer: 'Revenue streams, real assets, equity structures, and governance rights — any asset with clear legal ownership, defined cash flows, or participatory rights can be evaluated for tokenization.',
    },
    {
      question: 'Is tokenization regulated?',
      answer: 'Yes — and the regulatory context varies significantly by asset type and jurisdiction. We design compliant structures from the start and work alongside qualified legal and financial professionals. Not legal, tax, or investment advice.',
    },
    {
      question: 'What is the ABR Wealth Fund DAO?',
      answer: 'The Altgeld Bitcoin Reserve is the first community-operated Bitcoin treasury in the United States, structured as a Wyoming DAO LLC. Mindful Tech is on the team building ABR — a 21-year mission for financial sovereignty in underserved communities.',
    },
  ],
}

// Services (object format matching the legacy /services page)
export const services = {
  digitalWorkers: [
    {
      title: 'Starter Automation Package',
      idealFor: 'SMBs with 1–5 person teams ready to automate intake and follow-up',
      timeframe: '2–3 weeks',
      pricing: 'Starting at $1,500 one-time setup',
      deliverables: [
        'Lead capture form + CRM integration',
        'Automated follow-up sequence (email/SMS)',
        'Inbox triage routing rules',
        'Basic reporting dashboard',
      ],
    },
    {
      title: 'Growth Operations System',
      idealFor: 'Growing teams with complex intake, scheduling, or multi-channel communication needs',
      timeframe: '4–6 weeks',
      pricing: 'Starting at $3,500 one-time setup',
      deliverables: [
        'Multi-channel lead capture and routing',
        'AI-assisted triage and qualification',
        'Scheduling and reminder automation',
        'CRM synchronization and reporting',
        'Staff onboarding and documentation',
      ],
    },
  ],
  capitalRails: [
    {
      title: 'Tokenization Feasibility Audit',
      idealFor: 'Asset owners exploring whether tokenization is viable for their asset',
      timeframe: '1–2 weeks',
      pricing: 'Flat fee — contact for pricing',
      optional: false,
      deliverables: [
        'Asset assessment and fit analysis',
        'Regulatory landscape overview',
        'Structure options and recommendations',
        'Go/no-go recommendation with rationale',
      ],
    },
    {
      title: 'Revenue Tokenization Structure',
      idealFor: 'Cash-flowing assets ready to offer token-based revenue participation',
      timeframe: '6–12 weeks',
      pricing: 'Retainer or success fee — contact for pricing',
      optional: false,
      deliverables: [
        'SPV or DAO structure design',
        'Smart contract specification',
        'Investor transparency dashboard',
        'Distribution automation architecture',
        'Legal coordination support',
      ],
    },
    {
      title: 'Docconnect Integration',
      idealFor: 'Businesses wanting verifiable document workflows alongside tokenization',
      timeframe: 'Add-on — 2–4 weeks',
      pricing: 'Add-on pricing — contact for details',
      optional: true,
      deliverables: [
        'Docconnect workflow design',
        'Integration with existing systems',
        'Verifiable document routing',
      ],
    },
  ],
}

// Case Studies
export const caseStudies = [
  {
    title: 'Regional Hospitality Group — Operational Modernization',
    situation: 'A regional hotel group with 4 properties was managing reservations, guest communications, and maintenance requests across disconnected spreadsheets, email inboxes, and manual phone calls.',
    constraints: [
      'No centralized CRM or ticketing system',
      'High staff turnover creating institutional knowledge gaps',
      'Guest satisfaction declining due to communication delays',
    ],
    structure: 'Unified intake and routing system connecting booking, maintenance, and guest communication into a single operational hub with automated follow-up and escalation logic.',
    outcome: 'Placeholder: operational clarity achieved within 60 days. Guest response time reduced significantly. Staff onboarding time cut in half.',
    nextStep: 'Book an Operational Intelligence Audit to map your current systems and identify the highest-leverage improvements.',
  },
  {
    title: 'Professional Services Firm — Lead Flow Architecture',
    situation: 'A mid-sized consulting firm was losing prospective clients between initial inquiry and first meeting. No consistent intake process existed and follow-up depended on individual staff memory.',
    constraints: [
      'Leads arriving via multiple channels with no unified capture point',
      'No automated qualification or routing logic',
      'Follow-up inconsistent and manually dependent',
    ],
    structure: 'Multi-channel lead capture with automated qualification scoring, intelligent routing to the right team member, and a structured follow-up sequence with escalation triggers.',
    outcome: 'Placeholder: lead-to-meeting conversion improved substantially. No leads lost to follow-up gaps within 90 days of implementation.',
    nextStep: 'Start with an Operational Intelligence Audit to diagnose your current lead flow and design the right architecture.',
  },
]

// FAQ content
export const faqContent = [
  {
    category: 'Intelligent Systems',
    questions: [
      {
        q: 'What is an intelligent systems consultancy?',
        a: 'We are not an AI agency, a software vendor, or a freelance automation shop. We are a strategic modernization consultancy — one that leads with systems thinking and education before implementation. The difference is that we design the whole before we build the parts.',
      },
      {
        q: 'Is this just automation with a different name?',
        a: 'Automation is one component. Intelligent systems are the architecture that automation operates within — the rules, the data flows, the handoffs, and the intelligence that makes automation reliable. Automation without architecture creates fragile workflows. Systems thinking creates durable ones.',
      },
      {
        q: 'How do you approach AI without the hype?',
        a: 'AI is introduced as infrastructure, not magic. The framing is always: here is what this does, here is how it does it, here is what a real business uses it for. Vague claims create anxiety. Specific implementations create clarity.',
      },
      {
        q: 'Do you work with businesses that are not technical?',
        a: 'That is exactly who we are built for. Our education-first approach means you understand what is being built before it is built. Technical detail is included only when it serves understanding.',
      },
    ],
  },
  {
    category: 'Tokenization',
    questions: [
      {
        q: 'What can be tokenized?',
        a: 'Revenue streams, real assets, equity structures, and governance rights — any asset with clear legal ownership, defined cash flows, or participatory rights can be evaluated for tokenization. The question is always whether the structure serves the asset and its stakeholders.',
      },
      {
        q: 'Is tokenization regulated?',
        a: 'Yes — and the regulatory context varies significantly by asset type and jurisdiction. We design compliant structures from the start and work alongside qualified legal and financial professionals. Not legal, tax, or investment advice.',
      },
      {
        q: 'What is the ABR Wealth Fund DAO?',
        a: 'The Altgeld Bitcoin Reserve is the first community-operated Bitcoin treasury in the United States, structured as a Wyoming DAO LLC. Mindful Tech is on the team building ABR — a 21-year mission for financial sovereignty in underserved communities.',
      },
    ],
  },
]
