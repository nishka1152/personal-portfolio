"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { SparklesCore } from "../components/ui/sparkles";

const description = `Hello, there! I am Nishka Jain. I am a second-year majoring in Computer Science at UC Irvine! Scroll on to learn more about me.`;



const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-12 z-10">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Nishka Jain
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full z-10"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>



        {/* Description */}
        <div className="max-w-prose mx-auto text-center mt-6 px-4">
          <TextGenerateEffect words={description} />;
        </div>

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
  );
};

export default Hero;
