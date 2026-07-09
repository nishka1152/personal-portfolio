import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading index="01" title="About" />

      <div className="grid md:grid-cols-5 gap-10 md:gap-16">
        <Reveal delay={0.1} className="md:col-span-3">
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            I've been writing code since eighth grade, and the curiosity never wore off. Today it
            splits into two threads I refuse to choose between:{" "}
            <span className="text-foreground">building products</span> — architecting full-stack
            platforms as a software lead at a research lab — and{" "}
            <span className="text-foreground">doing research</span> — investigating how large
            language models mirror human decision-making.
          </p>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">
            I like the space where those threads cross: tools that make research move faster, and
            research that makes tools smarter. I'm currently looking for{" "}
            <span className="text-accent">Summer 2027 software engineering internships</span>{" "}
            across backend, frontend, and full-stack.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-2">
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-7">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-medium text-foreground">Education</h3>
            </div>
            <p className="text-foreground">University of California, Irvine</p>
            <p className="text-muted text-sm mt-1">B.S. Computer Science · 2024 — 2028</p>
            <div className="mt-4 pt-4 border-t border-line flex items-baseline gap-2">
              <span className="font-serif text-3xl text-accent">3.96</span>
              <span className="font-mono text-xs text-faint uppercase tracking-wider">GPA</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
