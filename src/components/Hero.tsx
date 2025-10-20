import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-2xl font-medium">
            NJ
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-mono font-medium">
            Nishka Jain
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8">
            Full Stack Developer & UI/UX Designer
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create functional and user-centered digital experiences. 
            Passionate about clean code and turning ideas into reality.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nishkajain15@gmail.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      
      {/* Minimalist Arrow with Glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-110"
        >
          <ChevronDown size={20} className="text-gray-600 group-hover:text-gray-800 transition-colors" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
