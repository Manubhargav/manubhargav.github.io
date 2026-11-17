"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EXPERIENCE, EDUCATION } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="experience" className="px-6 py-24 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-foreground mb-14"
        >
          Experience
        </motion.h2>

        <div className="border-l border-border pl-8 space-y-14">
          {EXPERIENCE.map((item, i) => (
            <motion.article
              key={item.company + item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.24) }}
              className="relative group"
              whileHover={{ x: -4 }}
            >
              <span className="absolute -left-[33px] top-1.5 block h-2 w-2 rounded-full bg-primary ring-4 ring-background transition-colors duration-300 group-hover:bg-primary-hover" />
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.role}
                  <span className="text-muted-foreground font-medium">, {item.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
              {item.summary && (
                <p className="text-sm text-foreground/80 mt-4 leading-relaxed max-w-3xl group-hover:text-primary/90 transition-colors duration-300">
                  {item.summary}
                </p>
              )}
              {item.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-accent-foreground transition-all duration-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
              {item.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                  {item.stack.map((t) => (
                    <span key={t} className="flex items-center gap-1.5 group-hover:text-primary transition-colors duration-300">
                      <span className="h-1 w-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-300" />
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold text-foreground mb-8">Education</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-background p-6 flex flex-col min-h-[150px] group hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {item.period}
                </span>
                <p className="font-bold text-foreground mt-2 leading-snug group-hover:text-primary transition-colors duration-300">
                  {item.role}
                </p>
                <p className="text-sm text-muted-foreground mt-auto pt-4 group-hover:text-primary/80 transition-colors duration-300">
                  {item.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
