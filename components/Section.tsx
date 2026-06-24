import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  containerClassName?: string
  background?: 'default' | 'cream' | 'soft' | 'forest' | 'charcoal'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

export default function Section({
  children,
  className,
  containerSize = 'lg',
  containerClassName,
  background = 'default',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgrounds = {
    default: 'bg-cream-100 text-forest-500',
    cream: 'bg-cream-100 text-forest-500',
    soft: 'bg-cream-200 text-forest-500',
    forest: 'bg-forest-500 text-cream-100',
    charcoal: 'bg-forest-500 text-cream-100',
  }

  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24',
  }

  return (
    <section
      id={id}
      className={cn(
        'relative border-b border-cream-300',
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}
