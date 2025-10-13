"use client";
import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#mission", label: "Mission" },
  { href: "#projects", label: "Projects" },
  { href: "/sofia", label: "Sofia", external: true },
  { href: "#updates", label: "Updates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const activeSection = useScrollSpy(
    navItems.map(item => item.href.slice(1)),
    120
  );

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between border border-white/20 rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-xl shadow-2xl">
          <Logo size="md" animated={true} />
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "text-white font-semibold" 
                      : "text-white/70 hover:text-white"
                  } ${item.external ? 'text-secondary hover:text-secondary/80' : ''}`}
                  aria-current={isActive ? "page" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {item.external && (
                    <span className="ml-1 text-xs">↗</span>
                  )}
                  {isActive && !item.external && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("#apply")}
              className="hidden sm:flex"
            >
              Apply
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection("#newsletter")}
            >
              Join
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

