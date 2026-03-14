import { motion } from "motion/react";
import colinImage from "../../assets/colin.png";
import chrisImage from "../../assets/chris.png";

export function Team() {
  return (
    <section id="team" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
        
        {/* Massive Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-black leading-[0.85] tracking-tight mb-12 md:mb-16"
          style={{ 
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(80px, 16vw, 320px)',
            fontWeight: 400,
            textTransform: 'uppercase'
          }}
        >
          WHO ARE<br/>WE?
        </motion.h2>

        {/* Team Bio - Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 max-w-4xl"
        >
          <p className="text-black text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            <span style={{ fontWeight: 700 }}>Chris Vitale</span> and <span style={{ fontWeight: 700 }}>Colin Dowd</span> met while attending <span style={{ fontWeight: 700 }}>Fordham University</span> and worked closely together on multiple short film projects. After gaining experience on set, they produced a <span style={{ fontWeight: 700 }}>PSA campaign</span> for the <span style={{ fontWeight: 700 }}>NYC Special Narcotics Prosecutor's Office</span>, discovering their shared passion for <span style={{ fontWeight: 700 }}>creative, innovative, and customer-tailored</span> video marketing in a media landscape that often emphasizes standardized and homogenized content. They hope to share this creativity with businesses looking to stand out with their <span style={{ fontWeight: 700 }}>distinct voice and visual style.</span>
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Colin Dowd */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
              <img 
                src={colinImage}
                alt="Colin Dowd"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 
                  className="text-black mb-1"
                  style={{ 
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 'clamp(48px, 8vw, 90px)',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    lineHeight: 0.95
                  }}
                >
                  COLIN DOWD
                </h3>
                <h4 
                  className="text-black/60"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  Co-Founder
                </h4>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Diligent and dedicated, Colin has experience in various digital production and administration positions, from managing the social media of an upstart podcast and comedy club to working hands-on as a cinematographer, director, and assistant editor on short and indie film projects to casting for an off-off Broadway play development company.
              </p>
            </div>
          </motion.div>

          {/* Chris Vitale */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pt-12"
          >
            <div className="relative aspect-square overflow-hidden bg-neutral-100">
              <img 
                src={chrisImage}
                alt="Chris Vitale"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div>
                <h3 
                  className="text-black mb-1"
                  style={{ 
                    fontFamily: 'Anton, sans-serif',
                    fontSize: 'clamp(48px, 8vw, 90px)',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    lineHeight: 0.95
                  }}
                >
                  CHRIS VITALE
                </h3>
                <h4 
                  className="text-black/60"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}
                >
                  Co-Founder
                </h4>
              </div>
              <p className="text-black text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Solutions-oriented and driven, Chris is a versatile storyteller, pivoting between strategist, creator, videographer, editor, producer, marketer, scriptwriter, and creative director. In total, across all platforms and accounts, Chris has helped grow and manage multiple communities spanning over 697K people.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}