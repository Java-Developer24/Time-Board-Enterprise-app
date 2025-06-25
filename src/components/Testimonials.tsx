import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'DevFlow',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'Finally, a productivity tool that gets out of my way. Timeboard helped us ship 40% faster by keeping our team focused on what matters.',
    rating: 5,
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Remote Team Lead',
    company: 'TechCorp',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'We tried every tool out there. Timeboard is the first one that actually improved our workflow instead of complicating it.',
    rating: 5,
    gradient: 'from-green-400 to-blue-500'
  },
  {
    name: 'Emily Johnson',
    role: 'Indie Hacker',
    company: 'Solo Ventures',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    content: 'As a solo founder, I need tools that work instantly. Timeboard is beautifully simple and incredibly powerful.',
    rating: 5,
    gradient: 'from-purple-400 to-pink-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ 
          scale: [1, 0.8, 1],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-yellow-600">⭐ Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 text-balance">
            Loved by makers{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            Join thousands of teams who've already transformed their workflow and achieved remarkable results.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
              
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 font-light">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur opacity-75`}></div>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                  </div>
                  <div>
                    <div className="font-display font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-light">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}