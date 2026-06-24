import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  id?: string
}

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
        'rounded-lg border border-cream-300 bg-cream-200/70 text-forest-500',
        paddings[padding],
        hover && 'transition-all duration-200 hover:border-terracotta-300 hover:bg-cream-100',
        className
      )}
    >
      {children}
    </div>
  )
}
