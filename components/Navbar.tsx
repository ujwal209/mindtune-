"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="relative h-16 w-auto aspect-[3.5/1]">
            <Image 
              src="/logo.jpg" 
              alt="Mind Tune Consultants" 
              width={220} 
              height={80}
              className="object-contain object-left h-full w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-bold tracking-wide text-slate-600 uppercase">
            {['Services', 'Workshops', 'Gallery', 'Counseling'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#17144B] transition-colors relative group py-2">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#552D30] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <Link href="#contact">
            <Button className="bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full px-6 py-5 text-sm font-bold tracking-wide shadow-lg shadow-[#17144B]/20 transition-all hover:scale-105">
              BOOK CONSULTATION
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-[#17144B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white p-6 space-y-4 shadow-2xl absolute w-full left-0 z-50">
          {['Services', 'Workshops', 'Gallery', 'Counseling'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="block text-lg font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>
              {item.toUpperCase()}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-[#17144B] text-white mt-4 py-6 text-lg font-bold">BOOK CONSULTATION</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}