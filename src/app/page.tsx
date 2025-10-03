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
  );
}