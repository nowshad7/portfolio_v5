import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { GlowEffect } from './shared/GlowEffect';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <GlowEffect />
            <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-12 border border-gray-700">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-bold mb-4"
                >
                  Let's Build Something Amazing
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  Open to discussing new opportunities and exciting projects.
                  Let's connect and explore how we can work together.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    href: 'mailto:john@example.com',
                    gradient: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    href: 'https://linkedin.com',
                    gradient: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    href: 'https://github.com',
                    gradient: 'from-orange-500 to-red-500'
                  }
                ].map(({ icon: Icon, label, href, gradient }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                    <div className="relative bg-gray-800 p-6 rounded-xl border border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                          <span className="text-lg text-gray-400 group-hover:text-white transition-colors">
                            {label}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};