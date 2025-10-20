import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Resumatch',
      description: 'A web app that semantically matches resumes to job descriptions using NLP and machine learning. \
      It also includes keyword intent matching with SentenceTransformers and resume parsing with PyMuPDF.',
      technologies: ['Python (Flask)', 'NLTK', 'SentenceTransformers', 'WordNet', 'PyMuPDF', 'HTML', 'CSS', 'Javascript'],
    },
    {
      id: 2,
      title: 'Mazdoor Sahay',
      description: 'A multilingual platform that connects migrant workers with nearby job opportunities across India.\
      It features an AI-powered recommendation system that suggests relevant job categories based on skills of \
      users and location for a more accessible and personalized experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Python (scikit-learn)+Flask', 'Google Sheets API'],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg p-6 border hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;