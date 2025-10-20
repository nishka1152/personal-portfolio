import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Development Research Asssistant',
      company: 'Design and Partnership Lab (Daplab), UC Irvine',
      period: 'September 2025 -- Present',
      description: 'Will be working as a part of the dev team of the Whole Child Analytics Project (WCAP)',
    },
    {
      id: 2,
      title: 'Head Coordinator -– Delhi-Based Education NGO',
      company: 'IDIYA Non-Profit Organisation',
      period: 'January 2021 -– July 2021',
      description: 'As the head of a Delhi-based NGO called Shubhakshika, I led remote education support for 150+ underserved students\
      during COVID-19 by coordinating learning schedules and digital resources. I also managed centralized data systems and communication\
      for 70+ teachers and volunteers across multiple schools',
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
