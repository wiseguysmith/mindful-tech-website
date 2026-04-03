import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  id?: string
}

/**
 * Card Component
 * 
 * As your CTO mentor: Cards are containers for related content. Notice how
 * we make padding configurable but provide sensible defaults. The hover prop
 * adds subtle interactivity without heavy animations (as per requirements).
 */
export default function Card({ 
  children, 
  className, 
  padding = 'md',
  hover = false,
  id,
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      id={id}
      className={cn(
        'rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-200',
        paddings[padding],
        hover && 'transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900',
        className
      )}
    >
      {children}
    </div>
  )
}

