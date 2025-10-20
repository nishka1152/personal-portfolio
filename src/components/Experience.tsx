import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers. Implemented microservices architecture and improved system performance by 40%.',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Started my professional journey building web applications and learning modern development practices.',
    },
  ];



  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Experience
            </h2>
          </div>

          <div className="space-y-12">
            {/* Work Experience */}
            <div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="bg-gray-50 rounded-lg p-6 border">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-1">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 font-medium mb-2">
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>
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

export default Experience;
