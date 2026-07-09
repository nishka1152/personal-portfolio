import { motion, useReducedMotion } from "motion/react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { SKILLS } from "@/lib/data";

const Skills = () => {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title="Skills" />

        <div className="space-y-12">
          {SKILLS.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.08}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-5">
                {group.group}
              </h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ visible: { transition: reduced ? {} : { staggerChildren: 0.04 } } }}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: reduced ? {} : { opacity: 0, y: 10, scale: 0.95 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    className="rounded-full border border-line bg-surface px-5 py-2.5 text-muted cursor-default transition-all duration-300 hover:text-foreground hover:border-accent/50 hover:shadow-[0_0_25px_-6px_oklch(0.78_0.075_292_/_45%)]"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
