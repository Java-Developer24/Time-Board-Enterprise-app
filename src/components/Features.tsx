import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Target, BarChart3, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed. No bloat, no distractions.',
    details: 'Real-time sync across devices with military-grade encryption and instant updates.',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Users,
    title: 'Team Sync',
    description: 'Seamless collaboration for remote teams.',
    details: 'Stay aligned without endless meetings through smart notifications and shared workspaces.',
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Focus Mode',
    description: 'Eliminate noise. Highlight what matters.',
    details: 'AI-powered priority detection helps you focus on high-impact tasks that move the needle.',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Smart Insights',
    description: 'Understand your patterns. Optimize workflow.',
    details: 'Advanced analytics reveal productivity patterns and suggest optimizations for peak performance.',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Effortless time tracking without friction.',
    details: 'Automatic time detection with smart categorization and detailed reporting for better planning.',
    gradient: 'from-indigo-400 to-purple-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Ready',
    description: 'Bank-grade security. GDPR compliant.',
    details: 'End-to-end encryption, SOC 2 compliance, and enterprise SSO for complete peace of mind.',
    gradient: 'from-red-400 to-pink-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1]
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
            <span className="text-sm font-medium text-blue-600">✨ Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 text-balance">
            Everything you need,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              nothing you don't
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            Carefully crafted features that solve real problems. No feature bloat, just tools that work beautifully together.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 group-hover:border-white group-hover:bg-white">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-3 font-medium">
                    {feature.description}
                  </p>
                  
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {feature.details}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}