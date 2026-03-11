"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#2A2A2A] py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-[#FF6A00] p-1.5 rounded-sm group-hover:scale-110 transition-transform">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight uppercase">
            Hulk<span className="text-[#FF6A00]">Gym</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider hover:text-[#FF6A00] transition-colors",
                location.pathname === link.href ? "text-[#FF6A00]" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider px-6 py-6 rounded-sm shadow-lg transition-all hover:scale-105">
            <Link to="/contact">Join Membership Now</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#0E0E0E] z-40 md:hidden flex flex-col items-center justify-center gap-8 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-2xl font-heading font-bold uppercase tracking-wider hover:text-[#FF6A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full bg-[#FF6A00] hover:bg-[#FF7F1F] text-white font-bold uppercase tracking-wider py-8 rounded-sm text-lg">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Join Membership Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;