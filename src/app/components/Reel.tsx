import { motion } from "motion/react";

const reel = {
  title: "CTRL B Studios Reel",
  href: "https://www.youtube.com/watch?v=7LwvHKlHGEM",
  thumbnail: "https://img.youtube.com/vi/7LwvHKlHGEM/maxresdefault.jpg",
};

export function Reel() {
  return (
    <section id="reel" className="relative bg-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
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

        <motion.a
          href={reel.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative block aspect-video overflow-hidden rounded-sm bg-neutral-900"
          aria-label={`Watch ${reel.title} on YouTube`}
        >
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
            <div className="flex size-20 items-center justify-center rounded-full border-2 border-white bg-black/45 text-white transition-colors group-hover:bg-white group-hover:text-black md:size-28">
              <svg className="ml-1 size-10 md:size-14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 md:p-8">
            <p
              className="text-white text-sm md:text-base uppercase tracking-widest"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Watch on YouTube
            </p>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
