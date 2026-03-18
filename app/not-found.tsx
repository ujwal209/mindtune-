"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
      `}} />

      <main className="force-google-sans min-h-screen bg-white flex items-center justify-center relative overflow-hidden selection:bg-[#552D30] selection:text-white pt-20">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#17144B]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#552D30]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="text-[150px] md:text-[200px] font-black text-slate-50/80 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-sm">
              404
            </div>
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-[2rem] bg-white border border-slate-100 shadow-2xl flex items-center justify-center mx-auto mb-6">
              <Compass size={48} className="text-[#552D30]" strokeWidth={1.5} />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            Page Not Found
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#17144B] tracking-tight mb-6">
            Looks like you've <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17144B] to-[#552D30]">lost your way.</span>
          </h1>

          <p className="text-lg text-slate-500 font-normal max-w-lg mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
          </p>

          <Link href="/" className="group">
            <Button className="h-14 px-8 bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-[0_8px_20px_rgba(23,20,75,0.2)] hover:shadow-[0_12px_25px_rgba(23,20,75,0.3)] hover:-translate-y-1">
              Return to Homepage <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}