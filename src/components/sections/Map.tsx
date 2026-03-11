"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-24 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6A00] font-bold tracking-widest uppercase text-sm mb-4 block">
            LOCATION
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase mb-6">
            Find Our <span className="text-[#FF6A00]">Gym</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 h-[500px] rounded-lg overflow-hidden border border-[#2A2A2A] shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.444444444444!2d86.1333333!3d25.4166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2190000000001%3A0x0!2zMjXCsDI1JzAwLjAiTiA4NsKwMDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Hulk Gym Location"
              className="grayscale invert contrast-125"
            ></iframe>
          </div>

          <div className="bg-[#1B1B1B] p-10 rounded-lg border border-[#2A2A2A] flex flex-col justify-center shadow-xl">
            <h3 className="font-heading text-2xl font-bold uppercase mb-8">Contact Details</h3>
            
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="bg-[#FF6A00] p-4 rounded-sm shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2 tracking-wider">Address</h4>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">Singhaul Dih, Begusarai, <br /> Bihar 851134, India</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#FF6A00] p-4 rounded-sm shrink-0 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2 tracking-wider">Opening Hours</h4>
                  <p className="text-[#7A7A7A] text-sm">Mon - Fri: 06:00 - 22:00</p>
                  <p className="text-[#7A7A7A] text-sm">Sat - Sun: 08:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#FF6A00] p-4 rounded-sm shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2 tracking-wider">Phone</h4>
                  <p className="text-[#7A7A7A] text-sm font-bold text-white">093417 67026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;