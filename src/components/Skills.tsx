import React from 'react';
import { Code, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'SASS/SCSS', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Sketch', level: 75 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 70 },
        { name: 'Design Systems', level: 80 },
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 65 },
        { name: 'PWA', level: 85 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Zap size={24} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'CI/CD', level: 75 },
        { name: 'Testing', level: 80 },
      ],
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Webpack', level: 75 },
        { name: 'GraphQL', level: 70 },
        { name: 'WebSockets', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Always Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of web development. Currently 
                diving deep into AI/ML integration, Web3 technologies, and advanced performance optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
