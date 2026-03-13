import { motion } from "motion/react";
import eggsImage from "figma:asset/a3c98444d75bf3b612b4140615af20aa0ad2a41a.png";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
        
        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black leading-[0.88] tracking-tight mb-8 md:mb-12"
          style={{ 
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(60px, 14vw, 280px)',
            fontWeight: 400,
            textTransform: 'uppercase'
          }}
        >
          MEDIA<br/>DESIGNED<br/>TO STAND<br/>OUT
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Body Copy */}
          <div className="lg:col-span-6 space-y-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-black text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                In the social media age of advertising, we are <span style={{ fontWeight: 700 }}>bombarded</span> with information every moment of every day. This <span style={{ fontWeight: 700 }}>overwhelming</span> content landscape frequently leads to marketing that values <span style={{ fontWeight: 700 }}>quantity</span> over quality, <span style={{ fontWeight: 700 }}>repetition</span> over distinction, and <span style={{ fontWeight: 700 }}>homogeneity</span> over individuality.
              </p>
              <p className="text-black text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                While we are more connected than ever, businesses get lost in the <span style={{ fontWeight: 700 }}>endless scroll</span>, often failing to secure an audience because an <span style={{ fontWeight: 700 }}>algorithm</span> hinders their <span style={{ fontWeight: 700 }}>unique creative vision.</span>
              </p>
              <p className="text-black text-base md:text-lg leading-relaxed pt-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                At <span style={{ fontWeight: 700 }}>CTRL B</span>, we want to help you channel that vision.
              </p>
              <p className="text-black text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                We want to help you <span style={{ fontWeight: 700 }}>STAND OUT.</span>
              </p>
            </motion.div>
          </div>

          {/* Right: Image with Annotations */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={eggsImage}
                alt="Stand out from competition"
                className="w-full h-auto"
              />
              
              {/* Annotations Overlay */}
              <div className="absolute top-[25%] right-[10%] flex items-center gap-2">
                <div className="w-12 h-[1px] bg-black/40" />
                <span className="text-black text-[10px] md:text-xs px-2 py-1 bg-white/80 backdrop-blur-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  your competitor
                </span>
              </div>

              <div className="absolute bottom-[30%] right-[10%] flex items-center gap-2">
                <div className="w-16 h-[1px] bg-black/40" />
                <span className="text-black text-[10px] md:text-xs px-2 py-1 bg-white/80 backdrop-blur-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  your other competitor
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}