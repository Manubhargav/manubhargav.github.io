"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PROJECTS } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";
import { Reveal } from "@/components/ui/reveal";

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="work"
      className="px-6 py-24 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground">Work</h2>
        </motion.div>

        {/* Framer use-cases style: overlapping stacked cards with depth */}
        <div className="-space-y-10">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 80, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.7,
                delay: Math.min(i * 0.08, 0.3),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
              style={{
                marginTop: i === 0 ? 0 : -44,
                marginBottom: i === PROJECTS.length - 1 ? 44 : 0,
              }}
            >
              <div className="rounded-2xl border border-border bg-background p-6 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/5 shrink-0">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card">
                      <ProjectImage
                        src={project.shots[0].src}
                        alt={project.shots[0].caption}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-primary mt-1">{project.subtitle}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground hover:bg-primary hover:text-accent-foreground hover:border-primary transition-all duration-300"
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
                        className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-accent-foreground hover:bg-primary-hover hover:scale-[1.03] transition-all duration-300"
                      >
                        Live site
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-card hover:scale-[1.03] transition-all duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {project.shots.length > 1 && (
                  <div className="mt-8 border-t border-border pt-6 grid gap-6 md:grid-cols-2">
                    {project.shots.slice(1).map((shot, j) => (
                      <Reveal key={shot.src} y={24} delay={j * 0.1}>
                        <figure>
                          <ProjectImage
                            src={shot.src}
                            alt={shot.caption}
                            className="aspect-[16/10] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500"
                          />
                          <figcaption className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                            <span className="text-primary/70">{shot.caption}</span>
                          </figcaption>
                        </figure>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
