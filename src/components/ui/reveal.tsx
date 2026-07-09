import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered fade + rise. Respects prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function staggerContainer(reduced: boolean | null): Variants {
  return {
    hidden: {},
    visible: { transition: reduced ? {} : { staggerChildren: 0.08 } },
  };
}

/** Numbered section heading, e.g. "01 / About" */
export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 mb-12 md:mb-16">
        <span className="font-mono text-sm text-accent" aria-hidden="true">
          {index}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">{title}</h2>
        <div className="hidden sm:block flex-1 h-px bg-line self-center ml-4" />
      </div>
    </Reveal>
  );
}
