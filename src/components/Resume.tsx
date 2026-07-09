import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { LINKS } from "@/lib/data";

const Resume = () => (
  <section id="resume" className="py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-14 md:px-16 md:py-20 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(40rem 20rem at 50% 120%, oklch(0.32 0.06 292 / 25%), transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="font-mono text-sm text-accent mb-4">Recruiters — start here</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Everything on <span className="italic">one page.</span>
            </h2>
            <p className="text-muted mt-4 max-w-md mx-auto">
              The full picture — experience, projects, and skills — in a single PDF.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Resume <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href={LINKS.resume}
                download="Nishka-Jain-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors"
              >
                <Download size={15} aria-hidden="true" /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Resume;
