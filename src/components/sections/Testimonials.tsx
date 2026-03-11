"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Member for 1 Year",
    text: "Hulk Gym is the best place to train in Begusarai. The trainers are motivating and the gym environment is great. I've seen amazing results in my strength.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Priya Singh",
    role: "Fitness Enthusiast",
    text: "The dance fitness classes are so much fun! It's the perfect way to stay active and healthy. The facility is always clean and well-maintained.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Amit Sharma",
    role: "CrossFit Athlete",
    text: "The CrossFit equipment here is top-notch. The trainers really know their stuff and push you to your limits safely. Highly recommended for serious athletes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop"
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
              className="bg-[#1B1B1B] p-10 rounded-lg border border-[#2A2A2A] relative shadow-xl hover:border-[#FF6A00]/50 transition-all"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-[#FF6A00]/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF6A00] text-[#FF6A00]" />
                ))}
              </div>
              <p className="text-[#B3B3B3] italic mb-8 font-body leading-relaxed text-lg">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6A00]"
                />
                <div>
                  <h4 className="font-heading text-xl font-bold uppercase">{item.name}</h4>
                  <p className="text-[#7A7A7A] text-xs uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;