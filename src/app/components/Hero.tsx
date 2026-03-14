import { motion } from "motion/react";
import blenderImage from "../../assets/blender.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px] py-20 md:py-24">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Massive Typography */}
          <div className="lg:col-span-7 space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white leading-[0.85] tracking-tight"
              style={{ 
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(80px, 18vw, 380px)',
                fontWeight: 400,
                textTransform: 'uppercase'
              }}
            >
              CTRL B
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white leading-[0.85] tracking-tight"
              style={{ 
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(80px, 18vw, 380px)',
                fontWeight: 400,
                textTransform: 'uppercase'
              }}
            >
              STUDIOS
            </motion.h2>

            {/* Taglines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-12 pt-4"
            >
              <span 
                className="text-white text-sm md:text-base tracking-wider"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                Stand out.
              </span>
              <span 
                className="text-white text-sm md:text-base tracking-wider"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                Be Bold.
              </span>
            </motion.div>
          </div>

          {/* Right: Cinematic Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative aspect-video rounded-sm overflow-hidden"
            >
              <img 
                src={blenderImage}
                alt="Creative production"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-white/30" />
      </motion.div>
    </section>
  );
}