"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Body Building",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop",
    path: "/classes"
  },
  {
    title: "Personal Training",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    path: "/classes"
  },
  {
    title: "Fitness Class",
    image: "https://images.unsplash.com/photo-1571902251103-d87389d79bb4?q=80&w=2070&auto=format&fit=crop",
    path: "/classes"
  },
  {
    title: "Group Training",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
    path: "/classes"
  }
];

const Programs = () => {
  return (
    <section id="classes" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            OUR PROGRAMS
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Elite Training <span className="text-[#FF6A00]">Solutions</span>
          </h2>
          <p className="text-[#B3B3B3] max-w-2xl mx-auto font-body">
            Discover specialized training programs tailored to your unique fitness goals. 
            From strength building to high-intensity cardio, we have the perfect class for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
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
              <Button asChild variant="link" className="text-[#FF6A00] p-0 font-bold uppercase tracking-wider group/btn">
                <Link to={programs[0].path}>
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

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
                  <Button asChild variant="link" className="text-[#FF6A00] p-0 font-bold uppercase tracking-wider group/btn">
                    <Link to={program.path}>
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
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