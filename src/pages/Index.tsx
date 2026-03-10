"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Programs from '@/components/sections/Programs';
import Trainers from '@/components/sections/Trainers';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Map from '@/components/sections/Map';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import { MadeWithVizoxStudio } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white selection:bg-[#FF6A00] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Programs />
        <Trainers />
        <Testimonials />
        <Pricing />
        <Map />
        <CTA />
      </main>
      <Footer />
      <MadeWithVizoxStudio />
    </div>
  );
};

export default Index;