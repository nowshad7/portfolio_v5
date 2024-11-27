import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Youtube, BookOpen, ArrowRight, Eye, ThumbsUp, Clock } from 'lucide-react';
import { AnimatedCard } from './shared/AnimatedCard';

const youtube = [
  {
    title: 'Building Scalable Systems',
    description: 'Deep dive into designing and implementing highly scalable distributed systems',
    views: '250K',
    likes: '15K',
    duration: '45:20',
    thumbnail: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=400&h=225',
    link: 'https://youtube.com'
  },
  {
    title: 'Advanced Database Patterns',
    description: 'Exploring advanced database design patterns and optimization techniques',
    views: '180K',
    likes: '12K',
    duration: '38:15',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400&h=225',
    link: 'https://youtube.com'
  }
];

const blogs = [
  {
    title: 'Microservices at Scale',
    description: 'Lessons learned from scaling microservices architecture to handle millions of requests',
    date: 'Mar 15, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=225',
    link: 'https://medium.com'
  },
  {
    title: 'The Future of Backend Development',
    description: 'Exploring emerging trends and technologies shaping the future of backend development',
    date: 'Feb 28, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=400&h=225',
    link: 'https://medium.com'
  }
];

export const Content = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="container mx-auto px-4">
        {/* YouTube Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Youtube className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl font-bold text-white">YouTube Channel</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtube.map((video, index) => (
              <AnimatedCard key={video.title} delay={index * 0.1}>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-[225px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-lg flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">{video.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{video.description}</p>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{video.likes} likes</span>
                    </div>
                  </div>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <h2 className="text-4xl font-bold text-white">Technical Blog</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <AnimatedCard key={blog.title} delay={index * 0.1}>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-[225px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{blog.description}</p>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>{blog.date}</span>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};