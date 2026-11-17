"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { HERO } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Anthropic-style fold: name rotates up and fades as monogram folds down into place.
  const fold = scrollYProgress;
  const nameRotX = useTransform(fold, [0, 0.1, 0.28], [0, -45, -90]);
  const nameScale = useTransform(fold, [0, 0.1, 0.28], [1, 0.55, 0]);
  const nameOpacity = useTransform(fold, [0, 0.08, 0.24], [1, 0.2, 0]);
  const monoRotX = useTransform(fold, [0.18, 0.34, 0.5], [-90, -45, 0]);
  const monoScale = useTransform(fold, [0.18, 0.34, 0.5], [0.55, 1, 1]);
  const monoOpacity = useTransform(fold, [0.18, 0.34, 0.5], [0, 1, 1]);

  return (
    <section
      ref={ref}
      id="intro"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="relative h-[8rem] md:h-[12rem] flex items-center [perspective:1000px]">
            <motion.h1
              style={{
                rotateX: nameRotX,
                scale: nameScale,
                opacity: nameOpacity,
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
              }}
              className="absolute left-0 text-4xl md:text-6xl font-bold tracking-tight text-foreground whitespace-nowrap"
            >
              {HERO.name}
            </motion.h1>
            <motion.span
              style={{
                rotateX: monoRotX,
                scale: monoScale,
                opacity: monoOpacity,
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
              }}
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
              className="rounded-md bg-primary px-6 py-3 text-accent-foreground font-medium hover:bg-primary-hover transition-colors"
            >
              Resume PDF
            </a>
            <a
              href="#work"
              className="rounded-md border border-border px-6 py-3 text-foreground hover:bg-card transition-colors"
            >
              View Work
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="absolute -inset-6 rounded-full bg-primary/5 blur-3xl" />
          <ProjectImage
            src="/img/Manu_Potrait.jpg"
            alt="Manu Bhargav portrait"
            className="h-[520px] w-[520px] !rounded-full border border-border shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
