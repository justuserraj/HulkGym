"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Zap } from 'lucide-react';

const features = [
  {
    title: "Join Membership Now!",
    description: "Get 50% OFF for your first month of training.",
    icon: <Zap className="w-8 h-8 text-white" />,
    highlight: "Get 50% OFF"
  },
  {
    title: "Certified Trainer",
    description: "Professional expert trainers to guide your journey.",
    icon: <Users className="w-8 h-8 text-white" />,
    highlight: "Professional expert"
  },
  {
    title: "Quality Equipment",
    description: "Modern machines for effective and safe workouts.",
    icon: <Award className="w-8 h-8 text-white" />,
    highlight: "Modern machines"
  }
];

const Features = () => {
  return (
    <section className="relative z-20 -mt-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#1B1B1B] p-8 border border-[#2A2A2A] hover:border-[#FF6A00] transition-all duration-300 group"
          >
            <div className="bg-[#FF6A00] w-14 h-14 flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-2">{feature.title}</h3>
            <p className="text-[#B3B3B3] font-body leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;