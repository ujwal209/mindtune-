"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000",
      title: "Master the Human Side of Success",
      subtitle: "Cultivating essential soft skills and leadership resilience for true professionals."
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000",
      title: "Transform Potential into Performance",
      subtitle: "Interactive workshops designed to drive measurable results and team synergy."
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000",
      title: "Guidance for Professional Growth",
      subtitle: "Personalized counseling to navigate your journey with clarity and purpose."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative w-full h-[90vh] min-h-[650px] flex items-center overflow-hidden bg-[#17144B]">
      {/* Background Images with Ken Burns Effect */}
      {heroImages.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <Image src={img.src} alt="" fill className="object-cover" priority={index === 0} />
          {/* Main Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17144B] via-[#17144B]/60 to-transparent"></div>
          {/* Bottom Fade to prevent dot overlap issues */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#17144B] via-transparent to-transparent opacity-60"></div>
        </div>
      ))}

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl">
          {/* Animated Content Block */}
          <div key={currentSlide} className="flex flex-col items-start animate-in slide-in-from-left-8 fade-in duration-700">
            
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-white tracking-widest uppercase mb-6">
              <Star className="w-3 h-3 mr-2 text-yellow-400 fill-yellow-400" />
              Excellence Redefined
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-6 drop-shadow-2xl">
              {heroImages[currentSlide].title}
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-xl mb-10 leading-relaxed font-light drop-shadow-lg">
              {heroImages[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="#services">
                <Button size="lg" className="h-14 md:h-16 bg-[#552D30] hover:bg-[#6d3a3d] text-white text-lg font-bold px-10 rounded-xl shadow-2xl transition-all hover:translate-y-[-2px] active:scale-95">
                  Explore Programs
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="h-14 md:h-16 text-white border-white/30 bg-white/5 backdrop-blur-md hover:bg-white hover:text-[#17144B] text-lg font-bold px-10 rounded-xl transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Shifted to avoid overlap */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 flex items-center gap-6">
        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)} 
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentSlide ? "w-12 bg-[#552D30]" : "w-4 bg-white/30 hover:bg-white"
              }`} 
            />
          ))}
        </div>
        
        <div className="hidden md:flex gap-2 ml-4">
          <button onClick={prevSlide} className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-sm">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-sm">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}