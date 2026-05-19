import Link from 'next/link'
import { footerContent } from '@/lib/site-data'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A3A] bg-[#0A0A0F] text-[#8888A0]">
      <Container className="py-12">
        <div className="mb-10">
          <p className="text-sm font-light text-[#E8E8F0]">Mindful Tech</p>
          <p className="mt-1 text-sm font-light text-[#8888A0]">{footerContent.tagline}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#E8E8F0]">
              Contact
            </h3>
            <address className="not-italic space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${footerContent.phone}`}
                  className="transition-colors hover:text-[#1DB97E]"
                >
                  {footerContent.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footerContent.email}`}
                  className="transition-colors hover:text-[#1DB97E]"
                >
                  {footerContent.email}
                </a>
              </p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#E8E8F0]">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              {footerContent.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#1DB97E]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Disclaimer */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#E8E8F0]">
              Connect
            </h3>
            {footerContent.social && footerContent.social.length > 0 && (
              <ul className="mb-4 space-y-2 text-sm">
                {footerContent.social.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#1DB97E]"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-sm text-[#8888A0]">
              {footerContent.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[#2A2A3A] pt-8 text-center text-sm text-[#8888A0]">
          <p>&copy; {new Date().getFullYear()} Mindful Tech. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

