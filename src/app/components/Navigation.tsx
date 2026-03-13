import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between bg-transparent"
    >
      <button 
        onClick={() => scrollToSection('hero')}
        className="hover:opacity-70 transition-opacity mix-blend-difference"
      >
        <Logo className="invert" />
      </button>
      
      <button 
        onClick={() => scrollToSection('contact')}
        className="text-white text-xs tracking-[0.2em] hover:opacity-70 transition-opacity uppercase mix-blend-difference"
        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
      >
        Contact
      </button>
    </motion.nav>
  );
}