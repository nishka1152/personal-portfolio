import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { PROJECTS } from "@/lib/data";

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" title="Projects" />

        <div className="grid md:grid-cols-2 gap-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <div
                className="relative group h-full p-2"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Sliding hover box shared between cards */}
                <AnimatePresence>
                  {hovered === i && !reduced && (
                    <motion.span
                      layoutId="project-hover"
                      className="absolute inset-0 rounded-[1.75rem] bg-accent-soft"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                      aria-hidden="true"
                    />
                  )}
                </AnimatePresence>

                <article
                  className="relative z-10 h-full rounded-2xl border border-line bg-surface p-7 md:p-9 flex flex-col transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_45px_-10px_oklch(0.78_0.075_292_/_35%)]"
                >
                  <p className="font-mono text-xs text-faint mb-5">{p.note}</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground">{p.title}</h3>
                  <p className="text-accent mt-2">{p.tagline}</p>
                  <p className="text-muted leading-relaxed mt-5 flex-1">{p.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-faint border border-line rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 pt-5 border-t border-line flex gap-5">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                      >
                        <Github size={15} aria-hidden="true" /> Code
                        <ArrowUpRight size={13} className="opacity-50" aria-hidden="true" />
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                      >
                        Live site
                        <ArrowUpRight size={13} className="opacity-50" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
