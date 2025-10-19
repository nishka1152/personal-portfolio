import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know me better and discover what drives my passion for technology and design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Info */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  NJ
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={32} />
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <User size={20} />
                  <span>Full Stack Developer & Designer</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={20} />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={20} />
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Passionate Developer & Designer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a creative and detail-oriented developer with a passion for building 
                  exceptional digital experiences. With expertise in both frontend and backend 
                  technologies, I love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community. 
                  I believe in continuous learning and staying up-to-date with the latest trends 
                  in web development.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
