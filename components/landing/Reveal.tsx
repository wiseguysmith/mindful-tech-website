'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export default function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const reducedMotion = useReducedMotion()
  const variants = reducedMotion
    ? {
        hidden: { opacity: 0, y: 0, filter: 'none' },
        visible: { opacity: 1, y: 0, filter: 'none' },
      }
    : {
        hidden: { opacity: 0, y, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: reducedMotion ? 0.2 : 0.92, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
