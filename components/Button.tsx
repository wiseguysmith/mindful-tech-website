import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

/**
 * Button Component
 * 
 * As your CTO mentor: This is a polymorphic button component that handles
 * multiple variants and sizes. Notice how we use TypeScript to extend native
 * button props, giving us full HTML button functionality while adding our
 * custom styling. The `cn` utility (from utils) merges Tailwind classes cleanly.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-teal focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080c] disabled:cursor-not-allowed disabled:opacity-60'
  
  const variants = {
    primary:
      'bg-gradient-to-r from-amber-300 to-purple-400 text-zinc-950 hover:brightness-105 active:brightness-95',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 active:bg-zinc-600',
    outline: 'border border-zinc-600 bg-zinc-900 text-zinc-100 hover:border-zinc-400 hover:bg-zinc-800',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

