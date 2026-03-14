import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'outline'
  className?: string
}

/**
 * Badge Component
 * 
 * As your CTO mentor: Badges are small UI elements for labels, status, or tags.
 * Keep them simple and consistent. This component uses a variant system similar
 * to Button for consistency across the design system.
 */
export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-near-black',
    gold: 'bg-electric-teal/20 text-near-black',
    outline: 'border border-slate-300 text-slate-700',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

