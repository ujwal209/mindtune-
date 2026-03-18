"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Camera, Maximize2, Filter, Sparkles, Users, 
  HeartPulse, X, ArrowRight, Zap, Target
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Curated high-impact images from Unsplash
const galleryImages = [
  { id: 1, category: "Workshops", title: "EMPOWER Life Skills", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200", description: "Interactive student engagement session focused on WHO core life skills." },
  { id: 2, category: "Counseling", title: "Clinical Support", src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200", description: "A safe, confidential space for emotional and behavioral growth." },
  { id: 3, category: "Corporate", title: "Leadership Training", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200", description: "Enhancing group dynamics and interpersonal relations in the workplace." },
  { id: 4, category: "Workshops", title: "Parenting Modules", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200", description: "Empowering parents with positive reinforcement techniques." },
  { id: 5, category: "Corporate", title: "Soft Skills Seminar", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200", description: "Communication and conflict handling for professional excellence." },
  { id: 6, category: "Workshops", title: "Teacher Empowerment", src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1200", description: "Innovative teaching methods for modern classrooms." },
  { id: 7, category: "Counseling", title: "Adolescent Guidance", src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200", description: "Helping young adults navigate stress and academic challenges." },
  { id: 8, category: "Workshops", title: "Study Techniques", src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200", description: "Memory hacks and time management for competitive exams." },
  { id: 9, category: "Corporate", title: "Team Synergy", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200", description: "Psychological safety and collaboration in professional teams." },
];

const categories = ["All", "Workshops", "Counseling", "Corporate"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedImage]);

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
        .bento-item:nth-child(3n+1) { grid-column: span 1; }
        @media (min-width: 1024px) {
          .bento-item:nth-child(4n+1) { grid-column: span 2; }
        }
      `}} />

      <main className="force-google-sans min-h-screen bg-white text-slate-900">
        <Navbar />

        {/* EXUBERANT HERO */}
        <section className="bg-[#17144B] pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#552D30] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/20">
                Visual Impact
              </span>
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                Capturing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/40">
                  Transformation.
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl font-medium leading-relaxed">
                A visual narrative of our journey across schools, boardrooms, and private sessions.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER NAVIGATION */}
        <section className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-100 py-6">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                    activeFilter === cat 
                      ? "bg-[#17144B] text-white shadow-2xl shadow-blue-900/20 scale-105" 
                      : "bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO GRID GALLERY */}
        <section className="py-20 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                onClick={() => setSelectedImage(image)}
                className="bento-item group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-slate-100 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Dark Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17144B] via-[#17144B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                   <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{image.category}</p>
                      <h3 className="text-3xl font-bold text-white mb-4">{image.title}</h3>
                      <div className="w-12 h-12 rounded-full bg-white text-[#17144B] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Maximize2 size={20} />
                      </div>
                   </div>
                </div>

                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity">
                  <Camera size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX MODAL (Detailed View) */}
        {selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            <div 
              className="absolute inset-0 bg-[#17144B]/95 backdrop-blur-xl transition-opacity"
              onClick={() => setSelectedImage(null)}
            ></div>
            
            <div className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="relative w-full lg:w-3/5 h-[300px] lg:h-[600px]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="w-full lg:w-2/5 p-8 md:p-14 flex flex-col justify-center">
                <span className="text-[#552D30] font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                  Case Study: {selectedImage.category}
                </span>
                <h2 className="text-4xl font-bold text-[#17144B] mb-6 leading-tight">
                  {selectedImage.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {selectedImage.description}
                </p>

                <div className="space-y-6 mb-12">
                   <div className="flex items-center gap-4 text-slate-800">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <Target size={20} />
                      </div>
                      <span className="font-bold">Goal-Oriented Approach</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-800">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Zap size={20} />
                      </div>
                      <span className="font-bold">Measurable Progress</span>
                   </div>
                </div>

                <Link href="/contact" onClick={() => setSelectedImage(null)}>
                  <button className="w-full py-5 bg-[#17144B] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#552D30] transition-colors group">
                    Inquire About This Service <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM FEATURES */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { title: "Confidentiality", icon: <HeartPulse />, desc: "Client privacy is our absolute priority in every session." },
                { title: "Expertise", icon: <Zap />, desc: "Certified consultants with decades of combined experience." },
                { title: "Holistic", icon: <Sparkles />, desc: "Merging emotional health with professional development." },
                { title: "Community", icon: <Users />, desc: "Building a supportive ecosystem for mental wellness." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="text-[#552D30] mb-6">{item.icon}</div>
                  <h4 className="text-lg font-bold text-[#17144B] mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}