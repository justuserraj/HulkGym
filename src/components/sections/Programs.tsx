"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    title: "Body Building",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Fitness Class",
    image: "https://images.unsplash.com/photo-1518611012118-2961720eaa2e?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Group Training",
    image: "https://images.unsplash.com/photo-1571902251103-d87389d79bb4?q=80&w=1974&auto=format&fit=crop",
    size: "small"
  }
];

const Programs = () => {
  return (
    <section id="classes" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            CLASSES PROGRAM
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            We provide you with the <span className="text-[#FF6A00]">best service</span>
          </h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto font-body">
            Choose from our wide range of specialized programs designed to help you achieve 
            your specific fitness goals with expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 relative group overflow-hidden rounded-lg border border-[#2A2A2A]"
          >
            <img 
              src={programs[0].image} 
              alt={programs[0].title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="font-heading text-3xl font-bold uppercase mb-4">{programs[0].title}</h3>
              <Button variant="link" className="text-[#FF6A00] p-0 font-bold uppercase tracking-wider group/btn">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right Grid of 3 Smaller Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {programs.slice(1).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative group overflow-hidden rounded-lg border border-[#2A2A2A] h-[280px]",
                  index === 2 ? "sm:col-span-2" : ""
                )}
              >
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="font-heading text-2xl font-bold uppercase mb-2">{program.title}</h3>
                  <Button variant="link" className="text-[#FF6A00] p-0 font-bold uppercase tracking-wider group/btn">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;