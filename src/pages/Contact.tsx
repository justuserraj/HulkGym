"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Map from '@/components/sections/Map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Header />
      <main className="pt-24">
        <div className="py-20 bg-[#111111] text-center border-b border-[#2A2A2A]">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">Contact Us</h1>
          <p className="text-[#7A7A7A] mt-4 uppercase tracking-widest">Home / Contact</p>
        </div>
        
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto bg-[#1B1B1B] p-10 rounded-lg border border-[#2A2A2A]">
            <h2 className="font-heading text-3xl font-bold uppercase mb-8 text-center">Send Us A Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" className="bg-[#111111] border-[#2A2A2A] h-14" />
                <Input placeholder="Your Email" className="bg-[#111111] border-[#2A2A2A] h-14" />
              </div>
              <Input placeholder="Subject" className="bg-[#111111] border-[#2A2A2A] h-14" />
              <Textarea placeholder="Your Message" className="bg-[#111111] border-[#2A2A2A] min-h-[200px]" />
              <Button className="w-full bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider py-8 rounded-sm text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </section>

        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;