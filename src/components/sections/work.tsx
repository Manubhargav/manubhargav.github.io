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

        {/* Framer-style: sections overlap slightly for depth */}
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
                marginTop: i === 0 ? 0 : -40,
                marginBottom: i === PROJECTS.length - 1 ? 40 : 0,
              }}
            >
              <Reveal y={0} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-background p-6 shadow-xl">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-2/5 shrink-0">
                      <ProjectImage
                        src={project.shots[0].src}
                        alt={project.shots[0].caption}
                        className="aspect-[4/3]"
                      />
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
                            className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
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
                          className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-accent-foreground hover:bg-primary-hover transition-colors"
                        >
                          Live site
                        </a>
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground hover:bg-card transition-colors"
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
                              className="aspect-[16/10]"
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
              </Reveal>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
