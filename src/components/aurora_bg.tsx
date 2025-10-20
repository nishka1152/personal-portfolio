import React from 'react';
import { AuroraBackground } from "../components/ui/aurora-background.tsx";
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';


const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">

          {/* Main Heading */}
          <h1 className="text-4xl font-mono font-large">
            Nishka Jain
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8">
            Back-End Developer
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Hello, there! I am Nishka Jain. I am a second-year majoring in Computer Science at UC Irvine! Scroll on to learn more about me.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Github size={40} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Linkedin size={40} />
            </a>
            <a
              href="mailto:nishkajain15@gmail.com"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mail size={40} />
            </a>
          </div>
        </div>
      </div>
      </motion.div>
      </AuroraBackground>
  );
};

export default Hero;
