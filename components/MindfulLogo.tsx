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
  accentColor = '#C4522A',
  leafColor = '#4E642D',
  className = '',
  title = 'Mindful Tech logo',
}: MindfulLogoProps) {
  const node = (cx: number, cy: number, r = 5, fill = color) => (
    <circle cx={cx} cy={cy} r={r} fill={fill} />
  )

  const leaf = (cx: number, cy: number, rotate: number, rx = 7, ry = 10) => (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill={leafColor}
      transform={`rotate(${rotate} ${cx} ${cy})`}
    />
  )

  return (
    <svg
      width={size}
      height={size * 1.18}
      viewBox="0 0 160 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={title}
      role="img"
    >
      <g stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M80 172V28" />
        <path d="M80 62C70 70 62 79 58 92" />
        <path d="M80 62C90 70 98 79 102 92" />
        <path d="M80 88C66 92 54 101 46 114" />
        <path d="M80 88C94 92 106 101 114 114" />
        <path d="M80 118C69 122 61 132 58 145" />
        <path d="M80 118C91 122 99 132 102 145" />
        <path d="M58 92H20" />
        <path d="M102 92H140" />
        <path d="M58 92L28 72" />
        <path d="M102 92L132 72" />
        <path d="M46 114L24 130" />
        <path d="M114 114L136 130" />
        <path d="M58 145L38 160" />
        <path d="M102 145L122 160" />
        <path d="M72 48L58 36" />
        <path d="M88 48L102 36" />
      </g>

      <g>
        {node(80, 22, 10)}
        {node(80, 176, 8)}
        {node(20, 92, 9)}
        {node(140, 92, 9)}
        {node(28, 72, 7)}
        {node(132, 72, 7)}
        {node(24, 130, 7)}
        {node(136, 130, 7)}
        {node(38, 160, 6, accentColor)}
        {node(122, 160, 6, accentColor)}
        {node(58, 36, 7)}
        {node(102, 36, 7)}
        {node(58, 145, 5, '#7C7A3A')}
        {node(102, 145, 5, '#7C7A3A')}
        {leaf(42, 58, -52)}
        {leaf(118, 58, 52)}
        {leaf(34, 104, -68, 6, 9)}
        {leaf(126, 104, 68, 6, 9)}
      </g>
    </svg>
  )
}
