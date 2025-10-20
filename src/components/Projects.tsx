import React from "react";
import { HoverEffect } from "../components/ui/hover-effect"; // adjust path based on where you saved it

const HoverEffectDemo = () => {
  const projects = [
    {
      id: 1,
      title: "Resumatch",
      description:
        "A web app that semantically matches resumes to job descriptions using NLP and machine learning. It also includes keyword intent matching with SentenceTransformers and resume parsing with PyMuPDF.",
      technologies: [
        "Python (Flask)",
        "NLTK",
        "SentenceTransformers",
        "WordNet",
        "PyMuPDF",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      id: 2,
      title: "Mazdoor Sahay",
      description:
        "A multilingual platform that connects migrant workers with nearby job opportunities across India. It features an AI-powered recommendation system that suggests relevant job categories based on skills and location for a more accessible experience.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Python (scikit-learn)+Flask",
        "Google Sheets API",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Projects
        </h2>

        {/* Hover Effect Cards */}
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
        </div>
        
      </div>
    </section>
  );
};

export default HoverEffectDemo;
