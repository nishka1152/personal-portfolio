import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { PROJECTS } from "@/lib/data";

const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading index="03" title="Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className="group h-full rounded-2xl border border-line bg-surface p-7 md:p-9 flex flex-col transition-colors duration-300 hover:border-accent/40">
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
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
