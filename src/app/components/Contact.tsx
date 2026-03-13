import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Massive Brand Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-black leading-[0.88] tracking-tight mb-8"
              style={{ 
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(70px, 14vw, 260px)',
                fontWeight: 400,
                textTransform: 'uppercase'
              }}
            >
              CTRL B<br/>STUDIOS
            </h2>

            <div className="space-y-3">
              <p 
                className="text-black text-base md:text-lg tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                Stand out.
              </p>
              <p 
                className="text-black text-base md:text-lg tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Be Bold.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12 lg:pt-12"
          >
            {/* Email */}
            <div>
              <p 
                className="text-black/40 text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Email:
              </p>
              <a 
                href="mailto:info@ctrlbstudios.com"
                className="text-black text-lg md:text-xl hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                info@ctrlbstudios.com
              </a>
            </div>

            {/* Phone Numbers */}
            <div>
              <p 
                className="text-black/40 text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
              >
                Tel:
              </p>
              <div className="space-y-2">
                <div>
                  <p 
                    className="text-black text-base md:text-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    Colin: <span style={{ fontWeight: 500 }}>913-485-0497</span>
                  </p>
                </div>
                <div>
                  <p 
                    className="text-black text-base md:text-lg"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    Chris: <span style={{ fontWeight: 500 }}>917-547-6642</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="pt-8 border-t border-black/10">
              <Logo />
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-black/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p 
              className="text-black/30 text-xs tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © 2026 CTRL B STUDIOS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <a 
                href="#" 
                className="text-black/50 hover:text-black text-xs tracking-widest transition-colors uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-black/50 hover:text-black text-xs tracking-widest transition-colors uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Vimeo
              </a>
              <a 
                href="#" 
                className="text-black/50 hover:text-black text-xs tracking-widest transition-colors uppercase"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}