import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    title: "Blender PSA",
    src: "/videos/BlenderPSA_Finalized_wLogo_V4.mp4",
  },
  {
    title: "Cookies PSA",
    src: "/videos/CookiesPSA_Finalized_wLogo_V4.mp4",
  },
  {
    title: "Metronome PSA",
    src: "/videos/MetronomePSA_Finalized_wLogo_V4.mp4",
  },
  {
    title: "Penny PSA",
    src: "/videos/PennyPSA_Finalized_wLogo_V4.mp4",
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videos[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? videos.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === videos.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="gallery" className="relative bg-black py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[2000px]">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white leading-[0.9] tracking-tight mb-10 md:mb-14"
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: "clamp(64px, 12vw, 220px)",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          GALLERY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="relative px-0 md:px-16">
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white transition-colors hover:bg-white hover:text-black md:flex"
              aria-label="Previous video"
            >
              <ChevronLeft className="size-7" />
            </button>

            <div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900">
              <video
                key={activeVideo.src}
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
                title={activeVideo.title}
              >
                <source src={activeVideo.src} type="video/mp4" />
              </video>
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white transition-colors hover:bg-white hover:text-black md:flex"
              aria-label="Next video"
            >
              <ChevronRight className="size-7" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPrevious}
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black md:hidden"
              aria-label="Previous video"
            >
              <ChevronLeft className="size-6" />
            </button>

            <div className="min-w-0 flex-1 text-center">
              <h3
                className="text-white text-lg md:text-xl uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {activeVideo.title}
              </h3>
              <p
                className="mt-2 text-white/45 text-xs uppercase tracking-widest"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                {activeIndex + 1} / {videos.length}
              </p>
            </div>

            <button
              type="button"
              onClick={showNext}
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black md:hidden"
              aria-label="Next video"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {videos.map((video, index) => (
              <button
                key={video.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`border px-4 py-3 text-left text-xs uppercase tracking-widest transition-colors ${
                  index === activeIndex
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-white/60 hover:border-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {video.title}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
