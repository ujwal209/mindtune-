"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-24 relative">
        
        {/* Subtle Brand Watermark Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#17144B]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20 relative z-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block group">
              <div className="relative h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo.jpg" 
                  alt="Mind Tune Consultants" 
                  width={280} 
                  height={100} 
                  className="object-contain object-left h-full w-auto" 
                />
              </div>
            </Link>
            <p className="text-lg text-slate-500 leading-relaxed max-w-sm font-light">
              Empowering professional excellence through human-centric training and strategic psychological guidance.
            </p>
            {/* Social Icons with Burgundy Accents */}
            <div className="flex gap-4 pt-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="h-12 w-12 rounded-2xl border border-slate-200 bg-white flex items-center justify-center hover:bg-[#17144B] hover:border-[#17144B] group transition-all shadow-sm">
                  <Icon size={20} className="text-[#552D30] group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xs font-black tracking-[0.25em] uppercase text-[#17144B]">Quick Links</h4>
            <ul className="space-y-5">
              {['Services', 'Workshops', 'Gallery', 'Counseling'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-600 hover:text-[#552D30] transition-all flex items-center group text-lg font-bold"
                  >
                    <span className="w-0 h-0.5 bg-[#552D30] transition-all group-hover:w-4 group-hover:mr-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details with Icons */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xs font-black tracking-[0.25em] uppercase text-[#17144B]">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-5">
                <div className="mt-1 h-12 w-12 rounded-2xl bg-[#17144B]/5 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-[#552D30]" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                  <a href="mailto:mindtuneintl@gmail.com" className="text-lg font-bold text-[#17144B] hover:text-[#552D30] transition-colors">mindtuneintl@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-1 h-12 w-12 rounded-2xl bg-[#17144B]/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#552D30]" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Support</p>
                  <div className="flex flex-col text-lg font-bold text-[#17144B]">
                    <a href="tel:9844085292" className="hover:text-[#552D30] transition-colors">9844085292</a>
                    <a href="tel:9449458914" className="hover:text-[#552D30] transition-colors">9449458914</a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="mt-1 h-12 w-12 rounded-2xl bg-[#17144B]/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#552D30]" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Head Office</p>
                  <p className="text-lg font-bold text-[#17144B] leading-tight max-w-[300px]">
                    Mind Tune Consultants,<br />
                    No. 49, 19th Main, Muneshwara block, <br />
                    Bengaluru 560026
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-slate-400 font-medium">
            © {currentYear} <span className="text-[#17144B] font-bold">Mind Tune Consultants</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-10">
            <Link href="#" className="text-sm font-bold text-slate-400 hover:text-[#17144B] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm font-bold text-slate-400 hover:text-[#17144B] transition-colors">Terms of Service</Link>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group text-[#17144B] font-black text-xs uppercase tracking-widest"
          >
            Back to top 
            <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#17144B] group-hover:text-white transition-all shadow-sm">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}