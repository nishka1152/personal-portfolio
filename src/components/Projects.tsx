import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Palette, Smartphone } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, inventory management, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express', 'Vuetify'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Biometric Auth', 'Push Notifications'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'AWS'],
      category: 'backend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code size={16} />;
      case 'backend':
        return <Code size={16} />;
      case 'fullstack':
        return <Code size={16} />;
      case 'mobile':
        return <Smartphone size={16} />;
      default:
        return <Palette size={16} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work and projects that demonstrate my skills and passion for development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  project.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-80">
                    {project.title.charAt(0)}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-gray-500 capitalize">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
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
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium text-center hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
