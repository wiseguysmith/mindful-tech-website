"use client";
import { motion } from "framer-motion";
import { coinscious, brand } from "@/content/site";
import AnimatedChart from "@/components/AnimatedChart";
import MagneticButton from "@/components/MagneticButton";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";

export default function Home() {
  const year = new Date().getFullYear();

  const emailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks, you're on the list."); // TODO: wire up backend later
  };

  const applySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch."); // TODO: wire up backend later
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Dynamic background with morphing gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-primary/5" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Professional badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Pill variant="primary" size="lg" className="mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse mr-3" />
              Next-Generation Infrastructure
            </Pill>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Logo size="xl" animated={true} />
          </motion.div>

          {/* Clean, focused heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white mb-4">
              Conscious Technology
            </span>
            <span className="block text-3xl md:text-4xl text-white/70 font-light">
              Infrastructure for the Future
            </span>
          </motion.h1>

          {/* Clear value proposition */}
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We build ethical infrastructure that turns real-world assets into programmable opportunities. 
            Professional execution, mindful innovation, sustainable impact.
          </motion.p>

          {/* Clean CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary/80 transition-colors duration-200"
            >
              Get Started
            </button>
            
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>


      {/* ABOUT */}
      <Section id="about" className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              What We Do
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We build ethical infrastructure that transforms real-world assets into programmable opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We're pioneering the next generation of conscious technology infrastructure. 
                Our mission is to create tools that serve humanity's highest potential through 
                ethical design, mindful innovation, and sustainable impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white">Decentralized access to technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-white">Ethical automation systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-white">Earth-first sustainable solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white">Human agency and empowerment</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">Featured Project</h4>
              <h5 className="text-lg font-medium text-primary mb-3">Coinscious Building</h5>
              <p className="text-white/70 mb-6">
                Real-estate RWA infrastructure: auditing, KYC/KYB, liquidity pools, and the essentials 
                teams need to launch tokenized, fractional real-estate at scale.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We provide comprehensive solutions for conscious technology implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-4">Asset Tokenization</h3>
              <p className="text-white/70">
                Transform real-world assets into programmable digital tokens with full compliance and transparency.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">AI Agents</h3>
              <p className="text-white/70">
                Ethical AI automation that serves humanity's highest potential through conscious design.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-4">Infrastructure</h3>
              <p className="text-white/70">
                Decentralized systems that empower communities and resist censorship.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION */}
      <Section id="mission" className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              We're building the foundational infrastructure for a more conscious, connected, and sustainable future. 
              Our technology serves communities, empowers individuals, and creates positive impact at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-white font-semibold mb-2">Professionals Trained</div>
              <div className="text-white/60">In conscious technology</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-white font-semibold mb-2">Projects Completed</div>
              <div className="text-white/60">Across industries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-white font-semibold mb-2">Solutions Built</div>
              <div className="text-white/60">Custom implementations</div>
            </div>
          </div>
        </div>
      </Section>

      {/* DEMO SECTION */}
      <Section className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              See It In Action
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our technology transforms real-world assets into programmable opportunities.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="bg-black/50 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">$ mindful-tech build</div>
              <div className="text-white mb-2">✓ Asset tokenization pipeline initialized</div>
              <div className="text-white mb-2">✓ Compliance checks configured</div>
              <div className="text-white mb-2">✓ Liquidity pool created</div>
              <div className="text-green-400">✓ Ready for deployment</div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECT SPOTLIGHT */}
      <Section id="projects" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-gradient">Featured Project</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Coinscious Building</span>
              <br />
              <span className="text-ink-dim">Real-Estate RWA Infrastructure</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-ink-dim max-w-4xl mx-auto leading-relaxed">
              {coinscious.teaser}
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {coinscious.bullets.map((bullet, index) => (
              <motion.div
                key={bullet}
                className="group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
              >
                <div className="relative h-32 glass rounded-2xl p-6 hover-lift hover-glow">
                  {/* Animated icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                    <div className="w-5 h-5 bg-white/80 rounded" />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                    {bullet}
                  </h3>
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-primary/30 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="/projects/coinscious-building" 
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl font-semibold text-white shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore the Project</span>
              <motion.span
                className="text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>

          {/* Background elements */}
          <div className="absolute top-1/3 right-10 w-4 h-4 bg-primary/40 rounded-full animate-float-up" />
          <div className="absolute bottom-1/4 left-16 w-2 h-2 bg-secondary/60 rounded-full animate-float-up" style={{ animationDelay: '3s' }} />
        </div>
      </Section>

      {/* TRUST SIGNALS & SOCIAL PROOF */}
      <Section className="relative py-24 overflow-hidden bg-gradient-to-br from-bg/50 via-bg to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Trusted by builders</span>
            </h2>
            <p className="text-xl md:text-2xl text-ink-dim max-w-4xl mx-auto leading-relaxed">
              Join the community of developers and organizations building the future
            </p>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            className="grid gap-8 md:grid-cols-3 lg:grid-cols-6 items-center opacity-60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {["Ethereum", "Polygon", "Arbitrum", "Optimism", "Base", "Solana"].map((client) => (
              <motion.div
                key={client}
                className="text-center p-4 glass rounded-xl hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-lg font-semibold text-white">{client}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* UPDATES */}
      <Section id="updates" className="relative py-24 overflow-hidden bg-gradient-to-br from-bg/50 via-bg to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-gradient">Latest Updates</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                What&apos;s New
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-12 relative overflow-hidden group hover-lift hover-glow">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:animate-glow-pulse">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">Agentic Studio</h3>
                  <p className="text-white/80 text-xl leading-relaxed mb-6">
                    {brand.agenticStudio}
                  </p>
                  <motion.a 
                    href="#newsletter" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-accent rounded-2xl font-bold text-white text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Notified
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/30 transition-colors duration-300" />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/60 rounded-full animate-float-up" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary/60 rounded-full animate-float-up" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* JOIN */}
      <Section id="newsletter" className="relative py-24 overflow-hidden bg-gradient-to-br from-bg via-bg/50 to-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                Join the Movement
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Be first to pilots, drops, and roles.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden group hover-lift hover-glow">
              <form className="space-y-6" onSubmit={emailSubmit}>
                <div>
                  <label className="block text-white/80 text-lg font-medium mb-3">
                    Email Address
                  </label>
                  <input 
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300 text-lg"
                    placeholder="you@example.com" 
                    type="email" 
                    required 
                    aria-label="Email address"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-3">
                    Subscribe
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </form>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-primary/30 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT & APPLY */}
      <Section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-br from-bg/50 via-bg to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                Contact & Apply
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to join the future of conscious technology? Let&apos;s build something amazing together.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              className="group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="glow" padding="lg" className="h-full hover-lift hover-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Contact Us</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-white/60 text-sm mb-2">Email</p>
                    <p className="text-white text-lg font-medium">{brand.email}</p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm mb-2">Response Time</p>
                    <p className="text-white text-lg font-medium">Within 24 hours</p>
                  </div>
                  
                  <div>
                    <p className="text-white/60 text-sm mb-2">Office Hours</p>
                    <p className="text-white text-lg font-medium">Monday - Friday, 9 AM - 6 PM PST</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Have questions about our technology, partnerships, or just want to say hello? 
                    We&apos;d love to hear from you.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Application Form */}
            <motion.div
              id="apply"
              className="group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card variant="glow" padding="lg" className="h-full hover-lift hover-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Apply to Join the Team</h3>
                </div>
                
                <form className="space-y-6" onSubmit={applySubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        What is your name?
                      </label>
                      <input 
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your full name" 
                        required 
                        aria-label="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        What is your email?
                      </label>
                      <input 
                        type="email"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com" 
                        required 
                        aria-label="Your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        What is your role in the company?
                      </label>
                      <input 
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                        placeholder="e.g., CTO, Developer, Designer" 
                        required 
                        aria-label="Your role"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input 
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                        placeholder="Your company name" 
                        required 
                        aria-label="Company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Company Website
                      </label>
                      <input 
                        type="url"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300"
                        placeholder="https://yourcompany.com" 
                        aria-label="Company website"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Company Size
                      </label>
                      <select 
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors duration-300" 
                        defaultValue="" 
                        required
                        aria-label="Company size"
                      >
                        <option value="" disabled className="text-white/40">Select company size</option>
                        <option value="less-than-20" className="text-white">Less than 20</option>
                        <option value="20-50" className="text-white">20-50</option>
                        <option value="50-100" className="text-white">50-100</option>
                        <option value="100-500" className="text-white">100-500</option>
                        <option value="more-than-500" className="text-white">More than 500</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Company&apos;s Annual Revenue
                      </label>
                      <select 
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors duration-300" 
                        defaultValue="" 
                        required
                        aria-label="Annual revenue"
                      >
                        <option value="" disabled className="text-white/40">Select revenue range</option>
                        <option value="less-than-100k" className="text-white">Less than $100K</option>
                        <option value="100k-500k" className="text-white">$100K-$500K</option>
                        <option value="500k-1m" className="text-white">$500K-$1M</option>
                        <option value="1m-2m" className="text-white">$1M-$2M</option>
                        <option value="more-than-2m" className="text-white">More than $2M</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Project Budget
                      </label>
                      <select 
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors duration-300" 
                        defaultValue="" 
                        required
                        aria-label="Project budget"
                      >
                        <option value="" disabled className="text-white/40">Select budget range</option>
                        <option value="less-than-10k" className="text-white">Less than $10K</option>
                        <option value="10k-50k" className="text-white">$10K-$50K</option>
                        <option value="50k-100k" className="text-white">$50K-$100K</option>
                        <option value="more-than-100k" className="text-white">More than $100K</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      What services are you interested in?
                    </label>
                    <select 
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-primary/50 focus:outline-none transition-colors duration-300" 
                      defaultValue="" 
                      required
                      aria-label="Services interest"
                    >
                      <option value="" disabled className="text-white/40">Select service</option>
                      <option value="identify" className="text-white">Identifying conscious technology opportunities</option>
                      <option value="educate" className="text-white">Educating your team on conscious technology</option>
                      <option value="develop" className="text-white">Developing custom conscious technology solutions</option>
                      <option value="all" className="text-white">All of the above</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea 
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-primary/50 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project and how we can help..."
                      rows={4}
                      aria-label="Message"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    className="w-full group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Inquiry
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative py-16 overflow-hidden bg-gradient-to-t from-bg via-bg/80 to-primary/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <Logo size="md" animated={false} />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Building the future of conscious technology through ethical design, 
                mindful innovation, and sustainable impact.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:hello@mindfultech.org"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm">📧</span>
                </a>
                <a 
                  href="https://twitter.com/mindfultech"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm">🐦</span>
                </a>
                <a 
                  href="https://github.com/mindfultech"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm">💻</span>
                </a>
              </div>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Products</h3>
              <ul className="space-y-3">
                {[
                  { name: "Coinscious Building", href: "/projects/coinscious-building" },
                  { name: "Agentic Studio", href: "#updates" },
                  { name: "RWA Infrastructure", href: "#features" },
                  { name: "AI Agents", href: "#features" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  { name: "About", href: "#about" },
                  { name: "Mission", href: "#mission" },
                  { name: "Careers", href: "#apply" },
                  { name: "Contact", href: "#contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {[
                  { name: "Documentation", href: "#" },
                  { name: "Blog", href: "#" },
                  { name: "Community", href: "#" },
                  { name: "Support", href: "#contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-white/60 text-sm">
              © {year} Mindful Tech. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float-up" />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-secondary/40 rounded-full animate-float-up" style={{ animationDelay: '2s' }} />
      </footer>
    </>
  );
}