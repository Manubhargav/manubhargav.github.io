"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { EXPERIENCE, EDUCATION } from "@/lib/data";
import { SkeletonText } from "@/components/ui/skeleton";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="experience"
      className="px-6 py-24 bg-card border-y border-border"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          <p className="text-muted-foreground mt-2">
            Front-end and full-stack work, most recent first.
          </p>
        </motion.div>

        {!isInView ? (
          <SkeletonText count={5} lastWidth="70%" />
        ) : (
          <div className="space-y-14">
            {EXPERIENCE.map((item, i) => (
              <motion.article
                key={item.company + item.period}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.role}
                    <span className="text-muted-foreground font-medium">
                      , {item.company}
                    </span>
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  {item.location}
                </div>
                <ul className="space-y-3">
                  {item.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-primary/50" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {item.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        )}

        {!isInView ? null : (
          <div className="mt-20">
            <h3 className="text-xl font-bold text-foreground mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((item, i) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <div className="text-sm text-muted-foreground">
                    {item.period}
                  </div>
                  <div className="font-bold text-foreground mt-1">
                    {item.role}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.company}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
