"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Header />
      <main className="pt-24">
        <div className="py-20 bg-[#111111] text-center border-b border-[#2A2A2A]">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">Terms of Service</h1>
        </div>
        <div className="max-w-4xl mx-auto py-24 px-6 font-body text-[#B3B3B3] space-y-8">
          <h2 className="text-2xl font-heading font-bold text-white uppercase">1. Terms</h2>
          <p>By accessing the website at HulkGym, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          <h2 className="text-2xl font-heading font-bold text-white uppercase">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on HulkGym's website for personal, non-commercial transitory viewing only.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;