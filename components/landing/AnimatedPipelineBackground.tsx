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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.16),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.14),transparent_42%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.12),transparent_44%)]" />

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
              animate={{ pathLength: [0.08, 0.22, 0.08], pathOffset: [0, 1, 2] }}
              transition={{
                duration: 9 + index * 1.6,
                ease: 'linear',
                repeat: Infinity,
              }}
            />
          </g>
        ))}
        <defs>
          <linearGradient id="pipelineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(250,204,21,0.2)" />
            <stop offset="50%" stopColor="rgba(168,85,247,0.95)" />
            <stop offset="100%" stopColor="rgba(250,204,21,0.2)" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -26, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 22, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
