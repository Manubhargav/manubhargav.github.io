"use client";

import { MARQUEE } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <section
      aria-label="Companies and institutions I have worked with"
      className="border-y border-border bg-card/40 py-10 overflow-hidden"
    >
      <div className="mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Where I have worked and studied
        </p>
      </div>
      <div className="marquee-track flex w-max gap-16">
        {items.map((item, i) => (
          <span
            key={i}
            className={cn(
              "shrink-0 text-2xl text-muted-foreground/60 hover:text-primary transition-colors select-none",
              item.style
            )}
          >
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
