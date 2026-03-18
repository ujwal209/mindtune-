"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    <>
      {/* THE FIX: Force Google Sans globally for this section using the working CDN */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        
        .force-google-sans, .force-google-sans * {
          font-family: 'Google Sans', 'Product Sans', sans-serif !important;
        }
      `}} />

      <section className="force-google-sans relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-white">
        {/* Background Images with subtle Ken Burns Effect */}
        {heroImages.map((img, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <Image 
              src={img.src} 
              alt={img.title} 
              fill 
              className="object-cover object-center" 
              priority={index === 0} 
            />
            
            {/* Premium Overlay: Brand Navy (#17144B) fading out smoothly */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17144B]/95 via-[#17144B]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/40 via-transparent to-transparent"></div>
          </div>
        ))}

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-2xl">
            {/* Animated Content Block */}
            <div key={currentSlide} className="flex flex-col items-start animate-in slide-in-from-left-4 fade-in duration-700 ease-out fill-mode-forwards">
              
              {/* Elegant Badge */}
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[11px] font-medium text-white tracking-[0.2em] uppercase mb-6 shadow-sm">
                <Star className="w-3.5 h-3.5 mr-2 text-amber-400 fill-amber-400" />
                Excellence Redefined
              </div>

              {/* Typography: Sleek, editorial 'font-semibold' */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
                {heroImages[currentSlide].title}
              </h1>

              {/* Subtitle: Reduced weight to normal, improved line height for readability */}
              <p className="text-base md:text-lg lg:text-xl text-slate-100 max-w-lg mb-10 leading-relaxed font-normal opacity-90">
                {heroImages[currentSlide].subtitle}
              </p>

              {/* Buttons: Cleaned up borders, shadows, and hover states */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#services" className="w-full sm:w-auto">
                  <Button className="w-full h-14 bg-[#552D30] hover:bg-[#3d1f22] text-white text-sm font-medium tracking-wide px-8 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    Explore Programs
                  </Button>
                </Link>
                <Link href="#contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full h-14 border-white/30 bg-white/5 backdrop-blur-md hover:bg-white hover:text-[#17144B] text-white text-sm font-medium tracking-wide px-8 rounded-full transition-all duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls: Redesigned into a sleek, modern glass pill */}
        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-30 flex items-center gap-6 bg-[#17144B]/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
          
          {/* Slide Indicators */}
          <div className="flex gap-2.5">
            {heroImages.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                }`} 
              />
            ))}
          </div>
          
          <div className="w-[1px] h-6 bg-white/20 hidden md:block"></div>

          {/* Next/Prev Buttons */}
          <div className="hidden md:flex gap-1">
            <button 
              onClick={prevSlide} 
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}