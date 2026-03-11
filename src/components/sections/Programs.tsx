"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Zap, Music, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Gym Training",
    description: "Strength and weight training using modern gym equipment for maximum results.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    icon: <Dumbbell className="w-6 h-6" />,
    path: "/contact"
  },
  {
    title: "CrossFit",
    description: "High-intensity workouts designed to improve endurance, strength, and agility.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    icon: <Zap className="w-6 h-6" />,
    path: "/contact"
  },
  {
    title: "Dance Fitness",
    description: "Energetic fitness sessions combining dance and cardio for a fun workout.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop",
    icon: <Music className="w-6 h-6" />,
    path: "/contact"
  },
  {
    title: "Adult Sports Training",
    description: "Programs designed to improve stamina, strength, and overall athletic performance.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
    icon: <Trophy className="w-6 h-6" />,
    path: "/contact"
  }
];

const Programs = () => {
  return (
    <section id="classes" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            State-of-the-Art <span className="text-[#FF6A00]">Training Facility</span>
          </h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto font-body leading-relaxed">
            Hulk Gym provides a motivating training environment with modern equipment, 
            structured fitness programs, and expert guidance to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg border border-[#2A2A2A] h-[450px] flex flex-col justify-end p-8"
            >
              <img 
                src={program.image} 
                alt={program.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              <div className="relative z-10">
                <div className="bg-[#FF6A00] w-12 h-12 flex items-center justify-center rounded-sm mb-4 shadow-lg">
                  {program.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-2">{program.title}</h3>
                <p className="text-[#B3B3B3] text-sm mb-6 line-clamp-2 font-body">
                  {program.description}
                </p>
                <Button asChild variant="link" className="text-[#FF6A00] p-0 font-bold uppercase tracking-wider group/btn hover:no-underline">
                  <Link to={program.path}>
                    Join Now <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider px-10 py-8 rounded-sm text-lg shadow-lg transition-all hover:scale-105">
            <Link to="/contact">Start Your Fitness Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;