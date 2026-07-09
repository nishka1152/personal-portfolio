import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { EXPERIENCE } from "@/lib/data";

const Experience = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading index="02" title="Experience" />

      <ol className="space-y-16 md:space-y-20">
        {EXPERIENCE.map((exp, i) => (
          <li key={exp.role}>
            <Reveal delay={i * 0.05}>
              <article className="grid md:grid-cols-4 gap-4 md:gap-10">
                <div className="md:col-span-1">
                  <p className="font-mono text-sm text-faint">{exp.period}</p>
                </div>
                <div className="md:col-span-3 md:border-l md:border-line md:pl-10 relative">
                  <span
                    className="hidden md:block absolute -left-[3.5px] top-2 h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground">{exp.role}</h3>
                  <p className="text-muted mt-1">{exp.org}</p>
                  <ul className="mt-5 space-y-3">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-muted leading-relaxed">
                        <span className="text-accent mt-[3px] select-none" aria-hidden="true">
                          —
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-faint border border-line rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
