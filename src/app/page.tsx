"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const emailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEmailLoading(true);
    
    // Simulate API call - in production, integrate with your email service
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsEmailLoading(false);
    setEmailSuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => setEmailSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Mindful Tech builds intelligent automation and blockchain infrastructure for a world in digital transformation.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Empowering small businesses and investors through automation and tokenization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black text-lg px-8 py-4 rounded-full">
              Schedule an Appointment
            </Button>
            <Button variant="outline" className="border-gray-500 text-gray-200 text-lg px-8 py-4 rounded-full hover:border-cyan-400 hover:text-cyan-400">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      {/* AUTOMATION SECTION */}
      <section className="bg-gradient-to-r from-teal-400/10 to-white/5 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Automation That Works While You Don&apos;t
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
          From inbox automation to AI-driven marketing assistants, we build systems that give you back your time.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: 'Inbox Automations', 
              desc: 'Manage leads, clients, and emails automatically.' 
            },
            { 
              title: 'Lead Generation Systems', 
              desc: 'Bring in qualified prospects without manual outreach.' 
            },
            { 
              title: 'AI Assistant Setup & Marketing', 
              desc: 'Build your digital staff to run your daily operations.' 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.2 }} 
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-teal-300 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <Button className="mt-10 bg-teal-400 hover:bg-teal-500 text-black text-lg px-8 py-4 rounded-full">
          Schedule Your Setup
        </Button>
      </section>

      {/* BLOCKCHAIN SECTION */}
      <section className="bg-gradient-to-r from-purple-900/40 to-purple-700/10 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          The Future of Real Estate Ownership
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
          Our pilot program introduces tokenized real estate infrastructure designed to open global investment access and transparency.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: 'Tokenization Pilot Overview', 
              desc: 'Milestone-based smart contracts and fractional ownership.' 
            },
            { 
              title: 'How It Works', 
              desc: 'Investor vaults, milestone escrow, and on-chain compliance.' 
            },
            { 
              title: 'Learn More', 
              desc: 'Watch our in-depth YouTube breakdown explaining the pilot.' 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.2 }} 
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <Button className="mt-10 bg-purple-500 hover:bg-purple-600 text-white text-lg px-8 py-4 rounded-full">
          Schedule Investor Call
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] text-center py-10 border-t border-white/10">
        <h4 className="text-xl font-semibold mb-4 text-gray-200">Stay connected — join our future updates.</h4>
        <form onSubmit={emailSubmit} className="flex justify-center gap-3 flex-col sm:flex-row items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            disabled={isEmailLoading}
            required
            aria-label="Email address for updates"
          />
          <Button 
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-full"
            loading={isEmailLoading}
            loadingText="Subscribing..."
          >
            {emailSuccess ? "✓ Subscribed!" : "Subscribe"}
          </Button>
        </form>
        {emailSuccess && (
          <motion.p
            className="text-center text-cyan-400 text-sm mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Welcome to the future! 🚀
          </motion.p>
        )}
        <p className="text-gray-500 text-sm mt-6">© {new Date().getFullYear()} Mindful Tech. All rights reserved.</p>
      </footer>
    </div>
  );
}