"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Basic Plan",
    price: "29",
    features: ["Standard Gym Access", "Locker Room Access", "Free WiFi", "1 Group Class/Month"],
    recommended: false
  },
  {
    name: "Standard Plan",
    price: "59",
    features: ["All Basic Features", "Unlimited Group Classes", "Personalized Workout Plan", "Nutrition Guide"],
    recommended: true
  },
  {
    name: "Premium Plan",
    price: "99",
    features: ["All Standard Features", "Personal Trainer (2/mo)", "Spa & Sauna Access", "Free Supplements"],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            MEMBERSHIP PRICING
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Choose your <span className="text-[#FF6A00]">perfect plan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-10 rounded-lg border transition-all duration-300 flex flex-col",
                plan.recommended 
                  ? "bg-[#1B1B1B] border-[#FF6A00] scale-105 z-10 shadow-2xl" 
                  : "bg-[#141414] border-[#2A2A2A] hover:border-[#FF6A00]/50"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6A00] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold uppercase mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-bold text-[#FF6A00]">$</span>
                  <span className="text-6xl font-heading font-bold">{plan.price}</span>
                  <span className="text-[#7A7A7A] font-bold uppercase text-sm">/Month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-[#B3B3B3]">
                    <Check className="w-5 h-5 text-[#FF6A00]" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={cn(
                  "w-full font-bold uppercase tracking-wider py-7 rounded-sm",
                  plan.recommended 
                    ? "bg-[#FF6A00] hover:bg-[#FF7F1F] text-white" 
                    : "bg-transparent border-2 border-[#FF6A00] text-white hover:bg-[#FF6A00]"
                )}
              >
                Join Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;