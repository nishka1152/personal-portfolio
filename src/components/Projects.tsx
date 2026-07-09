"use client";
import { motion } from "motion/react";
import { HoverEffect } from "../components/ui/hover-effect";
import { SectionTitle } from "../components/ui/section-reveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Prompt Evaluation Platform — DAPLab",
      description:
        "A full-stack platform for evaluating LLM prompts at scale, built for research at UC Irvine's Design and Partnership Lab. Features automated LLM testing pipelines and Ollama-powered models that extract soft skills from student reflections, taken from research prototype to deployment.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma ORM",
        "Ollama",
        "LLM Pipelines",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      title: "ResuMatch",
      description:
        "A full-stack web app built in under 36 hours at VenusHacks 2025 that semantically matches resumes to job descriptions using NLP and machine learning — keyword intent matching with SentenceTransformers, resume parsing with PyMuPDF, and classification models trained on limited labeled data.",
      technologies: [
        "Python (Flask)",
        "NLTK",
        "SentenceTransformers",
        "WordNet",
        "PyMuPDF",
        "HTML/CSS",
        "JavaScript",
      ],
    },
    {
      id: 3,
      title: "Mazdoor Sahay",
      description:
        "A multilingual platform connecting migrant workers to job opportunities across India, with an accessible UI managing dynamic job listings and external data integrations. Built and maintained over two years to address a real community need.",
      technologies: [
        "Wix CMS",
        "Velo by Wix",
        "Content Manager",
        "Google Sheets",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-5xl mx-auto px-2 md:px-8"
        >
          <HoverEffect items={projects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
