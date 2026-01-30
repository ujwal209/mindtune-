"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon, Maximize2, X, ArrowUpRight } from "lucide-react";
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
      description: "A high-energy session focused on breaking down communication barriers and building trust.",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
      alt: "Executive Coaching",
      category: "Counseling",
      title: "One-on-One Guidance",
      description: "Personalized executive coaching session aimed at identifying leadership blind spots.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      alt: "Team Building",
      category: "Soft Skills",
      title: "Building Synergy",
      description: "Outdoor team-building retreat designed to build trust and collective resilience.",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000",
      alt: "Seminar",
      category: "Events",
      title: "Leadership Seminars",
      description: "Large-scale industry seminar featuring keynote speeches on emotional intelligence.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000",
      alt: "Collaboration",
      category: "Soft Skills",
      title: "Effective Communication",
      description: "Intensive workshop on non-verbal communication and active listening techniques.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
      alt: "Success",
      category: "Results",
      title: "Achieving Excellence",
      description: "Celebrating professional milestones and success stories with our global partners.",
      size: "standard"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-xs font-black tracking-widest uppercase">
              <ImageIcon size={14} className="text-[#552D30]" />
              Visual Journey
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#17144B] leading-[0.95] tracking-tighter">
              Moments of <br /><span className="text-[#552D30]">Transformation</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 font-light max-w-sm border-l-2 border-[#552D30] pl-6">
            A glimpse into the workshops where we unlock human potential.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full min-h-[1000px] md:h-[900px]">
          {galleryImages.map((image, index) => {
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-1",
              tall: "md:col-span-1 md:row-span-2",
              standard: "md:col-span-1 md:row-span-1"
            };

            return (
              <div 
                key={index} 
                className={`group relative rounded-[2.5rem] overflow-hidden cursor-none ${sizeClasses[image.size]}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
                
                {/* Refined Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17144B] via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black tracking-[0.2em] text-white/70 uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {image.title}
                    </h3>
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                      <ArrowUpRight className="text-[#17144B]" size={20} />
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#17144B]/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <X size={40} strokeWidth={1} />
          </button>

          <div 
            className="relative w-full max-w-7xl h-full flex flex-col md:flex-row bg-white rounded-[3rem] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-[1.5] h-[50%] md:h-full">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-cover" />
            </div>
            
            <div className="flex-1 p-10 md:p-20 flex flex-col justify-center bg-white">
              <span className="text-xs font-black tracking-[0.3em] text-[#552D30] uppercase mb-6 block">
                {selectedImage.category}
              </span>
              <h3 className="text-4xl md:text-6xl font-black text-[#17144B] leading-none tracking-tighter mb-8">
                {selectedImage.title}
              </h3>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                {selectedImage.description}
              </p>
              
              <Button 
                className="h-16 px-10 bg-[#17144B] hover:bg-[#552D30] text-white rounded-2xl text-lg font-bold transition-all w-fit"
                onClick={() => {
                  setSelectedImage(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Inquire about this session
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}