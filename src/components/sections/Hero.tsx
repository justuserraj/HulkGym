"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0E0E0E]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-[#FF6A00] p-3 rounded-full shadow-xl">
            <Dumbbell className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-5xl md:text-8xl font-bold uppercase tracking-tight leading-none mb-6"
        >
          Train Hard. <br />
          <span className="text-[#FF6A00]">Become Stronger</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#B3B3B3] max-w-3xl mx-auto mb-10 font-body leading-relaxed"
        >
          Located in Singhaul Dih, Begusarai, Hulk Gym offers a powerful training environment with modern equipment, 
          motivating trainers, and fitness programs designed to help you reach your goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild className="bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider px-10 py-8 rounded-sm text-lg group shadow-lg transition-all hover:scale-105">
            <Link to="/contact">
              Join Hulk Gym Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-[#FF6A00] text-white hover:bg-[#FF6A00] font-bold uppercase tracking-wider px-10 py-8 rounded-sm text-lg bg-transparent transition-all hover:scale-105">
            <Link to="/classes">Explore Classes</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-[#7A7A7A]">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF6A00] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;