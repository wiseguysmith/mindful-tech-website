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
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/65 p-6 backdrop-blur-sm"
    >
      <div className="mb-4 inline-flex rounded-lg border border-amber-200/20 bg-gradient-to-br from-amber-300/15 to-purple-500/15 p-3">
        <Icon className="h-5 w-5 text-amber-200 transition-colors duration-300 group-hover:text-purple-200" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-zinc-100">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </motion.article>
  )
}
