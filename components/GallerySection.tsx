"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  size: "large" | "tall" | "standard";
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryImages: GalleryItem[] = [
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
      alt: "Corporate Workshop",
      category: "Workshops",
      title: "Interactive Team Learning",
      description: "A high-energy session focused on breaking down communication barriers and building trust within corporate teams.",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
      alt: "Executive Coaching",
      category: "Counseling",
      title: "One-on-One Guidance",
      description: "Personalized executive coaching sessions aimed at identifying leadership blind spots and fostering growth.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      alt: "Team Building",
      category: "Soft Skills",
      title: "Building Synergy",
      description: "Dynamic outdoor team-building retreats designed to build trust, collaboration, and collective resilience.",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000",
      alt: "Seminar",
      category: "Events",
      title: "Leadership Seminars",
      description: "Large-scale industry seminars featuring keynote speeches on emotional intelligence and modern leadership.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000",
      alt: "Collaboration",
      category: "Soft Skills",
      title: "Effective Communication",
      description: "Intensive workshops focusing on non-verbal communication, active listening, and conflict resolution techniques.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
      alt: "Success",
      category: "Results",
      title: "Achieving Excellence",
      description: "Celebrating professional milestones, team achievements, and success stories with our global partners.",
      size: "standard"
    }
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

      <section 
        id="gallery" 
        className="force-google-sans py-24 md:py-32 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-[11px] font-bold tracking-[0.2em] uppercase">
                <ImageIcon size={14} className="text-[#552D30]" strokeWidth={2.5} />
                Visual Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] leading-[1.1] tracking-tight">
                Moments of <br /><span className="text-[#552D30]">Transformation</span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-normal max-w-sm border-l-2 border-[#552D30]/30 pl-6 leading-relaxed">
              A glimpse into the interactive workshops and environments where we unlock true human potential.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-full min-h-[1200px] md:min-h-[800px]">
            {galleryImages.map((image, index) => {
              const sizeClasses = {
                large: "md:col-span-2 md:row-span-1 min-h-[300px] md:min-h-0",
                tall: "md:col-span-1 md:row-span-2 min-h-[400px] md:min-h-0",
                standard: "md:col-span-1 md:row-span-1 min-h-[300px] md:min-h-0"
              };

              return (
                <div 
                  key={index} 
                  className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 ${sizeClasses[image.size]}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  
                  {/* Refined Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/90 via-[#17144B]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.category}
                    </span>
                    <div className="flex justify-between items-end gap-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                        {image.title}
                      </h3>
                      <div className="h-10 w-10 shrink-0 rounded-full bg-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                        <ArrowUpRight className="text-[#17144B]" size={18} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modern Full-Screen Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-50 p-2 rounded-full hover:bg-white/10"
              aria-label="Close gallery"
            >
              <X size={32} strokeWidth={2} />
            </button>

            <div 
              className="relative w-full max-w-6xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative flex-[1.2] h-[45%] md:h-full bg-slate-100">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  fill 
                  className="object-cover" 
                  priority
                />
              </div>
              
              {/* Content Container */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                <span className="inline-block px-3 py-1 rounded-full bg-[#552D30]/10 text-[#552D30] text-[11px] font-bold tracking-[0.2em] uppercase mb-6 w-fit">
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#17144B] leading-[1.1] tracking-tight mb-6">
                  {selectedImage.title}
                </h3>
                <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed mb-10">
                  {selectedImage.description}
                </p>
                
                <Button 
                  className="h-14 px-8 bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg w-full sm:w-fit hover:-translate-y-0.5"
                  onClick={() => {
                    setSelectedImage(null);
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Inquire About Sessions
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}