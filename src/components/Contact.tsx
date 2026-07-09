import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { LINKS } from "@/lib/data";

const links = [
  { label: LINKS.emailPlain, href: LINKS.email },
  { label: "GitHub", href: LINKS.github },
  { label: "LinkedIn", href: LINKS.linkedin },
  { label: "Resume", href: LINKS.resume },
];

const Contact = () => (
  <>
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" title="Contact" />
        <Reveal delay={0.1}>
          <p className="font-serif text-3xl md:text-5xl text-foreground max-w-3xl leading-tight">
            Building something interesting?{" "}
            <span className="italic text-accent">Let's talk.</span>
          </p>
          <p className="text-muted mt-6 max-w-lg text-lg">
            I'm open to Summer 2027 software engineering internships — backend, frontend, or
            full-stack. The fastest way to reach me is email.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1 text-foreground pb-0.5"
              >
                {label}
                <ArrowUpRight size={14} className="text-faint" aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-serif italic text-lg text-muted">
          nj<span className="text-accent">.</span>
        </p>
        <p className="text-faint text-sm">
          © {new Date().getFullYear()} Nishka Jain · Designed & built with React + TypeScript
        </p>
      </div>
    </footer>
  </>
);

export default Contact;
