"use client";
import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { Spotlight } from "../components/ui/spotlight-new";
import { SectionReveal, SectionTitle } from "../components/ui/section-reveal";

const skills = [
  "Python", "TypeScript", "JavaScript", "C++", "Java", "SQL", "R",
  "React", "Next.js", "Prisma ORM", "Tailwind CSS", "REST APIs",
  "Flask", "Firebase", "Gemini API", "Ollama", "Git",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      <Spotlight />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>About</SectionTitle>

          <SectionReveal delay={0.15}>
            <p className="font-inter text-neutral-300 text-center leading-relaxed mt-10 text-lg md:text-xl">
              I'm a Computer Science student at UC Irvine who has been passionate about
              coding since eighth grade. Today that curiosity drives everything I do —
              from architecting full-stack platforms as a Software Lead at a research lab,
              to investigating how large language models mirror human decision-making.
              I'm especially interested in machine learning and artificial intelligence
              and their application to understanding cognitive processes, and I'm currently
              looking for Summer 2027 software engineering internships.
            </p>
          </SectionReveal>

          {/* Education card */}
          <SectionReveal delay={0.25}>
            <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-neutral-700 p-2 bg-neutral-900">
                  <GraduationCap className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    University of California, Irvine
                  </h3>
                  <p className="text-neutral-300 mt-1">
                    B.S. in Computer Science · Sept 2024 – June 2028
                  </p>
                  <p className="text-neutral-400 mt-2 flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-sky-400" /> Cumulative GPA: 3.96
                  </p>
                  <p className="text-neutral-500 mt-3 text-sm leading-relaxed">
                    Coursework: Intro to AI, Machine Learning & Data Mining, Design &
                    Analysis of Algorithms, Data Structures & Algorithms, C/C++, Python,
                    Computer Organization, Discrete Mathematics, Probability & Statistics
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1, borderColor: "rgb(99 102 241)" }}
                className="px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/70 text-neutral-300 text-sm cursor-default transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
