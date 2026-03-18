"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Facebook, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Workshops & EMPOWER', path: '/programs' },
    { name: 'Counselling & Therapies', path: '/counselling' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
      `}} />

      <footer className="force-google-sans bg-white text-slate-600 relative overflow-hidden mt-12 border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        {/* Exuberant Light Glowing Backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#17144B]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#552D30]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

        <div className="container mx-auto px-6 md:px-12 pt-20 pb-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* 1. Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="inline-block group">
                <div className="relative h-16 md:h-20 w-auto transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image 
                    src="/logo.jpg" 
                    alt="Mind Tune Consultants" 
                    width={280} 
                    height={100} 
                    className="object-contain object-left h-full w-auto" 
                  />
                </div>
              </Link>
              <p className="text-base text-slate-500 leading-relaxed max-w-sm font-normal border-l-2 border-[#552D30]/30 pl-4">
                Empowering professional excellence through human-centric training, life skills, and strategic psychological guidance.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                  <Link key={i} href="#" className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center hover:bg-[#17144B] hover:border-[#17144B] group transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                    <Icon size={20} className="text-[#552D30] group-hover:text-white transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* 2. Navigation Column */}
            <div className="lg:col-span-3 lg:col-start-6 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#552D30]" />
                <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-[#17144B]">Explore</h4>
              </div>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path} 
                      className="text-slate-600 hover:text-[#17144B] transition-all flex items-center group text-base font-bold w-fit"
                    >
                      <span className="w-0 h-[2px] bg-gradient-to-r from-[#17144B] to-[#552D30] transition-all duration-300 group-hover:w-5 group-hover:mr-3 rounded-full" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact Details */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-[#17144B]">Get in Touch</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 h-12 w-12 rounded-2xl bg-[#17144B]/5 border border-[#17144B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#17144B] transition-colors duration-300 shadow-sm">
                    <Mail size={20} className="text-[#552D30] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                    <a href="mailto:mindtuneintl@gmail.com" className="text-base font-bold text-[#17144B] hover:text-[#552D30] transition-colors">mindtuneintl@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 h-12 w-12 rounded-2xl bg-[#17144B]/5 border border-[#17144B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#17144B] transition-colors duration-300 shadow-sm">
                    <Phone size={20} className="text-[#552D30] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Support</p>
                    <div className="flex flex-col text-base font-bold text-[#17144B]">
                      <a href="tel:9844085292" className="hover:text-[#552D30] transition-colors">9844085292</a>
                      <a href="tel:9449458914" className="hover:text-[#552D30] transition-colors">9449458914</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 h-12 w-12 rounded-2xl bg-[#17144B]/5 border border-[#17144B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#17144B] transition-colors duration-300 shadow-sm">
                    <MapPin size={20} className="text-[#552D30] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Head Office</p>
                    <p className="text-base font-bold text-[#17144B] leading-relaxed max-w-[260px] group-hover:text-[#552D30] transition-colors">
                      Mind Tune Consultants,<br />
                      No. 49, 19th Main, Muneshwara block, Bengaluru 560026
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="text-slate-500 text-sm font-medium text-center md:text-left">
              © {currentYear} <span className="text-[#17144B] font-bold tracking-wide">Mind Tune Consultants</span>. All rights reserved.
            </div>
            
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-xs font-bold text-slate-400 hover:text-[#17144B] uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="text-xs font-bold text-slate-400 hover:text-[#17144B] uppercase tracking-widest transition-colors">Terms</Link>
            </div>

            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 group text-[#17144B] font-black text-[10px] uppercase tracking-[0.2em] bg-white hover:bg-slate-50 px-4 py-2 rounded-full border border-slate-200 transition-all duration-300 hover:border-slate-300 shadow-sm hover:shadow-md"
            >
              Back to top 
              <div className="h-8 w-8 rounded-full bg-[#17144B] text-white flex items-center justify-center group-hover:-translate-y-1 transition-transform shadow-[0_5px_15px_rgba(23,20,75,0.3)]">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </div>
            </button>
          </div>
          
        </div>
      </footer>
    </>
  );
}