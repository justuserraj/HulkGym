"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-[#FF6A00]/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl font-bold uppercase text-white mb-8 leading-tight"
        >
          Start Your Fitness <br /> Journey Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-body leading-relaxed"
        >
          Join Hulk Gym and transform your body with our expert trainers and world-class facilities in Begusarai. 
          Your best self is waiting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button asChild className="bg-white text-[#FF6A00] hover:bg-white/90 font-bold uppercase tracking-wider px-12 py-9 rounded-sm text-2xl shadow-2xl transition-all hover:scale-105">
            <Link to="/contact">Join Hulk Gym Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;