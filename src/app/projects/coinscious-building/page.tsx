"use client";
import Link from "next/link";
import { GlowCard } from "@/components/GlowCard";
import { coinscious } from "@/content/site";
import Logo from "@/components/Logo";

export default function CoinsciousBuilding() {
  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="flex flex-col items-center text-center mb-8">
          <Logo size="lg" animated={true} className="mb-6" />
          <h1 className="h1">Coinscious Building — Real-Estate RWA Infrastructure</h1>
          <p className="mt-4 subtle max-w-3xl">
            Rails for tokenized, fractional real estate at scale: auditing, KYC/KYB, liquidity pools, attestation-driven workflows, and investor-friendly UX.
          </p>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="section grid gap-8 md:grid-cols-2">
        <GlowCard>
          <h2 className="text-xl font-semibold">The Problem</h2>
          <p className="subtle mt-3">
            Real estate capital flows are opaque, slow, and gated. On-chain rails exist, but teams lack compliant, end-to-end infrastructure to launch safely.
          </p>
        </GlowCard>
        <GlowCard>
          <h2 className="text-xl font-semibold">Our Solution</h2>
          <p className="subtle mt-3">
            A modular stack: diligence & attestations, identity & compliance, liquidity & settlement, and tokenization layers—built for clarity, scale, and control.
          </p>
        </GlowCard>
      </section>

      {/* MODULES */}
      <section className="section">
        <h2 className="h2">Infrastructure Modules</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GlowCard>
            <h3 className="font-medium">Audit & Attest</h3>
            <p className="subtle mt-2">Doc vaults, milestone attestations, pre-mint diligence.</p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-medium">Identity & Compliance</h3>
            <p className="subtle mt-2">KYC/KYB hooks, geo-rules (placeholders), audit trails.</p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-medium">Liquidity & Settlement</h3>
            <p className="subtle mt-2">Pooled capital, milestone-based releases, reporting stubs.</p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-medium">Tokenization Layer</h3>
            <p className="subtle mt-2">Security-minded token models; chain-agnostic UI.</p>
          </GlowCard>
        </div>
      </section>

      {/* FLOW DIAGRAM (SVG placeholder) */}
      <section className="section">
        <h2 className="h2">How It Flows</h2>
        <div className="card p-6 mt-6">
          <p className="subtle">{coinscious.flow}</p>
          <svg className="w-full h-48 mt-4" viewBox="0 0 800 160" fill="none">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#63F5FF" />
              </marker>
            </defs>
            {["Intake","Diligence","Tokenize","On-Ramp","Pool","Milestones","Report"].map((label, i) => (
              <g key={label} transform={`translate(${40 + i*105},40)`}>
                <rect width="90" height="40" rx="10" className="fill-transparent" stroke="#63F5FF" opacity="0.6"/>
                <text x="45" y="25" textAnchor="middle" fontSize="12" fill="#E6EEF7">{label}</text>
                {i < 6 && <line x1="90" y1="20" x2="115" y2="20" stroke="#63F5FF" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.7" />}
              </g>
            ))}
          </svg>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section">
        <h2 className="h2">Roadmap</h2>
        <div className="grid gap-6 md:grid-cols-3 mt-6">
          {["Pilot Cohort Q4 '25","Design Partners Open","Investor Dashboard (UI)"].map((item) => (
            <div key={item} className="card p-5">{item}</div>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="section">
        <h2 className="h2">Get Involved</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="card p-6">
            <p className="font-medium">Partner with Us</p>
            <p className="subtle mt-2">Builders, property owners, and institutions—let&apos;s collaborate.</p>
          </div>
          <form className="card p-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We&apos;ll be in touch."); }}>
            <p className="font-medium">Investor Interest</p>
            <input className="w-full rounded-xl2 bg-white/5 border border-white/10 px-4 py-3 mt-3" placeholder="Your email" required />
            <button className="btn btn-primary mt-3" type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer className="section pt-0">
        <Link href="/" className="btn btn-secondary">← Back to Mindful Tech</Link>
      </footer>
    </main>
  );
}
