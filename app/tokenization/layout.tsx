import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tokenization | Global Tokenization Infrastructure',
  description: 'MindfulTech designs and builds tokenization rails for revenue, assets, and equity. Lofty.ai, NECOM carbon credits, ABR Wealth Fund DAO. Cardano, Ethereum, Base, Bitcoin.',
  openGraph: {
    title: 'Tokenization | MindfulTech',
    description: 'Global tokenization infrastructure. Revenue, assets, equity. Lofty.ai, NECOM, ABR Wealth Fund DAO.',
  },
}

export default function TokenizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
