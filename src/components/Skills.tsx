import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
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
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-50 rounded-lg p-6 border"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                          className="bg-gray-900 h-1 rounded-full transition-all duration-1000 ease-out"
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
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-lg p-6 border max-w-3xl mx-auto">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Always Learning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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
