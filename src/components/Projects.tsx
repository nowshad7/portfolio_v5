import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { AnimatedCard } from './shared/AnimatedCard';

const projects = [
  {
    title: 'Distributed Task Scheduler',
    description: 'Built a highly available task scheduling system processing 1M+ jobs daily with Redis and Kubernetes',
    tech: ['Python', 'Redis', 'Kubernetes', 'gRPC'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Real-time Analytics Pipeline',
    description: 'Designed and implemented a real-time data processing pipeline handling 10TB+ daily with Apache Kafka',
    tech: ['Java', 'Kafka', 'Elasticsearch', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'API Gateway Service',
    description: 'Developed a high-performance API gateway with rate limiting and authentication for microservices',
    tech: ['Go', 'Docker', 'Redis', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'from-orange-500 to-red-500'
  }
];

export const Projects = () => {
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
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.1}>
              <div className="relative group h-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                <div className="relative h-full bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-700 bg-gray-800/50">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5 mr-1" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 mr-1" />
                          Demo
                        </a>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gray-400 group-hover:text-white transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
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