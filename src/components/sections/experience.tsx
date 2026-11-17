"use client";

import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { EXPERIENCE, EDUCATION } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      id="experience"
      className="px-6 py-24 bg-card border-y border-border"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl font-bold text-foreground mb-14"
        >
          Experience
        </h2>

        <div className="border-l border-border pl-8 space-y-12">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.company + item.period} y={30} delay={Math.min(i * 0.08, 0.24)}>
              <article className="relative">
              <span className="absolute -left-[33px] top-1.5 block h-2 w-2 rounded-full bg-primary ring-4 ring-card" />
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
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
              <p className="text-sm text-muted-foreground mt-1">
                {item.location}
              </p>
              {item.summary && (
                <p className="text-sm text-foreground/80 mt-4 leading-relaxed max-w-3xl">
                  {item.summary}
                </p>
              )}
              {item.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs text-primary"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
              {item.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  {item.stack.map((t) => (
                    <span key={t} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {t}
                    </span>
                  ))}
                </div>
              )}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-bold text-foreground mb-8">Education</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {EDUCATION.map((item, i) => (
              <Reveal key={item.company} y={20} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-background p-6 flex flex-col min-h-[150px]">
                <span className="text-xs text-muted-foreground">
                  {item.period}
                </span>
                <p className="font-bold text-foreground mt-2 leading-snug">
                  {item.role}
                </p>
                <p className="text-sm text-muted-foreground mt-auto pt-4">
                  {item.company}
                </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
