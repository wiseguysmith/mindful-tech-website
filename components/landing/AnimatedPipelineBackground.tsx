'use client'

import { motion } from 'framer-motion'
import PipelineEnergyCanvas from '@/components/landing/PipelineEnergyCanvas'

const paths = [
  'M 40 120 C 220 80, 360 180, 520 130 S 820 50, 960 110',
  'M 30 300 C 210 220, 380 360, 560 280 S 820 200, 970 310',
  'M 80 500 C 260 430, 420 560, 600 500 S 840 420, 980 520',
]

export default function AnimatedPipelineBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <PipelineEnergyCanvas />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(217,119,6,0.16),transparent_46%),radial-gradient(circle_at_84%_14%,rgba(147,51,234,0.15),transparent_44%),radial-gradient(circle_at_48%_88%,rgba(251,191,36,0.08),transparent_42%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-75"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {paths.map((path, index) => (
          <g key={path}>
            <path d={path} fill="none" stroke="rgba(161,161,170,0.22)" strokeWidth="1.5" />
            <motion.path
              d={path}
              fill="none"
              stroke="url(#pipelineGlow)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0.1, pathOffset: 0 }}
              animate={{ pathLength: [0.08, 0.2, 0.08], pathOffset: [0, 1, 2] }}
              transition={{
                duration: 14 + index * 2,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
          </g>
        ))}
        <defs>
          <linearGradient id="pipelineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(251,191,36,0.16)" />
            <stop offset="45%" stopColor="rgba(217,119,6,0.6)" />
            <stop offset="70%" stopColor="rgba(168,85,247,0.88)" />
            <stop offset="100%" stopColor="rgba(251,191,36,0.16)" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-violet-500/16 blur-3xl"
        animate={{ x: [0, 22, 0], y: [0, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-300/18 blur-3xl"
        animate={{ x: [0, -22, 0], y: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
