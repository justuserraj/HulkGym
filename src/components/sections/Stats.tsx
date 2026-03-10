"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "759+", label: "Success Stories" },
  { value: "74", label: "Professional Trainer" },
  { value: "7.8K+", label: "Happy Member" },
  { value: "17+", label: "Years Experience" }
];

const Stats = () => {
  return (
    <section className="py-16 bg-[#111111] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="block font-heading text-4xl md:text-6xl font-bold text-[#FF6A00] mb-2">
                {stat.value}
              </span>
              <span className="block text-[#B3B3B3] uppercase tracking-widest text-xs font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;