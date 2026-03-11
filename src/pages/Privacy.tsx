"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Header />
      <main className="pt-24">
        <div className="py-20 bg-[#111111] text-center border-b border-[#2A2A2A]">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">Privacy Policy</h1>
        </div>
        <div className="max-w-4xl mx-auto py-24 px-6 font-body text-[#B3B3B3] space-y-8">
          <p>Your privacy is important to us. It is HulkGym's policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <h2 className="text-2xl font-heading font-bold text-white uppercase">1. Information We Collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
          <h2 className="text-2xl font-heading font-bold text-white uppercase">2. Use of Information</h2>
          <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;