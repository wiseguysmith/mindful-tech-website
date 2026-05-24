import Link from 'next/link'
import { footerContent } from '@/lib/site-data'
import MindfulLogo from './MindfulLogo'

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E0D4] bg-[#1A2B1A] text-[#C8BFB2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <MindfulLogo size={32} color="#FAF7F2" accentColor="#C4522A" />
            <div>
              <p className="text-sm font-light text-[#FAF7F2]">mindful tech</p>
              <p className="text-xs font-light text-[#9DB89A]">{footerContent.tagline}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${footerContent.email}`}
              className="text-sm font-light text-[#C8BFB2] transition-colors hover:text-[#FAF7F2]">
              {footerContent.email}
            </a>
            <a href={`tel:${footerContent.phone}`}
              className="text-sm font-light text-[#C8BFB2] transition-colors hover:text-[#FAF7F2]">
              {footerContent.phone}
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-8 border-t border-[#2D5229] pt-10 md:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#9DB89A]">Services</p>
            <ul className="space-y-2.5">
              {[
                { name: 'The Audit', href: '/audit' },
                { name: 'Automation', href: '/solutions' },
                { name: 'Tokenization', href: '/tokenization' },
                { name: 'Docconnect', href: '/doconnect' },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm font-light text-[#C8BFB2] transition-colors hover:text-[#FAF7F2]">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#9DB89A]">Company</p>
            <ul className="space-y-2.5">
              {[
                { name: 'About', href: '/about' },
                { name: 'Process', href: '/process' },
                { name: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm font-light text-[#C8BFB2] transition-colors hover:text-[#FAF7F2]">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#9DB89A]">Connect</p>
            <ul className="space-y-2.5">
              {footerContent.social.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-light text-[#C8BFB2] transition-colors hover:text-[#FAF7F2]">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#9DB89A]">Legal</p>
            <ul className="space-y-2.5">
              {[
                { name: 'Privacy', href: '/privacy' },
                { name: 'Terms', href: '/terms' },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm font-light text-[#C8BFB2] transition-colors hover:text-[#FAF7F2]">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-[#2D5229] pt-8 text-xs font-light text-[#9DB89A] md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Mindful Tech. All rights reserved.</p>
          <p>{footerContent.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
