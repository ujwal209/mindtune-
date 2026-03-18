"use client";

import React from "react";
import { Brain, Compass, Users, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { label: "Workshops Delivered", value: "500+", icon: Brain },
    { label: "Careers Guided", value: "1.2k+", icon: Compass },
    { label: "Corporate Partners", value: "40+", icon: Users },
    { label: "Satisfaction Rate", value: "98%", icon: Star },
  ];

  return (
    <>
      {/* THE FIX: Force Google Sans globally for this section using the working CDN */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        
        .force-google-sans, .force-google-sans * {
          font-family: 'Google Sans', 'Product Sans', sans-serif !important;
        }
      `}} />

      <section className="force-google-sans bg-white border-y border-slate-100 relative z-20 py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Added 'md:divide-x' to create sleek vertical separators on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-0 text-center md:divide-x md:divide-slate-100">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group cursor-default px-4"
              >
                {/* Premium Icon Container */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-[#552D30]/5 group-hover:border-[#552D30]/20 transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                  <stat.icon 
                    className="w-7 h-7 text-[#552D30] transition-transform duration-500 group-hover:scale-110" 
                    strokeWidth={1.5} // Thinner stroke for a more elegant, non-slop look
                  />
                </div>
                
                {/* Sleek Numbers */}
                <h3 className="text-4xl md:text-5xl font-semibold text-[#17144B] mb-3 tracking-tight">
                  {stat.value}
                </h3>
                
                {/* Editorial Labels */}
                <p className="text-[10px] md:text-[11px] text-slate-500 font-medium uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}