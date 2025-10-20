import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { WavyBackground } from "../components/ui/wavy-background.tsx";



const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <WavyBackground className="max-w-4xl mx-auto pb-40">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl font-mono font-large text-white drop-shadow-lg">
          Nishka Jain
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white mb-8 drop-shadow-md">
          Back-End Developer
        </p>

        {/* Description */}
        <p className="text-white mb-12 max-w-2xl mx-auto leading-relaxed">
          Hello, there! I am Nishka Jain. I am a second-year majoring in Computer Science at UC Irvine! Scroll on to learn more about me.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Github size={40} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Linkedin size={40} />
          </a>
          <a
            href="mailto:nishkajain15@gmail.com"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Mail size={40} />
          </a>
        </div>
      </div>
    </div>
  </WavyBackground>
  );
};

export default Hero;
