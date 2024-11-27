import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedCard } from './shared/AnimatedCard';
import { 
  Code2, Database, Cloud, Cpu, 
  Network, Lock, Brain, Terminal,
  Server, Git, Monitor, Settings
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Technologies',
    skills: [
      {
        category: 'Backend Development',
        icon: Server,
        items: ['Java/Spring Boot', 'Node.js/Express', 'Python/Django', 'Go'],
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        category: 'System Design',
        icon: Network,
        items: ['Distributed Systems', 'High Availability', 'Scalability Patterns', 'System Architecture'],
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        category: 'Data Engineering',
        icon: Database,
        items: ['Data Pipelines', 'Stream Processing', 'Data Warehousing', 'ETL'],
        gradient: 'from-orange-500 to-red-500'
      },
      {
        category: 'Cloud Native',
        icon: Cloud,
        items: ['AWS Solutions', 'Kubernetes', 'Microservices', 'Serverless'],
        gradient: 'from-green-500 to-teal-500'
      }
    ]
  },
  {
    title: 'Specialized Skills',
    skills: [
      {
        category: 'Security & DevOps',
        icon: Lock,
        items: ['OAuth/OIDC', 'CI/CD Pipelines', 'Infrastructure as Code', 'Security Best Practices'],
        gradient: 'from-yellow-500 to-orange-500'
      },
      {
        category: 'Performance',
        icon: Monitor,
        items: ['Load Testing', 'Profiling', 'Optimization', 'Monitoring'],
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        category: 'AI & ML Integration',
        icon: Brain,
        items: ['ML Pipelines', 'Model Deployment', 'Feature Engineering', 'AI Services'],
        gradient: 'from-violet-500 to-purple-500'
      },
      {
        category: 'Development Tools',
        icon: Settings,
        items: ['Git/GitHub', 'Docker', 'Terraform', 'Prometheus/Grafana'],
        gradient: 'from-indigo-500 to-blue-500'
      }
    ]
  }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in building scalable, resilient backend systems with a focus on 
            performance, security, and maintainability.
          </p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-20 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="text-2xl font-semibold text-white mb-8 text-center"
            >
              {category.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <AnimatedCard key={skill.category} delay={index * 0.1}>
                    <div className="relative group h-full">
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                      <div className="relative h-full bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-2 rounded-lg bg-gray-700/50`}>
                            <Icon className="w-5 h-5 text-gray-300" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                        </div>
                        <ul className="space-y-2">
                          {skill.items.map((item) => (
                            <li key={item} className="text-gray-400 group-hover:text-white transition-colors flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};