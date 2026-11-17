"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SkeletonText } from "@/components/ui/skeleton";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = [
    "Hello, I'm Manu. I'm a Senior Software Engineer at Amazon with a strong background in React, TypeScript, and Python REST APIs.",
    "I specialize in designing and implementing responsive, user-friendly interfaces at scale, with a deep understanding of modern web technologies and shipping product.",
    "I earned my Master's in Computer Science from San Diego State University.",
    "When not coding, I explore web development trends, read, and watch Silicon Valley and Top Gear. Lemon tea, Pink Floyd, and Stack Overflow keep me going.",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-6 py-24 bg-card border-y border-border"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Who am I?
            </h2>
            <SkeletonText count={3} lastWidth="55%" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/3 space-y-6"
          >
            {content.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="text-muted-foreground leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
