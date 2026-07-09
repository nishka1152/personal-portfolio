import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/data";
import { EASE } from "@/components/ui/reveal";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el && el.getBoundingClientRect().top <= 140) current = item.href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={reduced ? false : { y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 inset-x-0 h-px origin-left bg-accent/60"
        aria-hidden="true"
      />

      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between" aria-label="Main">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
          }}
          className="font-serif italic text-2xl text-foreground"
          aria-label="Back to top"
        >
          nj<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-3.5 py-2 text-sm transition-colors ${
                active === item.href ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-surface-raised"
                  transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </button>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1 rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent hover:bg-accent-soft transition-colors"
          >
            Resume <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-line"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2.5 text-muted hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-accent/40 px-4 py-2 text-sm text-accent"
              >
                Resume <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
