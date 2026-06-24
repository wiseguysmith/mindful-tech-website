import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-forest-100 text-forest-500',
    gold: 'bg-gold-100 text-gold-500',
    outline: 'border border-cream-400 text-forest-400',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
