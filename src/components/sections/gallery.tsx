"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GALLERY } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const layout = [
    { col: 1, row: 1, rows: 3, className: "aspect-[3/4] hover:scale-105" },
    { col: 2, row: 1, rows: 2, className: "aspect-square hover:scale-105" },
    { col: 4, row: 1, rows: 3, className: "aspect-[3/4] hover:scale-105" },
    { col: 1, row: 4, rows: 2, className: "aspect-square hover:scale-105" },
    { col: 2, row: 3, rows: 2, className: "aspect-[3/4] hover:scale-105" },
    { col: 4, row: 4, rows: 2, className: "aspect-square hover:scale-105" },
    { col: 1, row: 6, rows: 2, className: "aspect-[3/4] hover:scale-105" },
    { col: 2, row: 5, rows: 2, className: "aspect-square hover:scale-105" },
  ];

  return (
    <section
      ref={ref}
      id="gallery"
      className="relative px-6 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-foreground"
        >
          Moments
        </motion.h2>
      </div>

      <div className="relative max-w-6xl mx-auto grid-cols-4 gap-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="absolute -top-1/2 left-0 right-0 h-[200%] border-t-2 border-border/20 rounded-full rotate-3 -z-10"
              style={{
                transform: `rotate(${i * 6}deg) scale(${1 + i * 0.05})`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-4 gap-4">
          {layout.map((pos, i) => {
            const item = GALLERY[i % GALLERY.length];
            return (
              <motion.figure
                key={item.id}
                style={{
                  gridColumnStart: pos.col,
                  gridRowStart: pos.row,
                  gridRowEnd: pos.rows,
                }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group ${pos.className}`}
              >
                <div className="relative rounded-lg overflow-hidden aspect-[3/4] bg-card">
                  <ProjectImage
                    src={item.src}
                    alt={item.caption}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <figcaption className="mt-2 flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground">
                  <span className="text-primary/70">{item.caption}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
