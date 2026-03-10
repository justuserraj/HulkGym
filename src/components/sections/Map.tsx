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
          <div className="lg:col-span-2 h-[450px] rounded-lg overflow-hidden border border-[#2A2A2A]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617543867613!2d-73.985428!3d40.748441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635150000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Gym Location"
            ></iframe>
          </div>

          <div className="bg-[#1B1B1B] p-10 rounded-lg border border-[#2A2A2A] flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold uppercase mb-8">Contact Details</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#FF6A00] p-3 rounded-sm shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Address</h4>
                  <p className="text-[#7A7A7A] text-sm">123 Fitness Avenue, Muscle District, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FF6A00] p-3 rounded-sm shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Opening Hours</h4>
                  <p className="text-[#7A7A7A] text-sm">Mon - Fri: 06:00 - 22:00</p>
                  <p className="text-[#7A7A7A] text-sm">Sat - Sun: 08:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#FF6A00] p-3 rounded-sm shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-1">Phone</h4>
                  <p className="text-[#7A7A7A] text-sm">+1 (555) 123-4567</p>
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