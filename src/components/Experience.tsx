import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { AnimatedCard } from './shared/AnimatedCard';

const experiences = [
  {
    company: 'Tech Giant Corp',
    position: 'Senior Backend Engineer',
    period: '2020 - Present',
    description: 'Leading the development of distributed systems and microservices architecture. Improved system performance by 40% and reduced operational costs by 25%.',
    achievements: ['Led team of 8 engineers', 'Reduced latency by 60%', 'Implemented zero-downtime deployments']
  },
  {
    company: 'Scale-up Startup',
    position: 'Backend Engineer',
    period: '2018 - 2020',
    description: 'Designed and implemented scalable APIs serving 1M+ daily active users. Led the migration from monolith to microservices architecture.',
    achievements: ['Scaled to 1M+ users', 'Reduced deployment time by 70%', 'Mentored 4 junior developers']
  },
  {
    company: 'Innovation Labs',
    position: 'Software Engineer',
    period: '2016 - 2018',
    description: 'Developed and maintained backend services for multiple client projects. Implemented CI/CD pipelines and automated deployment processes.',
    achievements: ['Automated 90% of deployments', 'Improved test coverage to 95%', 'Reduced bug reports by 50%']
  }
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.company} delay={index * 0.1}>
              <div className="relative mb-12 last:mb-0">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
                
                <div className="pl-8">
                  <div className="absolute left-0 top-0 -translate-x-1/2 bg-gray-900 p-2 rounded-full border border-blue-500">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                  </div>

                  <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{exp.position}</h3>
                        <div className="text-blue-400 text-lg mb-1">{exp.company}</div>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{exp.description}</p>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-gray-300">
                          <Award className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};