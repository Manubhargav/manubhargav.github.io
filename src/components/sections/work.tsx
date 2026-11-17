"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PROJECTS } from "@/lib/data";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { ProjectImage } from "@/components/ui/project-image";

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="work" className="px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground">
            Checkout my Projects
          </h2>
          <p className="text-muted-foreground mt-2">
            Screenshot-first project cards, stacked as you scroll.
          </p>
        </motion.div>

        {!isInView ? (
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <WorkCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col gap-10"
            style={{ perspective: "1200px" }}
          >
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, rotateX: 8 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, rotateX: 0 }
                    : { opacity: 0, y: 60, rotateX: 8 }
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              >
                <WorkCard project={project} index={i} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function WorkCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const tilt = index % 2 === 0 ? -1.5 : 1.5;
  return (
    <motion.div
      whileHover={{ y: -8, rotateX: tilt, rotateY: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative rounded-xl border border-border bg-background p-6 shadow-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/5">
          <ProjectImage
            src={project.screenshot}
            alt={project.title}
            className="aspect-[4/3]"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <p className="text-primary mt-1">{project.subtitle}</p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-6 flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-xs font-medium text-accent-foreground hover:bg-primary-hover transition-colors"
            >
              Live site
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-card transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WorkCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <Skeleton className="w-full mb-4" height={220} />
      <SkeletonText count={4} lastWidth="40%" />
    </div>
  );
}
