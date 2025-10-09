# Mindful Tech V3 - Implementation Guide

## 🎯 Overview
V3 is a complete redesign focusing on "Apple-minimalist meets futuristic glow" aesthetics with enterprise-level polish and spiritual intentionality.

## 📦 Component Structure

### `/src/components/CalendlyModal.tsx`
**Purpose:** Reusable modal for Calendly scheduling
- Smooth animations with Framer Motion
- Prevents body scroll when open
- Responsive iframe embed
- Backdrop blur effect

**Usage:**
```tsx
<CalendlyModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)}
  calendlyUrl="https://calendly.com/mindfultechnology" 
/>
```

### `/src/components/v3/Hero.tsx`
**Features:**
- Full-screen gradient background (cyan → purple → black)
- Parallax scrolling effects
- Animated glow orbs
- Dual CTAs: Primary (Calendly modal) + Secondary (scroll to automation)
- Scroll indicator animation

**Key Elements:**
- Main headline with gradient text effect
- Sub-headline with clear value proposition
- Responsive button design
- Smooth fade-in animations

### `/src/components/v3/Automation.tsx`
**Features:**
- Pain → Solution card grid (3 cards)
  - Inbox Chaos → Automated Workflows
  - Missed Leads → AI Follow-ups
  - Marketing Fatigue → Intelligent Assistant
- Use-case carousel with navigation
  - Small Business scenario
  - Law Firm scenario
- Interactive carousel with prev/next arrows and dots
- Calendly modal integration

**Design:**
- Teal/cyan gradient theme
- Glass-morphism cards with hover effects
- Smooth transitions and animations

### `/src/components/v3/Blockchain.tsx`
**Features:**
- 3 feature cards:
  - Tokenization Pilot Overview
  - How It Works
  - Watch Explainer (YouTube video)
- YouTube video modal embed
- Purple/pink gradient theme
- Calendly modal for investor calls

**Key Elements:**
- Deep purple gradient background
- Hover glow effects on cards
- Click-to-play video functionality
- Smooth modal animations

### `/src/components/v3/Vision.tsx`
**Features:**
- Founder vision statement
- Animated glowing Eye icon
- Centered, elegant typography
- Pulsing glow effect behind content

**Content:**
"Mindful Tech designs automation and blockchain infrastructure for a world in digital evolution — building systems that generate real productivity, transparent ownership, and equitable growth..."

### `/src/components/v3/LocalPresence.tsx`
**Features:**
- Costa Rica local presence section
- Location markers for Tamarindo & Escazú
- WhatsApp CTA button
- Map pattern background effect
- Pulsing location indicators

**Design:**
- Teal/cyan themed
- Apple-style spacing
- Mobile-optimized

### `/src/components/v3/Footer.tsx`
**Features:**
- Bilingual toggle (EN/ES)
- Email capture form
- Supabase-ready (placeholder for now)
- Animated WhatsApp floating button (bottom-right)
- Responsive footer layout

**Interactive Elements:**
- Language switcher with smooth transitions
- Form validation
- Success state feedback
- Always-visible WhatsApp floating action button

---

## 🎨 Design System

### **Colors**
```css
--teal: #00C6A7
--cyan: #00F9FF
--purple: #673AB7
--magenta: #9C27B0
--pink: #ec4899
```

### **Typography**
- **Headings:** Space Grotesk (bold, modern, tech-forward)
- **Body:** Inter (clean, readable, professional)

**Usage:**
```tsx
className="font-space text-4xl font-bold"  // Headings
className="font-inter text-lg"            // Body text
```

### **Spacing Philosophy**
- Generous whitespace (Apple-like restraint)
- py-32 for major sections
- Consistent padding: px-6 base, responsive scaling

### **Animation Principles**
- Smooth, spring-based transitions
- Parallax effects on scroll
- Hover states with scale/glow
- Mobile-first: reduced animations on small screens

---

## 🛠 Technical Implementation

### **Fonts Configuration**
Located in: `src/app/layout.tsx`
```tsx
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

### **Tailwind Configuration**
Located in: `tailwind.config.ts`
```ts
fontFamily: {
  space: ["var(--font-space-grotesk)", "sans-serif"],
  inter: ["var(--font-inter)", "sans-serif"],
}
```

---

## 🔧 Customization Guide

### **1. Update Calendly URL**
In each component using `CalendlyModal`:
```tsx
const calendlyUrl = "https://calendly.com/YOUR_USERNAME";
```

### **2. Update WhatsApp Number**
In `LocalPresence.tsx` and `Footer.tsx`:
```tsx
const whatsappLink = "https://wa.me/YOUR_PHONE_NUMBER";
// Example: https://wa.me/15555551234
```

### **3. Update YouTube Video**
In `Blockchain.tsx`:
```tsx
const youtubeVideoId = "YOUR_VIDEO_ID";
// Extract from: https://www.youtube.com/watch?v=YOUR_VIDEO_ID
```

### **4. Connect Email to Supabase**
In `Footer.tsx`, replace the placeholder:
```tsx
const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Replace with your Supabase integration:
  const { error } = await supabase
    .from('email_subscribers')
    .insert({ email: email, created_at: new Date() });
  
  if (!error) {
    setSubscribed(true);
  }
};
```

### **5. Add More Use Cases**
In `Automation.tsx`:
```tsx
const useCases = [
  {
    title: "Small Business",
    scenario: "Your scenario here"
  },
  {
    title: "Your Industry",
    scenario: "Your custom scenario"
  },
  // Add more...
];
```

---

## 📱 Responsive Design

### **Breakpoints Used**
- Mobile: Base (< 640px)
- Tablet: sm: (≥ 640px)
- Desktop: md: (≥ 768px)
- Large: lg: (≥ 1024px)

### **Mobile Optimizations**
- Stack layouts automatically
- Reduced motion on mobile
- Touch-friendly button sizes
- Optimized font sizes
- Carousel touch swipe (built-in Framer Motion)

---

## 🚀 Deployment Checklist

### **Before Going Live**
- [ ] Update Calendly URL in all components
- [ ] Update WhatsApp number
- [ ] Add real YouTube video ID
- [ ] Connect Supabase for email capture
- [ ] Add Google Analytics/tracking
- [ ] Test on multiple devices
- [ ] Verify all CTAs work
- [ ] Check accessibility (ARIA labels included)
- [ ] Optimize images (if added later)
- [ ] Test Calendly modal on production domain

### **Performance**
- ✅ Build size: 172 KB First Load JS
- ✅ All components lazy-loaded via Framer Motion
- ✅ Fonts optimized with `display: swap`
- ✅ No linting errors
- ✅ TypeScript strict mode compatible

---

## 🎓 Development Notes

### **Key Architectural Decisions**

1. **Modular Components:** Each section is self-contained
2. **Shared Modal:** CalendlyModal is reusable across sections
3. **Font Variables:** CSS custom properties for easy theming
4. **Mobile-First:** All styles start mobile, scale up
5. **Accessibility:** ARIA labels, focus states, keyboard navigation

### **Animation Strategy**
- Initial page load: staggered fade-ins
- Scroll-triggered: `whileInView` with `viewport={{ once: true }}`
- Hover effects: scale + glow
- Parallax: Hero section only (performance consideration)

### **Future Enhancements**
- Add more languages (bilingual foundation ready)
- Integrate blog/content section
- Add case studies/testimonials
- Implement dark/light mode toggle
- Add analytics dashboard
- Create admin panel for content management

---

## 📚 Additional Resources

### **Framer Motion Docs**
https://www.framer.com/motion/

### **Tailwind CSS**
https://tailwindcss.com/docs

### **Next.js 15**
https://nextjs.org/docs

### **Supabase**
https://supabase.com/docs

---

## 🐛 Troubleshooting

### **Fonts Not Loading?**
Check that variables are properly added to body tag in `layout.tsx`

### **Calendly Modal Not Opening?**
Verify state management in parent component

### **Animations Laggy?**
Check browser dev tools performance tab. Consider reducing blur effects on low-end devices.

### **Build Errors?**
Run `npm run build` to see TypeScript errors. All V3 components are type-safe.

---

## 📞 Support

For questions about implementation:
1. Check this guide
2. Review component comments in code
3. Test in local environment first

---

**Built with ❤️ by Mindful Tech**
*Apple-minimalist meets futuristic glow*

