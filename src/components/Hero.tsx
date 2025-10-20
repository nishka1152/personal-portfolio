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
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToNext} className="text-gray-300 hover:text-gray-500 transition-colors">
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
