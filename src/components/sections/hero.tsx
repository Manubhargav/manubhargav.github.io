"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { HERO } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Scroll-driven fold from window scroll (Motion's useScroll on tall target can freeze)
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Anthropic-style fold: name rotates up/shrinks as MS/ rotates down/grows into place
  const p = Math.min(Math.max(y / 220, 0), 1);
  const fold = Math.min(Math.max((p - 0.08) / 0.55, 0), 1);

  return (
    <section
      ref={ref}
      id="intro"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="relative h-[9rem] md:h-[12rem] flex items-center [perspective:1000px]">
            <motion.h1
              animate={{
                scale: 1 - 0.98 * fold,
                rotateX: -80 * fold,
                opacity: 1 - fold,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 26 }}
              style={{ transformOrigin: "center center", backfaceVisibility: "hidden" }}
              className="absolute left-0 text-4xl md:text-6xl font-bold tracking-tight text-foreground whitespace-nowrap"
            >
              {HERO.name}
            </motion.h1>
            <motion.span
              animate={{
                scale: 0.02 + 0.98 * fold,
                rotateX: 80 * (1 - fold),
                opacity: fold,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 26 }}
              style={{ transformOrigin: "center center", backfaceVisibility: "hidden" }}
              aria-hidden="true"
              className="absolute left-0 text-5xl md:text-8xl font-black tracking-tighter text-primary whitespace-nowrap"
            >
              {HERO.monogram}
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-primary font-medium"
          >
            {HERO.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            {HERO.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-wrap gap-4"
          >
            <a
              href={HERO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-6 py-3 text-accent-foreground font-medium hover:bg-primary-hover transition-colors hover:scale-[1.02]"
            >
              Resume PDF
            </a>
            <a
              href="#work"
              className="rounded-md border border-border px-6 py-3 text-foreground hover:bg-card transition-colors hover:scale-[1.02]"
            >
              View Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="absolute -inset-6 rounded-full bg-primary/5 blur-3xl" />
          <ProjectImage
            src="/img/Manu_Potrait.jpg"
            alt="Manu Bhargav portrait"
            className="h-[520px] w-[520px] !rounded-full border border-border shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
