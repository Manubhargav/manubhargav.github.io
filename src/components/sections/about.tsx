"use client";

import { useRef } from "react";
import { motion } from "motion/react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-6 py-24 bg-card border-y border-border"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl font-bold text-foreground">Who am I?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            I&apos;m a front-end engineer at Amazon, working on React interfaces
            and the Python services behind them.
          </p>
          <p>
            Before Amazon I built shared design systems at Splunk and large
            enterprise platforms at Truist. I care about fast interfaces,
            honest data, and details that hold up under use.
          </p>
          <p>
            I earned my master&apos;s in computer science at San Diego State
            University. Away from the screen: lemon tea, Pink Floyd, and a good
            Top Gear rerun.
          </p>
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
    </section>
  );
}
