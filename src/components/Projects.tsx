import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express', 'Vuetify'],
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Biometric Auth', 'Push Notifications'],
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing capabilities.',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'AWS'],
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