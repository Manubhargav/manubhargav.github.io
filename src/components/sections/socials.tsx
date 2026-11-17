"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { SOCIALS } from "@/lib/data";

const ICONS: Record<string, string> = {
  github: "github",
  linkedin: "linkedin",
  instagram: "instagram",
  x: "x",
  medium: "medium",
};

export function Socials() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} id="socials" className="px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground">Socials</h2>
        </motion.div>

        {/* 12-column brick: three across on top, two centered beneath */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-5">
          {SOCIALS.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-primary hover:bg-card-hover transition-colors ${
                i < 3
                  ? "col-span-2 md:col-span-4"
                  : i === 3
                  ? "col-span-1 md:col-span-4 md:col-start-3"
                  : "col-span-1 md:col-span-4"
              }`}
            >
              <span className="shrink-0 text-primary">
                {ICONS[social.icon] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/brands/${ICONS[social.icon]}.svg`}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
                  </svg>
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-foreground">
                  {social.label}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {social.handle}
                </span>
              </span>
              <span className="text-muted-foreground">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
