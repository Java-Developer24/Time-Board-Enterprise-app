import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const comparisons = [
  {
    problem: 'Complex tools with steep learning curves that waste weeks of onboarding',
    solution: 'Intuitive design that feels natural from day one - start being productive immediately'
  },
  {
    problem: 'Feature bloat that slows you down with unnecessary complexity and confusion',
    solution: 'Carefully curated features that solve real problems without overwhelming your workflow'
  },
  {
    problem: 'Poor team collaboration that leads to miscommunication and missed deadlines',
    solution: 'Built-in sync that keeps remote teams perfectly aligned and moving forward together'
  },
  {
    problem: 'Expensive plans with hidden costs that drain your budget unexpectedly',
    solution: 'Transparent pricing with generous free tier - know exactly what you pay for'
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WhySwitch() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ scale: [1, 0.8, 1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
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
            <span className="text-sm font-medium text-purple-600">🚀 Why Switch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 text-balance">
            Why teams are{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              making the switch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            Stop fighting with your tools. Start shipping with confidence and clarity.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">Other tools</h3>
                <p className="text-gray-600 font-light">The problems you're probably facing right now</p>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="group flex items-start space-x-4 p-5 bg-red-50/50 rounded-xl border border-red-100/50 hover:bg-red-50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-red-200 transition-colors flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-light text-sm">{item.problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  Timeboard
                </h3>
                <p className="text-gray-600 font-light">How we solve these problems elegantly</p>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="group flex items-start space-x-4 p-5 bg-gradient-to-r from-green-50/50 to-blue-50/50 rounded-xl border border-green-100/50 hover:from-green-50 hover:to-blue-50 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mt-1 shadow-sm flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-900 leading-relaxed font-medium text-sm">{item.solution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Experience the difference</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}