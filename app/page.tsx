'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '@/components/home/Hero'
import Problem from '@/components/home/Problem'
import Shift from '@/components/home/Shift'
import SystemVisualization from '@/components/home/SystemVisualization'
import DigitalWorkforce from '@/components/home/DigitalWorkforce'
import OwnershipSystems from '@/components/home/OwnershipSystems'
import Architecture from '@/components/home/Architecture'
import Outcomes from '@/components/home/Outcomes'
import CTA from '@/components/home/CTA'

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="bg-[#07080c] text-zinc-100">
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-amber-300 via-orange-300 to-violet-400"
        style={{ scaleX: progressScale }}
      />
      <Hero />
      <Problem />
      <Shift />
      <SystemVisualization />
      <DigitalWorkforce />
      <OwnershipSystems />
      <Architecture />
      <Outcomes />
      <CTA />
    </div>
  )
}
