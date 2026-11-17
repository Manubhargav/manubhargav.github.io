"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { METRICS, HIGHLIGHTS } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export function HallOfFame() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="hall-of-fame" className="px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground">Hall of Fame</h2>
          <p className="text-muted-foreground mt-2">
            Numbers and moments I&apos;m proud of.
          </p>
        </motion.div>

        {!isInView ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-28" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary">{m.value}</div>
                <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
