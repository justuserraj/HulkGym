"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const trainers = [
  {
    name: "Alex Rivers",
    role: "Strength Coach",
    bio: "Specializing in powerlifting and hypertrophy with over 10 years of competitive experience.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "CrossFit Trainer",
    bio: "Expert in high-intensity functional training, helping members reach peak performance.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "Fitness Instructor",
    bio: "Focusing on functional movement and overall health to ensure long-term athletic longevity.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            EXPERT COACHES
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Meet Our <span className="text-[#FF6A00]">Professional</span> Team
          </h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto font-body">
            Our certified trainers are here to guide, motivate, and push you towards your fitness goals with personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#1B1B1B] rounded-lg overflow-hidden border border-[#2A2A2A] hover:border-[#FF6A00] transition-all shadow-xl"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-[#FF6A00] p-3 rounded-full hover:bg-white hover:text-[#FF6A00] transition-colors shadow-lg"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="bg-[#FF6A00] p-3 rounded-full hover:bg-white hover:text-[#FF6A00] transition-colors shadow-lg"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="bg-[#FF6A00] p-3 rounded-full hover:bg-white hover:text-[#FF6A00] transition-colors shadow-lg"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-heading text-2xl font-bold uppercase mb-1">{trainer.name}</h3>
                <p className="text-[#FF6A00] font-bold uppercase text-xs tracking-widest mb-4">{trainer.role}</p>
                <p className="text-[#7A7A7A] text-sm font-body leading-relaxed">{trainer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider px-10 py-8 rounded-sm text-lg shadow-lg transition-all hover:scale-105">
            <Link to="/contact">Join Membership Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;