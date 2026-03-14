import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  background?: 'default' | 'cream' | 'charcoal'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

/**
 * Section Component
 * 
 * As your CTO mentor: Sections are the building blocks of pages. They handle
 * vertical spacing, background colors, and contain content within a Container.
 * This pattern ensures consistent spacing throughout the site without repeating
 * padding/margin code everywhere.
 */
export default function Section({
  children,
  className,
  containerSize = 'lg',
  background = 'default',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgrounds = {
    default: 'bg-soft-white',
    cream: 'bg-slate-50',
    charcoal: 'bg-near-black text-soft-white',
  }

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }

  return (
    <section id={id} className={cn(backgrounds[background], paddings[padding], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}

