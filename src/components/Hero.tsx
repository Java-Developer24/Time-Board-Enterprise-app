import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
        {/* Particle System */}
        <div className="particles">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="particle animate-particle" />
          ))}
        </div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            x: [0, -30, 20, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl"
          animate={{ 
            x: [0, 20, -30, 0],
            y: [0, -30, 10, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ teams worldwide</span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your{' '}
            <motion.span 
              className="font-extrabold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              workflow
            </motion.span>
            ,{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              reimagined
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-light text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The minimalist productivity tool that remote teams, indie hackers, and startup founders 
            trust to stay focused and ship faster. Experience the future of work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 font-semibold overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button 
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center space-x-2 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 text-blue-600" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex items-center justify-center space-x-8 mb-16 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

          {/* Product Preview */}
          <motion.div 
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <motion.div 
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Enhanced UI Mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      Today's Focus
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500 font-medium">3 of 7 complete</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div 
                      className="group flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50 hover:shadow-md transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-900 font-medium flex-1 text-sm">Review user feedback</span>
                      <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">High Priority</div>
                    </motion.div>
                    <motion.div 
                      className="group flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-gray-600 font-medium flex-1 text-sm">Update product roadmap</span>
                      <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">Medium</div>
                    </motion.div>
                    <motion.div 
                      className="group flex items-center space-x-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                      <span className="text-gray-600 font-medium flex-1 text-sm">Ship v2.1 features</span>
                      <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">This Week</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}