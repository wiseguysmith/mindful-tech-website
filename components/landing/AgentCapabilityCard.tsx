'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface AgentCapabilityCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function AgentCapabilityCard({
  icon: Icon,
  title,
  description,
}: AgentCapabilityCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="group rounded-lg border border-cream-300 bg-cream-200/70 p-6 transition-all duration-200 hover:border-terracotta-300 hover:bg-cream-100"
    >
      <div className="mb-4 inline-flex rounded-lg bg-forest-100 p-3">
        <Icon className="h-5 w-5 text-forest-400 transition-colors duration-300 group-hover:text-terracotta-400" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-forest-500">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-text">{description}</p>
    </motion.article>
  )
}
