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

  return (
    <section
      ref={ref}
      id="intro"
      className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <motion.div style={{ y: textY }} className="flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            {HERO.name}
          </motion.h1>
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
            <div className="absolute -inset-6 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="relative h-[560px] w-auto object-cover object-top rounded-2xl border border-border shadow-2xl"
              src="/img/Manu_Potrait.jpg"
              alt="Manu Bhargav portrait"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
