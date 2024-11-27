import React from 'react';
import { motion } from 'framer-motion';

export const GlowEffect = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};