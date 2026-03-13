import { motion } from "motion/react";
import microwaveActionImage from "figma:asset/5e704b85f40034f18758387a546416de7e8dbbe2.png";

export function Mission() {
  return (
    <section id="mission" className="relative bg-black py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white leading-[0.88] tracking-tight mb-12 md:mb-16"
          style={{ 
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(70px, 14vw, 240px)',
            fontWeight: 400,
            textTransform: 'uppercase'
          }}
        >
          OUR<br/>MISSION
        </motion.h2>

        {/* Content Grid - Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          
          {/* Left: Image */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src={microwaveActionImage}
                alt="Creative process"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Right: Mission Text */}
          <div className="lg:pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-5"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p className="text-white text-sm md:text-base leading-relaxed">
                is to <span style={{ fontWeight: 700 }}>EMBOLDEN</span> your brand in an oversaturated, fast-paced social media environment.
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We seek to make content that's not templated, but <span style={{ fontWeight: 700 }}>TAILORED.</span>
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We prioritize long-term, <span style={{ fontWeight: 700 }}>IMAGINATIVE</span> marketing over standardized, sanitized content.
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We work <span style={{ fontWeight: 700 }}>INTIMATELY</span> with both the product and the client.
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We ensure your vision is not only <span style={{ fontWeight: 700 }}>REALIZED</span> but also <span style={{ fontWeight: 700 }}>RECIEVED</span> by an audience.
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Yet, we go above and beyond just feeding an <span style={{ fontWeight: 700 }}>ALGORITHM.</span>
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Our goal is to feed your brand's <span style={{ fontWeight: 700 }}>CREATIVITY.</span>
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                To visualize your brand's <span style={{ fontWeight: 700 }}>UNIQUE VOICE</span>, and bring it under your control.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Large Statement - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/10"
        >
          <h3 
            className="text-white leading-[0.9] tracking-tight mb-4"
            style={{ 
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(50px, 10vw, 140px)',
              fontWeight: 400,
              textTransform: 'uppercase'
            }}
          >
            To help you produce
          </h3>
          <div className="inline-block border-4 border-white px-6 py-3">
            <h3 
              className="text-white leading-[0.95] tracking-tight"
              style={{ 
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(50px, 10vw, 140px)',
                fontWeight: 400,
                textTransform: 'uppercase'
              }}
            >
              MEDIA THAT'S BOLD
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}