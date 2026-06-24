import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:cursor-not-allowed disabled:opacity-60'

  const variants = {
    primary: 'bg-terracotta-400 text-cream-50 hover:brightness-110 active:brightness-95',
    secondary: 'bg-forest-500 text-cream-50 hover:bg-forest-400 active:bg-forest-600',
    outline:
      'border border-cream-400 bg-transparent text-forest-500 hover:border-forest-500 hover:bg-cream-200',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
