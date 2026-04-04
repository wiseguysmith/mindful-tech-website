'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  hue: number
  alpha: number
}

const PARTICLE_COUNT = 48

export default function PipelineEnergyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    let animationFrame = 0
    let width = 0
    let height = 0
    let devicePixelRatio = 1
    const particles: Particle[] = []

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.max(1, Math.floor(width * devicePixelRatio))
      canvas.height = Math.max(1, Math.floor(height * devicePixelRatio))
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const createParticle = (): Particle => {
      const speed = 0.05 + Math.random() * 0.14
      const angle = Math.random() * Math.PI * 2
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1 + Math.random() * 2.6,
        hue: Math.random() > 0.5 ? 286 : 34,
        alpha: 0.12 + Math.random() * 0.32,
      }
    }

    resize()
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      particles.push(createParticle())
    }

    const render = () => {
      context.clearRect(0, 0, width, height)

      const gradient = context.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, 'rgba(124, 58, 237, 0.1)')
      gradient.addColorStop(1, 'rgba(217, 119, 6, 0.12)')

      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        const waveX = Math.sin((particle.y + performance.now() * 0.02 + index * 17) * 0.004) * 0.04
        const waveY = Math.cos((particle.x + performance.now() * 0.02 + index * 13) * 0.004) * 0.04

        particle.x += particle.vx + waveX
        particle.y += particle.vy + waveY

        if (particle.x < -20) particle.x = width + 20
        if (particle.x > width + 20) particle.x = -20
        if (particle.y < -20) particle.y = height + 20
        if (particle.y > height + 20) particle.y = -20

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `hsla(${particle.hue}, 90%, 72%, ${particle.alpha})`
        context.shadowBlur = 16
        context.shadowColor = particle.hue === 286 ? 'rgba(147,51,234,0.55)' : 'rgba(217,119,6,0.55)'
        context.fill()
      })

      context.shadowBlur = 0

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.11
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.strokeStyle = `rgba(244, 196, 128, ${opacity})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }

      animationFrame = window.requestAnimationFrame(render)
    }

    render()

    window.addEventListener('resize', resize)
    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-62"
      aria-hidden="true"
    />
  )
}
