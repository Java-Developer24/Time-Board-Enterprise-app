import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started and exploring',
    features: [
      { text: 'Up to 3 projects', icon: Check },
      { text: 'Basic task management', icon: Check },
      { text: 'Personal dashboard', icon: Check },
      { text: 'Email support', icon: Check },
      { text: 'Mobile app access', icon: Check },
      { text: 'Basic time tracking', icon: Check }
    ],
    cta: 'Start Free',
    popular: false,
    gradient: 'from-gray-400 to-gray-600',
    icon: Star
  },
  {
    name: 'Pro',
    price: '$12',
    description: 'For growing teams and serious makers',
    features: [
      { text: 'Unlimited projects', icon: Crown },
      { text: 'Advanced analytics & insights', icon: Crown },
      { text: 'Team collaboration tools', icon: Crown },
      { text: 'Priority support', icon: Crown },
      { text: 'Custom integrations', icon: Crown },
      { text: 'Advanced time tracking', icon: Crown },
      { text: 'Export capabilities', icon: Crown },
      { text: 'Custom workflows', icon: Crown },
      { text: 'Team performance metrics', icon: Crown }
    ],
    cta: 'Try Free for 14 Days',
    popular: true,
    gradient: 'from-blue-600 to-purple-600',
    icon: Zap
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 4 }}
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
            <span className="text-sm font-medium text-green-600">💰 Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 text-balance">
            Simple, honest{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed text-balance">
            No hidden fees, no surprises. Start free, upgrade when you're ready to scale.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <motion.div
                key={index}
                className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </motion.div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-200/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="text-center mb-8">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${plan.gradient} rounded-xl mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PlanIcon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-3">
                      <span className="text-5xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== '$0' && <span className="text-gray-600 text-lg font-light">/month</span>}
                    </div>
                    <p className="text-gray-600 font-light text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                        >
                          <div className={`w-5 h-5 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center shadow-sm flex-shrink-0`}>
                            <FeatureIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 font-light text-sm">{feature.text}</span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <motion.button
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group text-sm ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/25'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-600 font-light">
            Questions about pricing?{' '}
            <a href="#" className="text-blue-600 hover:text-purple-600 font-medium transition-colors">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}