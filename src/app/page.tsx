"use client";
import { motion } from "framer-motion";
import { coinscious, brand } from "@/content/site";
import AnimatedChart from "@/components/AnimatedChart";
import MagneticButton from "@/components/MagneticButton";
import Logo from "@/components/Logo";
import NeonLogo from "@/components/NeonLogo";
import NeonBackground from "@/components/NeonBackground";
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
      <NeonBackground />
      <Navbar />

      {/* HERO SECTION - Fortune 500 Level */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Professional dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Main content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Logo and branding */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Professional badge with enhanced effects */}
              <motion.div
                className="inline-block mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="px-6 py-3 glass-morphism hover-lift hover-glow rounded-full pulse-glow">
                  <span className="text-gradient text-sm font-semibold">Next-Generation Infrastructure</span>
                </div>
              </motion.div>

              {/* Logo with magnetic hover effect */}
              <motion.div
                className="mb-8 magnetic-hover"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <NeonLogo size="xl" animated={true} />
              </motion.div>

              {/* Mission statement */}
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Building the future of conscious technology through ethical design, 
                mindful innovation, and sustainable impact.
              </motion.p>
            </motion.div>

            {/* Right side - Main content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Main heading */}
              <motion.h1 
                className="text-6xl md:text-8xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span 
                  className="block text-white mb-4"
                  style={{ 
                    textShadow: '0 0 20px #00ffff, 0 0 40px #00ffff',
                    filter: 'drop-shadow(0 0 10px #00ffff)'
                  }}
                >
                  Liberation Tech
                </span>
                <span 
                  className="block text-4xl md:text-5xl text-pink-400 font-light"
                  style={{ 
                    textShadow: '0 0 15px #ff00ff, 0 0 30px #ff00ff',
                    filter: 'drop-shadow(0 0 8px #ff00ff)'
                  }}
                >
                  for Next Generation
                </span>
              </motion.h1>

              {/* Value proposition */}
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We build ethical infrastructure that turns real-world assets into programmable opportunities. 
                Professional execution, mindful innovation, sustainable impact.
              </motion.p>

              {/* CTA buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center lg:items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group hover-lift hover-glow pulse-glow"
                  style={{
                    boxShadow: '0 0 30px #00ffff, 0 0 60px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1)',
                    textShadow: '0 0 15px #ffffff'
                  }}
                  whileHover={{ scale: 1.08, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 border-2 border-pink-400 text-pink-400 rounded-2xl font-bold text-lg hover:bg-pink-400/10 transition-all duration-300 relative overflow-hidden group hover-lift hover-glow"
                  style={{
                    boxShadow: '0 0 30px #ff00ff, 0 0 60px #ff00ff, inset 0 0 20px rgba(255, 0, 255, 0.1)',
                    textShadow: '0 0 15px #ff00ff'
                  }}
                  whileHover={{ scale: 1.08, rotateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <motion.span
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* TRUST SIGNALS - Fortune 500 Level */}
      <Section className="py-16 bg-gradient-to-r from-gray-900/80 to-black/80 border-y border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-400 mb-8">Trusted by Industry Leaders</h3>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { name: "Microsoft", logo: "🔷" },
              { name: "Google", logo: "🔍" },
              { name: "Amazon", logo: "📦" },
              { name: "Tesla", logo: "⚡" },
              { name: "Meta", logo: "📘" },
              { name: "Apple", logo: "🍎" }
            ].map((client, index) => (
              <motion.div
                key={client.name}
                className="text-center p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, opacity: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {client.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Security Badges */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {[
              { name: "SOC 2 Type II", icon: "🛡️" },
              { name: "ISO 27001", icon: "🔒" },
              { name: "GDPR Compliant", icon: "🌍" },
              { name: "256-bit SSL", icon: "🔐" }
            ].map((badge, index) => (
              <motion.div
                key={badge.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-600/50"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm text-gray-300 font-medium">{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ABOUT - Fortune 500 Level */}
      <Section id="about" className="py-24 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What We Do
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We build ethical infrastructure that transforms real-world assets into programmable opportunities.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                We're pioneering the next generation of conscious technology infrastructure. 
                Our mission is to create tools that serve humanity's highest potential through 
                ethical design, mindful innovation, and sustainable impact.
              </p>
              
              <div className="grid gap-6">
                {[
                  "Decentralized access to technology",
                  "Ethical automation systems", 
                  "Earth-first sustainable solutions",
                  "Human agency and empowerment"
                ].map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <span className="text-white text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-10 border border-gray-700/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-white mb-6">Featured Project</h4>
              <h5 className="text-xl font-semibold text-cyan-400 mb-4">Coinscious Building</h5>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Real-estate RWA infrastructure: auditing, KYC/KYB, liquidity pools, and the essentials 
                teams need to launch tokenized, fractional real-estate at scale.
              </p>
              <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors duration-300">
                Learn More →
              </button>
            </motion.div>
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
                <NeonLogo size="md" animated={false} />
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