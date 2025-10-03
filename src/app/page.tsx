"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

export default function Home() {
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      {/* Logo centered at top */}
            <motion.div
        className="mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
          >
            <Logo size="xl" animated={true} />
          </motion.div>

      {/* Main tagline */}
          <motion.h1 
        className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
        <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Liberation Tech
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-white/80 font-light">
          for the Future
            </span>
          </motion.h1>

      {/* Sub-line */}
          <motion.p 
        className="text-xl md:text-2xl text-white/70 text-center max-w-2xl mb-20 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        AI + Blockchain services for solopreneurs and communities
          </motion.p>

      {/* Email capture form */}
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        <form onSubmit={emailSubmit} className="space-y-4">
          <div className="relative">
            <input 
              type="email"
              placeholder="Your email"
              className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 text-lg"
              required 
              aria-label="Your email address"
              disabled={isEmailLoading}
            />
          </div>
          
          <Button 
            type="submit" 
            variant="primary"
            size="lg"
            className="w-full"
            loading={isEmailLoading}
            loadingText="Joining..."
            disabled={isEmailLoading}
          >
            {emailSuccess ? "✓ Joined!" : "Join"}
          </Button>
          
          {emailSuccess && (
            <motion.p
              className="text-center text-cyan-400 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Welcome to the future! 🚀
            </motion.p>
          )}
        </form>

        {/* Coinscious Building line */}
        <motion.p 
          className="text-center text-white/40 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Coinscious Building: Coming Soon
        </motion.p>
      </motion.div>
    </div>

    {/* Building Rails for the Future Economy Section */}
    <motion.section 
      className="py-24 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Building Rails for the Future Economy
          </span>
        </motion.h2>

        {/* Two Blurbs */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Tokenization of Real Estate */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              {/* Geometric icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-cyan-400 rounded-lg rotate-45"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tokenization of Real Estate
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                We design blockchain infrastructure that transforms properties into liquid, investable digital assets — opening doors for community wealth.
              </p>
            </div>
          </motion.div>

          {/* Divider for desktop */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Automation for Small Businesses */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              {/* Geometric icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-400/20 to-cyan-400/20 border border-purple-400/30 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-purple-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Automation for Small Businesses
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                We build AI-powered digital workers that free up time, reduce costs, and let entrepreneurs focus on growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider line */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}