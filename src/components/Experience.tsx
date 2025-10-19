import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications and mentoring junior developers. Implemented microservices architecture and improved system performance by 40%.',
      achievements: [
        'Led a team of 5 developers in building a customer management platform',
        'Reduced application load time by 40% through performance optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      current: true,
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Mumbai, India',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Built 15+ responsive web applications using React and Vue.js',
        'Improved user engagement by 25% through UI/UX enhancements',
        'Collaborated with design team to implement design systems',
        'Reduced bundle size by 30% through code optimization'
      ],
      technologies: ['React', 'Vue.js', 'TypeScript', 'SASS', 'Webpack', 'Jest'],
      current: false,
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      location: 'Bangalore, India',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started my professional journey building web applications and learning modern development practices.',
      achievements: [
        'Developed 10+ web applications from concept to deployment',
        'Learned modern JavaScript frameworks and best practices',
        'Contributed to open-source projects and gained industry experience',
        'Participated in agile development processes'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Node.js', 'MongoDB'],
      current: false,
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Delhi, India',
      period: '2016 - 2020',
      gpa: '8.5/10',
      description: 'Specialized in software engineering, data structures, and algorithms. Active member of coding clubs and hackathons.',
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-CSA-001',
    },
    {
      id: 2,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credential: 'META-REACT-001',
    },
    {
      id: 3,
      name: 'Google UX Design Certificate',
      issuer: 'Google',
      date: '2021',
      credential: 'GOOGLE-UX-001',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey, education, and continuous learning in the world of technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Work Experience */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Work Experience</h3>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative pl-8 pb-8 ${
                      index !== experiences.length - 1 ? 'border-l-2 border-gray-200' : ''
                    }`}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-1">
                            {exp.title}
                          </h4>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                            {exp.company}
                            {exp.current && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.type}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl text-white">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Education</h3>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-blue-600 font-semibold mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-3">
                        GPA: {edu.gpa}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="bg-white rounded-xl p-4 shadow-lg">
                      <h4 className="font-bold text-gray-800 mb-1">
                        {cert.name}
                      </h4>
                      <div className="text-blue-600 text-sm font-semibold mb-1">
                        {cert.issuer}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{cert.date}</span>
                        <span className="flex items-center gap-1">
                          {cert.credential}
                          <ExternalLink size={12} />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
