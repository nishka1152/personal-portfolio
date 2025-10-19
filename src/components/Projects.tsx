import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, inventory management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express', 'Vuetify'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Biometric Auth', 'Push Notifications'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing capabilities.',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'AWS'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and projects that demonstrate my skills and passion for development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg p-6 border hover:border-gray-300 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Project Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    
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

                  {/* Action Buttons */}
                  <div className="flex gap-2 md:flex-col">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium hover:border-gray-400 transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <button className="bg-gray-900 text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
