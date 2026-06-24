import Link from 'next/link'
import { CALENDLY_URL } from '@/lib/site-data'

export const metadata = {
  title: 'About',
  description: 'Mindful Tech is an intelligent systems consultancy — helping businesses transition into the digital future through intelligent automation, AI systems, and strategic education.',
}

export default function AboutPage() {
  return (
    <div className="bg-cream-100 text-forest-500">

      <section className="border-b border-cream-300 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta-400">About</p>
            <h1 className="mt-4 text-balance text-5xl font-light leading-[1.1] text-forest-500 md:text-6xl">
              Mindful Tech
            </h1>
            <p className="mt-4 text-xl font-light text-muted-text">
              Intelligent Systems Consultancy
            </p>
            <p className="mt-8 max-w-[680px] text-lg font-light leading-[1.75] text-muted-text">
              Mindful Tech exists to help businesses and individuals transition into the digital
              future through intelligent automation, AI systems, and strategic education — making
              modernization understandable, accessible, and human-centered.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 bg-cream-200 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta-400">Why We Exist</p>
              <h2 className="mt-4 text-3xl font-light text-forest-500">
                The gap is not technology. The gap is implementation.
              </h2>
              <p className="mt-6 max-w-[680px] font-light leading-[1.75] text-muted-text">
                Most businesses are running on systems built for a different era. Not because they
                are behind — because no one has shown them a better path. The cost is invisible:
                time lost to administration, leads that fall through gaps, teams doing work that
                systems should handle.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta-400">How We Think</p>
              <h2 className="mt-4 text-3xl font-light text-forest-500">
                Modernization is strategic, not technical.
              </h2>
              <p className="mt-6 max-w-[680px] font-light leading-[1.75] text-muted-text">
                The question is not which tools to use. It is how this business should actually
                operate in the next ten years. The businesses that will thrive are not the ones
                that adopted AI fastest — they are the ones that adopted it most intentionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta-400">Our Philosophy</p>
          <blockquote className="mt-6 max-w-3xl border-l border-terracotta-300 pl-6 font-serif-accent text-3xl font-light italic leading-[1.5] text-forest-500 md:text-4xl">
            &ldquo;Humans and technology must coexist intelligently. The digital age should feel
            more human-driven, not tech-first.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="border-b border-cream-300 bg-cream-200 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta-400">What Makes Us Different</p>
          <h2 className="mt-4 text-4xl font-light text-forest-500">Our approach.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Systems thinking',
                body: 'We see business as architecture — not a collection of tasks. Every system is designed as a whole before any part is built.',
              },
              {
                title: 'Education first',
                body: 'Clients understand what they are building before they build it. Implementation without comprehension creates fragile systems.',
              },
              {
                title: 'Calm intelligence',
                body: 'Intelligent infrastructure should reduce complexity, not add to it. The goal is operations that feel clear and navigable.',
              },
              {
                title: 'Accessible modernization',
                body: 'The digital future is not reserved for large corporations. Growing businesses deserve the same quality of intelligent systems.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-cream-300 bg-cream-100 p-6"
              >
                <div className="mb-4 h-px w-10 bg-terracotta-400" />
                <h3 className="text-lg font-medium text-forest-500">{item.title}</h3>
                <p className="mt-3 font-light leading-[1.75] text-muted-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cream-300 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta-400">The After State</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-light text-forest-500">
            What life looks like after.
          </h2>
          <p className="mt-6 max-w-[680px] font-light leading-[1.75] text-muted-text">
            Operations running on intelligent infrastructure. Teams focused on what humans do best.
            Leaders who understand their systems and can evolve them. A business that feels modern
            — not because it uses new tools, but because it thinks differently about how work gets
            done.
          </p>
        </div>
      </section>

      <section className="bg-forest-500 py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-forest-400 p-10 text-center md:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta-300">Begin</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-light text-cream-100 md:text-4xl">
              Ready to understand what your business could look like?
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-light text-cream-500">
              A strategy call is a conversation, not a pitch. We will help you understand where the
              gaps are and what a better path looks like.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-terracotta-400 px-7 py-3 text-sm font-medium text-cream-50 transition hover:brightness-110"
              >
                Book a Strategy Call
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-forest-400 px-7 py-3 text-sm font-medium text-cream-200 transition hover:border-cream-400 hover:text-cream-100"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
