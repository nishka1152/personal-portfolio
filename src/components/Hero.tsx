"use client";
import { motion } from "motion/react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { SparklesCore } from "../components/ui/sparkles";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const description = `Hello, there! I'm Nishka — a Computer Science student at UC Irvine building at the intersection of software engineering, AI, and cognitive science.`;

const roles = [
  { text: "Software", className: "text-indigo-400" },
  { text: "Engineer", className: "text-indigo-400" },
  { text: "·" },
  { text: "AI" },
  { text: "Researcher" },
  { text: "·" },
  { text: "Full-Stack", className: "text-sky-400" },
  { text: "Developer", className: "text-sky-400" },
];

const socials = [
  { href: "https://github.com/nishka1152", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/nishkaj", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:nishkaj@uci.edu", icon: Mail, label: "Email" },
];

const Hero = () => {
  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative z-10 pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20"
      >
        Nishka Jain
      </motion.h1>

      <div className="w-full max-w-[40rem] h-32 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full z-10"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      {/* Roles typewriter */}
      <div className="text-center px-4 -mt-8">
        <TypewriterEffect
          words={roles}
          className="text-base md:text-2xl font-medium"
          cursorClassName="bg-indigo-500"
        />
      </div>

      {/* Description */}
      <div className="max-w-prose mx-auto text-center mt-8 px-6">
        <TextGenerateEffect words={description} />
      </div>

      {/* Social Links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } } }}
        className="flex justify-center space-x-6 mt-10"
      >
        {socials.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="text-white hover:text-indigo-400 transition-colors"
          >
            <Icon size={36} />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-16 mb-10 text-neutral-500 hover:text-white transition-colors"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Hero;
