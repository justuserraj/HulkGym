"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const benefits = [
    "Certified Trainers",
    "CrossFit Programs",
    "Modern Equipment",
    "Dance Fitness"
  ];

  return (
    <section className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            WHO WE ARE
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
            Building fitness is building your <span className="text-[#FF6A00]">body and confidence</span>
          </h2>
          <p className="text-[#B3B3B3] text-lg mb-8 leading-relaxed font-body">
            At Hulk Gym, we believe that fitness is more than just lifting weights. It's about discipline, 
            mental strength, and becoming the best version of yourself. Our state-of-the-art facility 
            in Begusarai provides the perfect environment for your transformation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#FF6A00] w-6 h-6" />
                <span className="font-bold uppercase text-sm tracking-wide">{benefit}</span>
              </div>
            ))}
          </div>

          <Button asChild className="bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider px-10 py-7 rounded-sm shadow-lg transition-all hover:scale-105">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Training" 
                className="rounded-lg w-full h-64 object-cover border-2 border-[#2A2A2A] shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Equipment" 
                className="rounded-lg w-full h-80 object-cover border-2 border-[#2A2A2A] shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                alt="Athlete" 
                className="rounded-lg w-full h-80 object-cover border-2 border-[#2A2A2A] shadow-xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop" 
                alt="Trainer" 
                className="rounded-lg w-full h-64 object-cover border-2 border-[#2A2A2A] shadow-xl"
              />
            </div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF6A00] p-6 rounded-sm text-center shadow-2xl border-4 border-[#0E0E0E]">
            <span className="block text-4xl font-heading font-bold">10+</span>
            <span className="block text-xs font-bold uppercase tracking-tighter">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;