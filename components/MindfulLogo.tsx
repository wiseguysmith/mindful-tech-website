'use client'

interface MindfulLogoProps {
  size?: number
  color?: string
  accentColor?: string
  className?: string
}

export default function MindfulLogo({
  size = 40,
  color = '#1A2B1A',
  accentColor = '#B8860B',
  className = '',
}: MindfulLogoProps) {
  // Leaf shape: teardrop / organic node used in canopy
  const Leaf = ({ cx, cy, r = 7 }: { cx: number; cy: number; r?: number }) => (
    <ellipse cx={cx} cy={cy} rx={r * 0.72} ry={r} fill={color} />
  )

  // Circuit node: clean circle used in roots
  const Node = ({ cx, cy, r = 5 }: { cx: number; cy: number; r?: number }) => (
    <circle cx={cx} cy={cy} r={r} fill={color} />
  )

  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 160 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mindful Tech logo"
    >
      {/* ══ TRUNK ══ */}
      <line x1="80" y1="158" x2="80" y2="52"
        stroke={color} strokeWidth="5" strokeLinecap="round" />

      {/* ══ CENTER UPPER BRANCH ══ */}
      <line x1="80" y1="52" x2="80" y2="28"
        stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Apex leaf */}
      <Leaf cx={80} cy={20} r={9} />

      {/* ══ UPPER LEFT BRANCHES ══ */}
      {/* Inner upper-left */}
      <line x1="80" y1="62" x2="54" y2="38"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <Leaf cx={48} cy={31} r={8} />

      {/* Outer upper-left */}
      <line x1="80" y1="72" x2="32" y2="44"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <Leaf cx={24} cy={37} r={8} />

      {/* ══ UPPER RIGHT BRANCHES ══ */}
      {/* Inner upper-right */}
      <line x1="80" y1="62" x2="106" y2="38"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <Leaf cx={112} cy={31} r={8} />

      {/* Outer upper-right */}
      <line x1="80" y1="72" x2="128" y2="44"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <Leaf cx={136} cy={37} r={8} />

      {/* ══ MID-LEFT BRANCHES (more horizontal, circuit-like) ══ */}
      {/* Mid-left upper arm */}
      <line x1="80" y1="95" x2="42" y2="80"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Extends left */}
      <line x1="42" y1="80" x2="18" y2="72"
        stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Leaf cx={10} cy={68} r={7.5} />

      {/* Mid-left lower arm */}
      <line x1="42" y1="80" x2="28" y2="96"
        stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Leaf cx={22} cy={103} r={7} />

      {/* ══ MID-RIGHT BRANCHES ══ */}
      {/* Mid-right upper arm */}
      <line x1="80" y1="95" x2="118" y2="80"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Extends right */}
      <line x1="118" y1="80" x2="142" y2="72"
        stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Leaf cx={150} cy={68} r={7.5} />

      {/* Mid-right lower arm */}
      <line x1="118" y1="80" x2="132" y2="96"
        stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Leaf cx={138} cy={103} r={7} />

      {/* ══ ROOTS — circuit board style ══ */}
      {/* Trunk to root junction horizontal bar */}
      <line x1="38" y1="158" x2="122" y2="158"
        stroke={color} strokeWidth="2.8" strokeLinecap="round" />

      {/* Left root: curve down then left */}
      <path
        d="M 38 158 Q 26 158 26 170 L 26 182"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <Node cx={26} cy={188} r={6} />

      {/* Right root: curve down then right */}
      <path
        d="M 122 158 Q 134 158 134 170 L 134 182"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <Node cx={134} cy={188} r={6} />

      {/* Left far horizontal extension */}
      <line x1="38" y1="158" x2="16" y2="158"
        stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Node cx={10} cy={158} r={5.5} />

      {/* Right far horizontal extension */}
      <line x1="122" y1="158" x2="144" y2="158"
        stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <Node cx={150} cy={158} r={5.5} />

      {/* Center trunk drops to gold accent node */}
      <line x1="80" y1="158" x2="80" y2="182"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Gold/accent center root node */}
      <circle cx={80} cy={190} r={8} fill={accentColor} />
      <circle cx={80} cy={190} r={3.5} fill={color} opacity="0.5" />
    </svg>
  )
}
