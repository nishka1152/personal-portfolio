import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know me better and discover what drives my passion for technology and design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Info */}
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="w-48 h-48 mx-auto rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 text-4xl font-medium">
                NJ
              </div>

              {/* Personal Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <User size={16} />
                  <span>Full Stack Developer & Designer</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={16} />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={16} />
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Passionate Developer & Designer
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
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
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded border">
                    <div className="text-2xl font-medium text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
