"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Member for 2 Years",
    text: "Joining MotiveMuscle changed my life. The trainers and environment keep me motivated every single day. The equipment is top-notch!",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Fitness Enthusiast",
    text: "The community here is incredible. I've never felt more supported in my fitness journey. The group classes are intense and fun!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Athlete",
    text: "As a professional athlete, I need the best facilities. MotiveMuscle provides everything I need to stay at the top of my game.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            What Our <span className="text-[#FF6A00]">Members</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1B1B1B] p-8 rounded-lg border border-[#2A2A2A] relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-[#FF6A00]/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF6A00] text-[#FF6A00]" />
                ))}
              </div>
              <p className="text-[#B3B3B3] italic mb-6 font-body leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-heading text-xl font-bold uppercase">{item.name}</h4>
                <p className="text-[#7A7A7A] text-xs uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;