"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Map from '@/components/sections/Map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      <Header />
      <main className="pt-24">
        <div className="py-24 bg-[#111111] text-center border-b border-[#2A2A2A]">
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase">Join Hulk Gym Today</h1>
          <p className="text-[#7A7A7A] mt-4 uppercase tracking-widest">Want to become a member? Contact us today and our team will help you get started.</p>
        </div>
        
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-4xl font-bold uppercase mb-6">Get In Touch</h2>
                <p className="text-[#B3B3B3] text-lg leading-relaxed font-body">
                  Have questions about our memberships or training programs? Reach out to us and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-[#FF6A00] p-4 rounded-sm shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider mb-1">Call Us</h4>
                    <p className="text-white font-bold text-xl">093417 67026</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#FF6A00] p-4 rounded-sm shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider mb-1">Visit Us</h4>
                    <p className="text-[#B3B3B3]">Singhaul Dih, Begusarai, Bihar 851134, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#FF6A00] p-4 rounded-sm shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-wider mb-1">Email Us</h4>
                    <p className="text-[#B3B3B3]">hulkgymbgs@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1B1B1B] p-10 rounded-lg border border-[#2A2A2A] shadow-2xl">
              <h3 className="font-heading text-3xl font-bold uppercase mb-8">Send Us A Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-[#7A7A7A]">Full Name</label>
                    <Input placeholder="Enter your name" className="bg-[#111111] border-[#2A2A2A] h-14 focus:border-[#FF6A00] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-[#7A7A7A]">Phone Number</label>
                    <Input placeholder="Enter your phone" className="bg-[#111111] border-[#2A2A2A] h-14 focus:border-[#FF6A00] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-[#7A7A7A]">Subject</label>
                  <Input placeholder="How can we help?" className="bg-[#111111] border-[#2A2A2A] h-14 focus:border-[#FF6A00] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-[#7A7A7A]">Message</label>
                  <Textarea placeholder="Tell us more about your fitness goals..." className="bg-[#111111] border-[#2A2A2A] min-h-[150px] focus:border-[#FF6A00] transition-all" />
                </div>
                <Button className="w-full bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider py-8 rounded-sm text-lg shadow-lg transition-all hover:scale-[1.02]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;