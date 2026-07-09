import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "@/lib/data";
import { EASE } from "@/components/ui/reveal";

const ctas = [
  { label: "GitHub", href: LINKS.github, icon: Github },
  { label: "LinkedIn", href: LINKS.linkedin, icon: Linkedin },
  { label: "Email", href: LINKS.email, icon: Mail },
];

const Hero = () => {
  const reduced = useReducedMotion();

  const item = {
    hidden: reduced ? {} : { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section id="top" className="relative min-h-svh flex flex-col justify-center overflow-hidden">
      {/* Soft ambient glow — the only decorative background element */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60rem 40rem at 70% 20%, oklch(0.32 0.06 292 / 22%), transparent 65%), radial-gradient(45rem 30rem at 15% 85%, oklch(0.3 0.05 260 / 16%), transparent 60%)",
        }}
      />

      <motion.div
        className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: reduced ? {} : { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
        <div>
        <motion.p
          variants={item}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-mono text-sm text-accent mb-6"
        >
          UC Irvine · Computer Science · Class of 2028
        </motion.p>

        <motion.h1
          variants={item}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-foreground"
        >
          Nishka
          <br />
          <span className="italic text-accent">Jain</span>
        </motion.h1>

        <motion.p
          variants={item}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-8 max-w-xl text-lg md:text-xl text-muted leading-relaxed"
        >
          Full-stack engineer <span className="text-foreground">×</span> AI/ML researcher — I ship
          products end to end and study how language models mirror human decision-making.
        </motion.p>

        <motion.div
          variants={item}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <FileText size={16} aria-hidden="true" /> View Resume
          </a>
          {ctas.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-muted hover:text-foreground hover:border-accent/40 transition-colors"
            >
              <Icon size={16} aria-hidden="true" /> {label}
              <ArrowUpRight size={13} className="opacity-50" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
        </div>

        {/* Portrait — replace public/portrait.svg with a real photo (or point src at /me.jpg) */}
        <motion.figure
          variants={item}
          transition={{ duration: 0.9, ease: EASE }}
          className="hidden lg:block"
        >
          <div className="relative w-[300px] xl:w-[340px] rotate-2 hover:rotate-0 transition-transform duration-500">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-accent-soft blur-2xl"
            />
            <img
              src="/me.svg"
              alt="Portrait of Nishka Jain"
              width={340}
              height={425}
              className="relative rounded-3xl border border-line object-cover aspect-[4/5] w-full"
            />
          </div>
        </motion.figure>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint hover:text-accent transition-colors"
      >
        <motion.span
          className="block"
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
