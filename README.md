# Mindful Tech Website

A futuristic, spiritual-professional website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🎨 Design System

### Color Palette
- **Background**: `#0B0F1A` (deep near-black blue)
- **Primary**: `#63F5FF` (neon cyan)
- **Secondary**: `#B95CFF` (neon violet)
- **Accent**: `#F5D061` (sun-gold)
- **Earth**: `#58A055` (grounded green)

### Typography
- **Body**: Inter/Plus Jakarta Sans
- **Headings**: Space Grotesk/Sora

### Components
- `GlowCard`: Reusable card with neon hover effects
- `SacredBackground`: Animated sacred geometry background
- `.section`: Consistent section spacing and max-width
- `.btn-primary` / `.btn-secondary`: Styled CTA buttons

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout with background
│   └── projects/
│       └── coinscious-building/
│           └── page.tsx   # Project detail page
├── components/            # Reusable UI components
│   ├── SacredBackground.tsx
│   └── GlowCard.tsx
├── content/              # Centralized content management
│   └── site.ts
└── lib/                  # Utility functions
    └── utils.ts
```

## 🎯 Features

### Landing Page (/)
- Hero section with tagline and CTAs
- About section with company values
- Mission statement
- Project spotlight (Coinscious Building)
- Updates section (Agentic Studio teaser)
- Newsletter signup
- Contact & application forms

### Project Page (/projects/coinscious-building)
- Detailed project overview
- Problem → Solution narrative
- Infrastructure modules grid
- Flow diagram (SVG)
- Roadmap timeline
- Partner/Investor interest forms

## 🔧 Technical Details

### Animations
- Respects `prefers-reduced-motion`
- Subtle floating orbs on desktop
- Static background on mobile for performance
- Smooth hover transitions

### Accessibility
- Semantic HTML structure
- WCAG contrast compliance
- Focus states for keyboard navigation
- Screen reader friendly

### Performance
- Optimized for Vercel deployment
- Mobile-first responsive design
- Reduced motion on mobile devices
- Efficient SVG animations

## 🚀 Deployment

1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

No environment variables required for MVP.

## 📝 TODO

- [ ] Backend integration for forms (`/api/newsletter`, `/api/apply`)
- [ ] Analytics setup
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] A/B testing for CTAs

## 🎨 Customization

All content is centralized in `src/content/site.ts` for easy updates. Design tokens are defined in `tailwind.config.ts`.

## 📄 License

© 2025 Mindful Tech