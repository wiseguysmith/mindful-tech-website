"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { coinscious, brand } from "@/content/site";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";

export default function Home() {
  const year = new Date().getFullYear();
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isApplyLoading, setIsApplyLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const emailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEmailLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsEmailLoading(false);
    setEmailSuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => setEmailSuccess(false), 3000);
  };

  const applySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsApplyLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsApplyLoading(false);
    setApplySuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => setApplySuccess(false), 3000);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

          {/* Professional main heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <span className="block bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
              Mindful Tech
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-white/80 font-light">
              Liberation Technology for the Next Generation
            </span>
          </motion.h1>

          {/* Enhanced subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-ink-dim max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            We build ethical infrastructure that transforms real-world assets into programmable opportunities. 
            Professional execution, <span className="text-primary font-semibold">mindful innovation</span>, 
            <span className="text-secondary font-semibold">sustainable impact</span>.
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <Button
              size="lg"
              variant="primary"
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <span className="flex items-center gap-3">
                Get Started
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <span className="flex items-center gap-3">
                Learn More
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </span>
            </Button>
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
      <Section id="about" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-gradient">About Mindful Tech</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                Conscious Technology
              </span>
              <br />
              <span className="text-white/60 text-3xl md:text-5xl font-light">
                for a better tomorrow
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed font-light">
              We&apos;re pioneering the next generation of mindful technology infrastructure. 
              Our mission is to create tools that serve humanity&apos;s highest potential through 
              ethical design, conscious innovation, and sustainable impact.
            </p>
          </motion.div>

          {/* 3D Value Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {brand.values.map((value, index) => (
              <motion.div
                key={value}
                className="group perspective"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05
                }}
              >
                <Card 
                  variant="glow" 
                  padding="lg" 
                  className="relative h-56 transform-3d hover-lift hover-glow group"
                >
                  {/* Sophisticated icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:animate-glow-pulse group-hover:border-primary/60 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white/90 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                    {value}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {value === "Ethical" && "Building technology that serves humanity's highest potential"}
                    {value === "Innovative" && "Pioneering the next generation of conscious infrastructure"}
                    {value === "Sustainable" && "Creating solutions that benefit future generations"}
                    {value === "Collaborative" && "Working together to build a better tomorrow"}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/60 rounded-full animate-float-up" />
          <div className="absolute top-3/4 right-20 w-3 h-3 bg-secondary/60 rounded-full animate-float-up" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-accent/80 rounded-full animate-float-up" style={{ animationDelay: '4s' }} />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="relative py-24 overflow-hidden bg-gradient-to-br from-bg/50 via-bg to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                Trusted by Builders
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Join the community of developers and organizations building the future
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Chen",
                role: "CTO, DeFi Protocol",
                company: "Ethereum Foundation",
                content: "Mindful Tech's infrastructure transformed our RWA tokenization process. Their ethical approach to technology is exactly what the industry needs.",
                avatar: "👩‍💻"
              },
              {
                name: "Marcus Rodriguez",
                role: "Lead Developer",
                company: "Polygon Labs",
                content: "The level of professionalism and attention to detail is unmatched. They don't just build software, they build the future.",
                avatar: "👨‍🚀"
              },
              {
                name: "Dr. Aisha Patel",
                role: "Head of Innovation",
                company: "ConsenSys",
                content: "Working with Mindful Tech has been transformative. Their conscious approach to technology development sets a new standard.",
                avatar: "👩‍🔬"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="card p-8 hover-lift hover-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-white/80 italic leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* MISSION */}
      <Section id="mission" className="relative py-24 overflow-hidden">
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
                Our Mission
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed font-light">
              We&apos;re building the foundational infrastructure for a more conscious, connected, and sustainable future. 
              Our technology serves communities, empowers individuals, and creates positive impact at scale.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* AI DEMO SECTION */}
      <Section className="relative py-24 overflow-hidden bg-gradient-to-br from-bg via-bg/50 to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-gradient">Live Demo</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent">
                Experience the Future
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-5xl mx-auto leading-relaxed font-light">
              Witness our technology in action through interactive demonstrations and real-time examples
            </p>
          </motion.div>

          {/* Interactive Demo Card */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Terminal-style header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-ink-dim font-mono">mindful-tech@infrastructure:~$</div>
              </div>

              {/* Animated code display */}
              <div className="space-y-4 font-mono text-sm">
                <motion.div
                  className="text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-accent">const</span> infrastructure = <span className="text-secondary">await</span> mindfulTech.build();
                </motion.div>
                
                <motion.div
                  className="text-ink-dim"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-accent">#</span> Real-world asset tokenization
                </motion.div>
                
                <motion.div
                  className="text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 }}
                >
                  <span className="text-accent">const</span> result = <span className="text-secondary">await</span> infrastructure.tokenize(asset);
                </motion.div>
                
                <motion.div
                  className="text-green-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 }}
                >
                  <span className="text-accent">✓</span> Asset successfully tokenized
                </motion.div>
                
                <motion.div
                  className="text-green-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3 }}
                >
                  <span className="text-accent">✓</span> Liquidity pool created
                </motion.div>
                
                <motion.div
                  className="text-green-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.5 }}
                >
                  <span className="text-accent">✓</span> Compliance checks passed
                </motion.div>
              </div>

              {/* Animated progress bar */}
              <motion.div
                className="mt-8 bg-white/10 rounded-full h-2 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 4.5 }}
                />
              </motion.div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full animate-float-up" />
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary/60 rounded-full animate-float-up" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>
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
      <Section id="updates" className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Latest Updates</span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-white/80 rounded" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Agentic Studio</h3>
                  <p className="text-ink-dim text-lg leading-relaxed mb-4">
                    {brand.agenticStudio}
                  </p>
                  <motion.a 
                    href="#newsletter" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-accent rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Notified
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* JOIN */}
      <Section id="newsletter" className="section">
        <h2 className="h2">Join the Movement</h2>
        <p className="subtle mt-2">Be first to pilots, drops, and roles.</p>
        <form className="mt-6 card p-4 md:p-6 max-w-lg" onSubmit={emailSubmit}>
          <input 
            className="w-full rounded-xl2 bg-white/5 border border-white/10 px-4 py-3"
            placeholder="you@example.com" 
            type="email" 
            required 
            aria-label="Email address"
            disabled={isEmailLoading}
          />
          <Button 
            className="mt-3" 
            type="submit" 
            variant="primary"
            loading={isEmailLoading}
            loadingText="Subscribing..."
            disabled={isEmailLoading}
          >
            {emailSuccess ? "✓ Subscribed!" : "Subscribe"}
          </Button>
          {emailSuccess && (
            <motion.p
              className="mt-2 text-sm text-green-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Welcome to the movement! 🚀
            </motion.p>
          )}
        </form>
      </Section>

      {/* CONTACT & APPLY */}
      <Section id="contact" className="section">
        <h2 className="h2">Contact & Apply</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="card p-6">
            <p className="font-medium">Contact Us</p>
            <p className="subtle mt-2">{brand.email}</p>
          </div>
          <div id="apply" className="card p-6">
            <p className="font-medium">Apply to Join the Team</p>
            <form className="mt-4" onSubmit={applySubmit}>
              <input 
                className="w-full rounded-xl2 bg-white/5 border border-white/10 px-4 py-3"
                placeholder="Your name" 
                required 
                aria-label="Your name"
                disabled={isApplyLoading}
              />
              <select 
                className="w-full rounded-xl2 bg-white/5 border border-white/10 px-4 py-3 mt-3" 
                defaultValue="" 
                required
                aria-label="Role interest"
                disabled={isApplyLoading}
              >
                <option value="" disabled>Role interest</option>
                <option>Frontend</option>
                <option>Smart Contracts</option>
                <option>AI/Agents</option>
                <option>Ops/Partnerships</option>
              </select>
              <textarea 
                className="w-full rounded-xl2 bg-white/5 border border-white/10 px-4 py-3 mt-3"
                placeholder="Why you + Mindful Tech?" 
                rows={4}
                aria-label="Why you + Mindful Tech?"
                disabled={isApplyLoading}
              />
              <Button 
                className="mt-3" 
                type="submit" 
                variant="primary"
                loading={isApplyLoading}
                loadingText="Submitting..."
                disabled={isApplyLoading}
              >
                {applySuccess ? "✓ Application Sent!" : "Submit"}
              </Button>
              {applySuccess && (
                <motion.p
                  className="mt-2 text-sm text-green-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  We&apos;ll be in touch soon! ✨
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </Section>

      <footer className="section pt-0">
        <div className="subtle">© {year} Mindful Tech</div>
      </footer>
    </>
  );
}