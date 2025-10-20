import { ExperienceItem } from './ui/glowing-effect-experience';

const GlowingEffectDemo = () => {
  const experiences = [
    {
      id: 1,
      title: 'Web Development Research Assistant',
      company: 'Design and Partnership Lab (Daplab), UC Irvine',
      period: 'September 2025 -- Present',
      description: 'Will be working as a part of the dev team of the Whole Child Analytics Project (WCAP)',
    },
    {
      id: 2,
      title: 'Head Coordinator – Delhi-Based Education NGO',
      company: 'IDIYA Non-Profit Organisation',
      period: 'January 2021 -- July 2021',
      description: 'As the head of a Delhi-based NGO called Shubhakshika, I led remote education support for 150+ underserved students during COVID-19 by coordinating learning schedules and digital resources. I also managed centralized data systems and communication for 70+ teachers and volunteers across multiple schools',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-black dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Experience
            </h2>

          </div>

          {/* Experience Cards - Single Column */}
          <ul className="grid grid-cols-1 gap-6">
            {experiences.map((exp) => (
              <ExperienceItem
                key={exp.id}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GlowingEffectDemo;