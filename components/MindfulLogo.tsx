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
  leafColor,
  className = '',
  title = 'Mindful Tech logo',
}: MindfulLogoProps) {
  const node = (cx: number, cy: number, r = 5.5, fill = color) => (
    <circle cx={cx} cy={cy} r={r} fill={fill} />
  )

  const leaf = (cx: number, cy: number, rotate: number, rx = 7, ry = 11) => (
    <ellipse
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill={leafColor ?? color}
      transform={`rotate(${rotate} ${cx} ${cy})`}
    />
  )

  return (
    <svg
      width={size}
      height={size * 1.34}
      viewBox="0 0 180 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={title}
      role="img"
    >
      <g stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 214V30" />

        <path d="M90 60C78 70 68 82 60 100" />
        <path d="M90 60C102 70 112 82 120 100" />

        <path d="M90 88C72 92 58 103 48 120" />
        <path d="M90 88C108 92 122 103 132 120" />

        <path d="M90 122C77 132 70 148 66 166" />
        <path d="M90 122C103 132 110 148 114 166" />

        <path d="M60 100H28" />
        <path d="M120 100H152" />
        <path d="M60 100L36 78" />
        <path d="M120 100L144 78" />

        <path d="M48 120L30 138" />
        <path d="M132 120L150 138" />

        <path d="M66 166L44 190" />
        <path d="M114 166L136 190" />

        <path d="M82 48L64 34" />
        <path d="M98 48L116 34" />
      </g>

      <g>
        {node(90, 22, 9.5)}
        {node(90, 220, 8.5)}
        {node(28, 100, 8)}
        {node(152, 100, 8)}
        {node(36, 78, 6.5)}
        {node(144, 78, 6.5)}
        {node(30, 138, 6.5)}
        {node(150, 138, 6.5)}
        {node(44, 190, 6.5, accentColor)}
        {node(136, 190, 6.5, accentColor)}
        {node(64, 34, 7.5)}
        {node(116, 34, 7.5)}
        {node(66, 166, 5.5)}
        {node(114, 166, 5.5)}

        {leaf(48, 64, -48)}
        {leaf(132, 64, 48)}
        {leaf(42, 116, -58, 6, 9)}
        {leaf(138, 116, 58, 6, 9)}
      </g>
    </svg>
  )
}
