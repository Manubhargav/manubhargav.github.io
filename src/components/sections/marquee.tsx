"use client";

import { MARQUEE } from "@/lib/data";

export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE];

  return (
    <section
      aria-label="Companies and institutions I have worked with"
      className="border-y border-border bg-card/40 py-10 overflow-hidden"
    >
      <div className="mb-7 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Where I have worked and studied
        </p>
      </div>
      <div className="marquee-track flex w-max items-center gap-16">
        {items.map((item, i) => (
          <img
            key={i}
            src={`/brands/${item.icon}.png`}
            alt={item.label}
            className="h-7 w-auto max-w-[150px] shrink-0 object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
