"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, HeartPulse, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change & prevent body scroll when open
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Updated Nav Links with Contact added
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { 
      name: "Workshops & EMPOWER", 
      href: "/programs", 
      icon: <GraduationCap size={20} />, 
      desc: "Student programs & corporate training" 
    },
    { 
      name: "Counselling & Therapies", 
      href: "/counselling", 
      icon: <HeartPulse size={20} />, 
      desc: "Professional clinical support" 
    },
  ];

  return (
    <>
      {/* GLOBAL FONT INJECTION */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { 
          font-family: 'Google Sans', 'Product Sans', sans-serif !important; 
        }
      `}} />

      {/* NAVBAR CONTAINER */}
      <nav
        className={`force-google-sans fixed top-0 left-0 w-full z-[100] bg-white transition-all duration-300 ${
          scrolled ? "shadow-md py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center group z-[110]">
            <div className="relative h-10 md:h-12 w-auto aspect-[3.5/1]">
              <Image
                src="/logo.jpg"
                alt="Mind Tune Consultants"
                width={200}
                height={70}
                className="object-contain object-left h-full w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group transition-colors duration-300 hover:text-[#17144B] ${
                    pathname === link.href ? "text-[#17144B]" : ""
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#552D30] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}

              {/* SERVICES DROPDOWN */}
              <div className="relative group/dropdown">
                <button 
                  className="flex items-center gap-1 hover:text-[#17144B] transition-colors py-2 uppercase tracking-[0.2em]"
                >
                  Services <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* MEGA DROPDOWN BOX */}
                <div className="absolute top-full -left-10 w-[320px] bg-white border border-slate-100 shadow-2xl rounded-3xl p-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 translate-y-2 group-hover/dropdown:translate-y-0">
                  <div className="space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="p-2.5 bg-[#17144B]/5 text-[#17144B] rounded-xl group-hover/item:bg-[#17144B] group-hover/item:text-white transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <p className="text-slate-900 text-[13px] font-bold normal-case tracking-normal mb-1">{service.name}</p>
                          <p className="text-slate-500 text-[11px] normal-case tracking-tight leading-snug">{service.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

            {/* CTA BUTTON */}
            <Link href="/contact">
              <Button className="bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full px-8 h-12 text-[10px] font-black tracking-widest uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(23,20,75,0.2)] hover:shadow-[0_12px_25px_rgba(23,20,75,0.3)] hover:-translate-y-1">
                Book Session <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="lg:hidden relative z-[110] p-2 -mr-2 text-[#17144B] hover:bg-slate-50 rounded-xl transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU (Perfect Mobile View) */}
      <div
        className={`force-google-sans lg:hidden fixed inset-0 bg-white z-[90] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: '100dvh' }} // Uses dynamic viewport height to fix mobile browser bar issues
      >
        <div className="flex flex-col h-full pt-[90px] pb-8 px-6 overflow-y-auto">
          <div className="space-y-8 flex-1">
            
            {/* Standard Links */}
            <div className="space-y-6">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Navigation</p>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-3xl font-extrabold text-[#17144B] hover:text-[#552D30] transition-colors p-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="pt-8 border-t border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 ml-2">Our Expertise</p>
              <div className="grid gap-4">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl active:bg-slate-100 transition-colors"
                  >
                    <div className="p-3 bg-white text-[#552D30] rounded-xl shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <span className="block font-bold text-slate-800 text-sm mb-0.5">{service.name}</span>
                      <span className="block text-xs text-slate-500">{service.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer / CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <Link href="/contact" className="block w-full">
              <Button className="w-full h-16 bg-gradient-to-r from-[#17144B] to-[#2a266e] text-white rounded-[1.25rem] text-[13px] font-bold uppercase tracking-widest shadow-xl">
                Book a Consultation
              </Button>
            </Link>
            <p className="text-center text-slate-400 text-[11px] mt-6 font-medium">
              © 2026 Mind Tune Consultants
            </p>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content jump below fixed navbar */}
      <div className="h-[88px] md:h-[96px] bg-white"></div>
    </>
  );
}