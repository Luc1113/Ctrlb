import { motion } from "motion/react";
import metronomeImage from "../../assets/metronome.png";

export function Reel() {
  return (
    <section id="reel" className="relative bg-black py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
        
        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white leading-[0.85] tracking-tight mb-12 md:mb-16"
          style={{ 
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(80px, 16vw, 280px)',
            fontWeight: 400,
            textTransform: 'uppercase'
          }}
        >
          OUR REEL
        </motion.h2>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-neutral-900 rounded-sm overflow-hidden"
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/3Uz9gbuzS4Y"
              title="CTRL B Studios Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Right: Metronome Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src={metronomeImage}
              alt="Precision and timing"
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
