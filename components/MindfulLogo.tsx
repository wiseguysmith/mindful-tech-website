'use client'

interface MindfulLogoProps {
  size?: number
  color?: string
  accentColor?: string
  leafColor?: string
  className?: string
  title?: string
}

export default function MindfulLogo({
  size = 40,
  color = '#1A2B1A',
  className = '',
  title = 'Mindful Tech logo',
}: MindfulLogoProps) {
  return (
    <span
      className={className}
      role="img"
      aria-label={title}
      style={{
        display: 'inline-block',
        width: size,
        height: size * 1.15,
        backgroundColor: color,
        WebkitMask: 'url("/mindful-logo-mask.png") center / contain no-repeat',
        mask: 'url("/mindful-logo-mask.png") center / contain no-repeat',
        flexShrink: 0,
      }}
    />
  )
}
