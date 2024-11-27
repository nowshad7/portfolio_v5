import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { AnimatedCard } from './shared/AnimatedCard';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    period: '2014 - 2016',
    location: 'Stanford, CA',
    achievements: [
      'Specialized in Distributed Systems and Machine Learning',
      'Published 2 papers in top-tier conferences',
      'Graduate Teaching Assistant for Advanced Algorithms'
    ],
    gradient: 'from-red-500 to-orange-500'
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'Massachusetts Institute of Technology',
    period: '2010 - 2014',
    location: 'Cambridge, MA',
    achievements: [
      'Graduated Summa Cum Laude with 3.95 GPA',
      'Led the University Robotics Team',
      'Received Outstanding Undergraduate Research Award'
    ],
    gradient: 'from-blue-500 to-purple-500'
  }
];

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <AnimatedCard key={edu.degree} delay={index * 0.1}>
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <GraduationCap className="w-6 h-6 text-orange-400" />
                        <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                      </div>
                      <div className="text-xl text-orange-400 mb-2">{edu.school}</div>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 mr-2 text-orange-400 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
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