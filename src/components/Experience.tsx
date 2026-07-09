"use client";
import { motion } from "motion/react";
import { ExperienceItem } from './ui/glowing-effect-experience';
import { SectionTitle } from './ui/section-reveal';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Lab Coordinator & Software Lead',
      company: 'Design and Partnership Lab (DAPLab), UC Irvine',
      period: 'September 2025 – Present',
      description:
        'Software Engineering Undergraduate Research Assistant, promoted to Lab Coordinator and Software Lead after one year. I architect and drive all lab software engineering projects from research to deployment, serving as the primary technical point of contact for research-driven initiatives under Dr. June Ahn. Engineered a full-stack prompt evaluation platform using Next.js, TypeScript, and Prisma ORM with automated LLM testing pipelines and Ollama-powered models to extract soft skills from student reflections, coordinating across AI, web, and UX teams to align engineering execution with research goals.',
    },
    {
      id: 2,
      title: 'Undergraduate Research Assistant (Computational Team)',
      company: 'Computational Cognitive Neuroscience Lab, UC Irvine',
      period: 'March 2026 – Present',
      description:
        'Investigating how large language models perform on contextual bandit tasks derived from human cognitive experiments, evaluating cross-model behavioral differences and alignment with human decision-making using reinforcement learning frameworks. Analyzing LLM performance with reference to the Centaur model by reformatting psychological tasks into LLM-interpretable inputs to assess human cognitive simulation, and engaging with research on patch foraging theory and reward-based decision-making through weekly journal clubs under Dr. Aaron Bornstein.',
    },
    {
      id: 3,
      title: 'Tech Team Member',
      company: 'Google Developer Group on Campus at UCI',
      period: 'April 2026 – Present',
      description:
        'Developing full-stack student-facing applications from the ground up using React and Python, integrating Google technologies including Firebase and Gemini APIs. Facilitate hands-on technical workshops on modern web development and software engineering, and help organize the Google Solution Challenge to build impactful software solutions addressing real-world community problems.',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <SectionTitle>Experience</SectionTitle>
          </div>

          <ul className="grid grid-cols-1 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <ExperienceItem
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
