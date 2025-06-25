import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Twitter, Github, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'API'],
  company: ['About', 'Blog', 'Careers', 'Contact', 'Press'],
  support: ['Help Center', 'Privacy Policy', 'Terms of Service', 'Status', 'Security']
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        animate={{ scale: [1, 0.8, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-display font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Timeboard
              </span>
            </div>
            <p className="text-gray-400 mb-6 font-light leading-relaxed text-sm">
              Built for indie makers, loved by teams. The minimalist productivity tool for focused teams who want to ship faster.
            </p>
            <div className="flex items-center space-x-3">
              {[Twitter, Github, Linkedin].map((Icon, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                  >
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors font-light text-sm hover:translate-x-1 inline-block transition-transform duration-200"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="border-t border-gray-700/50 mt-12 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 font-light">
              © 2025 Timeboard. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-400 font-light">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span className="text-gray-400 font-light">for productive teams</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}