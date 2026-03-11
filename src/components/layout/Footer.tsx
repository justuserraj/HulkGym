"use client";

import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0E0E0E] pt-24 pb-12 px-6 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#FF6A00] p-1.5 rounded-sm shadow-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight uppercase">
              Hulk<span className="text-[#FF6A00]">Gym</span>
            </span>
          </Link>
          <p className="text-[#7A7A7A] text-sm leading-relaxed font-body">
            Hulk Gym is the premier fitness destination in Begusarai, dedicated to empowering individuals through expert coaching, 
            state-of-the-art equipment, and a supportive community.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#7A7A7A] hover:text-[#FF6A00] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-[#7A7A7A] hover:text-[#FF6A00] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-[#7A7A7A] hover:text-[#FF6A00] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-[#7A7A7A] hover:text-[#FF6A00] transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-xl font-bold uppercase mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Classes', path: '/classes' },
              { name: 'Trainers', path: '/trainers' },
              { name: 'Membership', path: '/membership' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-[#7A7A7A] hover:text-[#FF6A00] transition-colors text-sm font-medium uppercase tracking-wider">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl font-bold uppercase mb-6">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#FF6A00] shrink-0" />
              <span className="text-[#7A7A7A] text-sm leading-relaxed">
                Singhaul Dih, Begusarai, <br /> Bihar 851134, India
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#FF6A00] shrink-0" />
              <span className="text-[#7A7A7A] text-sm">093417 67026</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#FF6A00] shrink-0" />
              <span className="text-[#7A7A7A] text-sm">info@hulkgym.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl font-bold uppercase mb-6">Opening Hours</h4>
          <ul className="space-y-4">
            <li className="flex justify-between text-sm">
              <span className="text-[#7A7A7A]">Monday - Friday</span>
              <span className="text-white font-bold">06:00 - 22:00</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-[#7A7A7A]">Saturday</span>
              <span className="text-white font-bold">08:00 - 20:00</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-[#7A7A7A]">Sunday</span>
              <span className="text-white font-bold">09:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[#7A7A7A] text-xs uppercase tracking-widest">
          © 2024 Hulk Gym Begusarai. All Rights Reserved.
        </p>
        <div className="flex items-center gap-8">
          <Link to="/privacy" className="text-[#7A7A7A] hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[#7A7A7A] hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;