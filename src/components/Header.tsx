import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code2, Database, Cloud } from 'lucide-react';
import { GlowEffect } from './shared/GlowEffect';

export const Header = () => {
  const iconVariants = {
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6, type: "spring" }
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center space-x-6 mb-8">
              <motion.div variants={iconVariants} whileHover="hover">
                <Code2 className="w-8 h-8 text-blue-400" />
              </motion.div>
              <motion.div variants={iconVariants} whileHover="hover">
                <Database className="w-8 h-8 text-purple-400" />
              </motion.div>
              <motion.div variants={iconVariants} whileHover="hover">
                <Cloud className="w-8 h-8 text-indigo-400" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              John Doe
            </motion.h1>
            
            <motion.h2 
              className="text-3xl text-gray-300 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Senior Backend Engineer
            </motion.h2>
            
            <motion.div
              className="relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <GlowEffect />
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed relative z-10">
                Architecting scalable solutions with a passion for distributed systems 
                and high-performance computing. Transforming complex challenges into 
                elegant, efficient solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:john@example.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900 px-6 py-3 rounded-lg border border-gray-700 flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{label}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};