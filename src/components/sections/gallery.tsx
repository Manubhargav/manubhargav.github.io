"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GALLERY } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="gallery" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground">Moments</h2>
          <p className="text-muted-foreground mt-2">
            A horizontal strip of frames. Swap the placeholders for real photos.
          </p>
        </motion.div>
      </div>

      <div className="no-scrollbar flex gap-5 overflow-x-auto px-6 pb-4 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        {GALLERY.map((item, i) => (
          <motion.figure
            key={item.id}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group w-64 shrink-0 md:w-80"
          >
            <ProjectImage
              src={item.src}
              alt={item.caption}
              className="aspect-[4/5]"
            />
            <figcaption className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>{item.caption}</span>
              <span className="text-primary/60">{item.id}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
