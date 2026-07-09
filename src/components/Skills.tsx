import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { SKILLS } from "@/lib/data";

const Skills = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading index="04" title="Skills" />

      <div className="max-w-3xl space-y-0">
        {SKILLS.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.08}>
            <div className="grid sm:grid-cols-3 gap-2 sm:gap-8 py-7 border-b border-line first:border-t">
              <h3 className="font-mono text-xs uppercase tracking-widest text-faint pt-1">
                {group.group}
              </h3>
              <p className="sm:col-span-2 text-lg text-muted leading-relaxed">
                {group.items.map((item, j) => (
                  <span key={item}>
                    <span className="hover:text-accent transition-colors cursor-default">
                      {item}
                    </span>
                    {j < group.items.length - 1 && (
                      <span className="text-line mx-2.5" aria-hidden="true">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
