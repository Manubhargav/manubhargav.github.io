"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GALLERY } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";

function useDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return desktop;
}

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const desktop = useDesktop();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const shift = useTransform(scrollYProgress, [0, 1], ["0%", "-46%"]);

  return (
    <section
      ref={ref}
      id="gallery"
      className={`relative ${desktop ? "h-[85vh]" : "py-20"}`}
    >
      <div
        className={
          desktop
            ? "sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
            : ""
        }
      >
        <div className="max-w-6xl mx-auto px-6 mb-8 w-full">
          <h2 className="text-3xl font-bold text-foreground">Moments</h2>
        </div>

        <div
          className={`no-scrollbar overflow-x-auto md:overflow-visible w-full ${
            desktop ? "" : "px-6"
          }`}
        >
          <motion.div
            style={desktop ? { x: shift } : undefined}
            className="flex w-max items-start gap-5 px-6"
          >
            {GALLERY.map((item) => (
              <figure key={item.id} className="w-56 shrink-0 md:w-72">
                <ProjectImage
                  src={item.src}
                  alt={item.caption}
                  className={item.tall ? "aspect-[3/4]" : "aspect-square md:mt-12"}
                />
                <figcaption className="mt-3 text-xs text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
