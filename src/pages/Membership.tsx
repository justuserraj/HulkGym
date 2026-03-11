"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Membership = () => {
  const benefits = [
    "Full access to modern gym equipment",
    "Personalized workout plans",
    "Expert guidance from certified trainers",
    "Access to CrossFit and Dance Fitness classes",
    "Clean and motivating environment",
    "Locker and shower facilities"
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Header />
      <main className="pt-24">
        <div className="py-24 bg-[#111111] text-center border-b border-[#2A2A2A]">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">Membership</h1>
          <p className="text-[#7A7A7A] mt-4 uppercase tracking-widest">Join the strongest community in Begusarai</p>
        </div>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-heading text-4xl font-bold uppercase mb-8">Why Join <span className="text-[#FF6A00]">Hulk Gym?</span></h2>
                <p className="text-[#B3B3B3] text-lg mb-10 leading-relaxed font-body">
                  At Hulk Gym, we don't just provide equipment; we provide a path to a better you. 
                  Our memberships are designed to give you everything you need to succeed, 
                  from state-of-the-art facilities to a community that pushes you further.
                </p>
                
                <div className="space-y-4 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle2 className="text-[#FF6A00] w-6 h-6 shrink-0" />
                      <span className="font-bold uppercase text-sm tracking-wide">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider px-10 py-8 rounded-sm text-lg shadow-lg transition-all hover:scale-105 group">
                  <Link to="/contact">
                    Join Membership Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gym Training" 
                  className="rounded-lg shadow-2xl border-2 border-[#2A2A2A]"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FF6A00] p-8 rounded-sm shadow-2xl hidden md:block">
                  <span className="block text-4xl font-heading font-bold">100%</span>
                  <span className="block text-xs font-bold uppercase tracking-tighter">Commitment to Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;