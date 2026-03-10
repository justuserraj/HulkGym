"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Programs from '@/components/sections/Programs';
import CTA from '@/components/sections/CTA';

const Classes = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Header />
      <main className="pt-24">
        <div className="py-20 bg-[#111111] text-center border-b border-[#2A2A2A]">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">Our Classes</h1>
          <p className="text-[#7A7A7A] mt-4 uppercase tracking-widest">Home / Classes</p>
        </div>
        <Programs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Classes;