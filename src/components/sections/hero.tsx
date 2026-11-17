"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { HERO } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // The name folds into the monogram as the hero scrolls away.
  const nameScaleX = useTransform(scrollYProgress, [0, 0.18, 0.4], [1, 0.02, 0.02]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.12, 0.3], [1, 0, 0]);
  const nameRotateX = useTransform(scrollYProgress, [0, 0.18, 0.4], [0, -70, -70]);
  const monoScaleX = useTransform(scrollYProgress, [0, 0.18, 0.4], [0.02, 1, 1]);
  const monoOpacity = useTransform(scrollYProgress, [0, 0.12, 0.3], [0, 1, 1]);
  const monoRotateX = useTransform(scrollYProgress, [0, 0.18, 0.4], [70, 0, 0]);

  return (
    <section
      ref={ref}
      id="intro"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <motion.div style={{ y: textY }} className="flex flex-col gap-6">
          <div className="relative h-[9rem] md:h-[13rem] flex items-center">
            <motion.h1
              style={{
                scaleX: nameScaleX,
                opacity: nameOpacity,
                rotateX: nameRotateX,
                transformOrigin: "left center",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            >
              {HERO.name}
            </motion.h1>
            <motion.span
              style={{
                scaleX: monoScaleX,
                opacity: monoOpacity,
                rotateX: monoRotateX,
                transformOrigin: "left center",
              }}
              aria-hidden="true"
              className="absolute left-0 text-5xl md:text-8xl font-black tracking-tighter text-primary"
            >
              {HERO.monogram}
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-xl text-primary font-medium"
          >
            {HERO.role}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            {HERO.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-4 flex flex-wrap gap-4"
          >
            <a
              href={HERO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-accent-foreground font-medium hover:bg-primary-hover transition-colors"
            >
              Resume PDF
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-foreground hover:bg-card transition-colors"
            >
              View Work
            </a>
          </motion.div>
        </motion.div>

        <div className="relative hidden lg:flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ y: portraitY }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative h-[520px] w-[520px] object-cover rounded-full border border-border shadow-2xl"
              src="/img/Manu_Potrait.jpg"
              alt="Manu Bhargav portrait"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
