"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Star, ChevronLeft, ChevronRight, Brain, Compass, Users, 
  HeartHandshake, CheckCircle2, ArrowRight, ImageIcon, ArrowUpRight, 
  X, Loader2, Check, Mail, Activity, BookOpen, Sparkles, Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==========================================
// 1. HERO SECTION (UPGRADED)
// ==========================================
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000",
      title: "Master the Human Side of Success",
      subtitle: "Cultivating essential soft skills, psycho-social abilities, and leadership resilience for a productive life.",
      badge: "Mind Tune Consultants"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000",
      title: "Transform Potential into Performance",
      subtitle: "Immersive workshops, corporate trainings, and our signature 'EMPOWER' year-long student program.",
      badge: "Actionable Learning"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000",
      title: "Professional Counselling & Therapy",
      subtitle: "Highly trained individuals helping you see things clearly, facilitating positive change with complete confidentiality.",
      badge: "Confidential Support"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, heroImages.length]);

  const handleSlideChange = (newIndex: number) => {
    if (isAnimating || newIndex === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => handleSlideChange((currentSlide + 1) % heroImages.length);
  const prevSlide = () => handleSlideChange((currentSlide - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex items-center overflow-hidden bg-[#0a0826]">
      {/* Dynamic Background Images & Overlays */}
      {heroImages.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <Image src={img.src} alt={img.title} fill className="object-cover object-center" priority={index === 0} />
          
          {/* Strict Brand Color Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#17144B]/95 via-[#17144B]/70 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0826] via-[#17144B]/20 to-transparent opacity-90"></div>
          
          {/* Exuberant Floating Brand Orbs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#552D30]/40 rounded-full blur-[150px] animate-pulse pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#17144B]/80 rounded-full blur-[120px] animate-pulse delay-700 pointer-events-none"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 pb-16 md:pb-20 pt-16">
        <div className="max-w-3xl">
          {/* Premium Glassmorphism Card */}
          <div 
            key={currentSlide} 
            className="relative animate-in slide-in-from-bottom-12 fade-in duration-1000 ease-out fill-mode-forwards backdrop-blur-2xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_0_50px_rgba(23,20,75,0.5)] overflow-hidden"
          >
            {/* Inner Card Glows */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#552D30]/50 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#17144B]/50 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-[#552D30]/40 bg-[#552D30]/20 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-[11px] font-black text-white tracking-[0.2em] uppercase mb-6 md:mb-8 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 mr-2 text-[#e09196]" />
                {heroImages[currentSlide].badge}
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-2xl">
                {heroImages[currentSlide].title.split(' ').map((word, i) => {
                  const isHighlight = ['success', 'performance', 'therapy'].includes(word.toLowerCase());
                  return (
                    <span 
                      key={i} 
                      className={isHighlight 
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#e09196] to-[#a65d63] drop-shadow-[0_0_15px_rgba(85,45,48,0.6)] relative inline-block" 
                        : ""}
                    >
                      {word}{" "}
                      {/* Subtle underline for highlighted words */}
                      {isHighlight && (
                        <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-1.5 bg-[#552D30]/60 rounded-full blur-[1px]"></span>
                      )}
                    </span>
                  );
                })}
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl mb-8 md:mb-10 leading-relaxed font-light opacity-90 border-l-4 border-[#552D30] pl-5 sm:pl-6 bg-gradient-to-r from-white/5 to-transparent py-1 sm:py-2 rounded-r-xl">
                {heroImages[currentSlide].subtitle}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#services" className="w-full sm:w-auto group">
                  <Button className="w-full h-14 bg-gradient-to-r from-[#552D30] to-[#7a4045] hover:from-[#3d1f22] hover:to-[#552D30] text-white text-[13px] md:text-sm font-bold tracking-wide px-8 rounded-full shadow-[0_8px_25px_rgba(85,45,48,0.5)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_30px_rgba(85,45,48,0.6)]">
                    Explore Programs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#contact" className="w-full sm:w-auto group">
                  <Button variant="outline" className="w-full h-14 border-white/20 bg-white/5 backdrop-blur-md hover:bg-[#17144B] hover:border-[#17144B] text-white text-[13px] md:text-sm font-bold tracking-wide px-8 rounded-full transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upgraded Sleek Slider Controls */}
      <div className="absolute bottom-6 md:bottom-10 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-30 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Progress Bars */}
        <div className="flex gap-2 sm:gap-3 w-full md:w-auto">
          {heroImages.map((_, index) => (
            <button 
              key={index} 
              onClick={() => handleSlideChange(index)}
              className="relative h-1.5 flex-1 md:w-16 rounded-full bg-white/10 overflow-hidden cursor-pointer group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div 
                className={`absolute top-0 left-0 h-full transition-all ease-linear ${
                  index === currentSlide 
                    ? "bg-gradient-to-r from-[#a65d63] to-[#552D30] w-full duration-[6000ms]" 
                    : "bg-white/40 w-0 duration-300 group-hover:w-full group-hover:bg-white/60"
                } ${index < currentSlide ? "bg-[#552D30] w-full" : ""}`}
              />
            </button>
          ))}
        </div>
        
        {/* Navigation Arrows (Hidden on very small screens, visible on md+) */}
        <div className="hidden md:flex gap-3 bg-[#17144B]/40 backdrop-blur-xl border border-white/10 p-2 rounded-full shadow-2xl">
          <button onClick={prevSlide} className="p-3 rounded-full text-white/70 hover:bg-[#552D30] hover:text-white transition-all duration-300">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full text-white/70 hover:bg-[#552D30] hover:text-white transition-all duration-300">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. STATS SECTION (OVERLAPPING DESIGN)
// ==========================================
function StatsSection() {
  const stats = [
    { label: "Core Life Skills (WHO)", value: "10", icon: Brain },
    { label: "Types of Therapies", value: "8+", icon: HeartHandshake },
    { label: "Workshop Modules", value: "15+", icon: BookOpen },
    { label: "Commitment to Growth", value: "100%", icon: Star },
  ];

  return (
    <section className="relative z-30 px-6 md:px-12 -mt-16 md:-mt-24 mb-16">
      <div className="container mx-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-white shadow-[0_20px_40px_-15px_rgba(23,20,75,0.1)] rounded-[2rem] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center md:divide-x md:divide-slate-200">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group cursor-default px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#17144B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10"></div>
                <div className="mb-5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md group-hover:border-[#552D30]/30 transition-all duration-500 group-hover:-translate-y-2">
                  <stat.icon className="w-8 h-8 text-[#552D30] transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[#17144B] mb-2 tracking-tight group-hover:text-[#552D30] transition-colors">{stat.value}</h3>
                <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. SERVICES SECTION (ENHANCED)
// ==========================================
function ServicesSection() {
  return (
    <div className="relative py-20 md:py-32 space-y-32 md:space-y-40 bg-[#fafafa] overflow-hidden">
      {/* Exuberant Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[#17144B]/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-[40%] -right-[10%] w-[700px] h-[700px] bg-gradient-to-tl from-[#552D30]/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-gradient-to-tr from-[#17144B]/5 to-[#552D30]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Soft Skills & Life Skills */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" id="services">
          <div className="space-y-8 order-2 lg:order-1 relative">
            <div className="absolute -left-10 top-10 w-20 h-20 bg-[#552D30]/10 rounded-full blur-2xl"></div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-[#17144B] text-[11px] font-bold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#17144B] animate-pulse"></span>
              Personal Development
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#17144B] leading-[1.1] tracking-tight">
              Life Skills & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#552D30] to-[#8a494e]">Soft Skills</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-normal max-w-lg">
              <strong>Life skills</strong> are psycho-social abilities that help you make informed decisions and develop coping mechanisms. <strong>Soft skills</strong> characterize your interpersonal relationships, complementing your occupational knowledge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 pt-2">
              {[
                "Communication & Listening", "Interpersonal Relations", 
                "Conflict Handling", "Empathy & People Skills", 
                "Critical Thinking", "Interview & Public Speaking"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#552D30]/10 flex items-center justify-center group-hover:bg-[#552D30] group-hover:text-white transition-colors">
                    <Check size={14} strokeWidth={3} className="text-[#552D30] group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#contact" className="inline-block pt-6">
              <Button className="h-14 px-8 bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full text-sm font-bold tracking-wide hover:-translate-y-1 transition-all shadow-[0_10px_20px_rgba(23,20,75,0.2)] hover:shadow-[0_15px_30px_rgba(23,20,75,0.3)] group">
                Enhance Your Skills <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#17144B]/20 to-[#552D30]/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070" alt="Soft Skills Training" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/80 via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-[280px] hidden md:block border border-white/50 animate-bounce" style={{animationDuration: '4s'}}>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#552D30]/10 rounded-xl">
                  <Users className="text-[#552D30]" size={24} strokeWidth={2.5} />
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Impact</div>
              </div>
              <p className="text-[#17144B] font-bold text-lg leading-snug">Empowering individuals for a healthy, productive life.</p>
            </div>
          </div>
        </section>

        {/* Workshops & EMPOWER Program */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-10" id="workshops">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-bl from-[#552D30]/20 to-[#17144B]/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-700 group-hover:scale-[1.02]">
              <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Workshops" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#552D30]/80 via-transparent to-transparent opacity-60"></div>
              {/* Play Button Overlay Concept */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50 transition-colors shadow-xl border border-white/50 group-hover:scale-110 duration-500">
                  <Play className="text-white ml-2" size={32} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#17144B] leading-[1.1] tracking-tight">
              Workshops & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17144B] to-[#3a3585]">EMPOWER Program</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed font-normal">
              We conduct diverse workshops including Corporate Trainings, Positive Parenting, Teacher's Workshops, and Positive Nursing.
              <br /><br />
              <strong className="text-[#17144B] bg-[#17144B]/5 px-2 py-1 rounded">EMPOWER</strong> is our year-long program based on the ten core life skills identified by the <strong>WHO</strong>, guiding students through a fantastic journey of self-discovery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Corporate & Teacher Trainings", "Positive Nursing & Parenting", 
                "Career & Stress Management", "Team Work & Leadership"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CheckCircle2 className="text-[#552D30] mt-0.5" size={22} strokeWidth={2.5} shrink-0 />
                  <span className="font-bold text-slate-700 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#contact" className="inline-block pt-6">
              <Button variant="outline" className="h-14 px-8 border-2 border-[#552D30] text-[#552D30] rounded-full text-sm font-bold tracking-wide hover:bg-[#552D30] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_10px_20px_rgba(85,45,48,0.3)] hover:-translate-y-1">
                Inquire About Workshops
              </Button>
            </Link>
          </div>
        </section>

        {/* Counselling and Therapies - Epic Dark Section */}
        <section className="relative group mt-32" id="counseling">
          {/* Animated Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#17144B] to-[#0a0826] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#552D30]/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#552D30]/30 transition-colors duration-1000"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2a266e]/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
          </div>
          
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden border border-white/10">
            <Image src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070" alt="Counseling" fill className="object-cover mix-blend-overlay opacity-20 group-hover:opacity-30 transition-opacity duration-1000" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <div className="h-20 w-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <HeartHandshake size={40} strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Professional <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Counselling & Therapy</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl leading-relaxed opacity-90">
                A highly trained professional counselor helps you see things more clearly, focusing on feelings, experiences, and behavior to facilitate positive change with complete confidentiality.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-12 md:mt-16">
                {[
                  { 
                    title: "Behavioral Therapies", 
                    desc: "Cognitive Behavior Therapy (CBT), Behavior Modification, and Psychotherapy.", 
                    icon: <Brain size={28} strokeWidth={1.5} /> 
                  },
                  { 
                    title: "Relationship Support", 
                    desc: "Specialized Couples therapy, Marital counseling, and Family therapy.", 
                    icon: <Users size={28} strokeWidth={1.5} /> 
                  },
                  { 
                    title: "Personal Counseling", 
                    desc: "Stress management, Career counseling, Adolescent problems, and Study Techniques.", 
                    icon: <Compass size={28} strokeWidth={1.5} /> 
                  }
                ].map((card, i) => (
                  <div key={i} className="group/card bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl text-left hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    
                    <div className="text-[#17144B] mb-6 p-4 bg-white w-fit rounded-2xl shadow-lg">
                      {card.icon}
                    </div>
                    <h4 className="text-white font-bold text-xl mb-3">{card.title}</h4>
                    <p className="text-slate-400 text-base leading-relaxed font-normal">{card.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="#contact" className="pt-12">
                <Button className="h-16 px-10 bg-white text-[#17144B] hover:bg-slate-100 rounded-full text-base font-extrabold tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 hover:scale-105 group">
                  Book a Private Session <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// ==========================================
// 4. GALLERY SECTION (MASONRY-STYLE VIBE)
// ==========================================
interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  size: "large" | "tall" | "standard";
}

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryImages: GalleryItem[] = [
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
      alt: "Corporate Workshop",
      category: "Corporate Training",
      title: "Interactive Team Learning",
      description: "High-energy sessions focused on breaking down communication barriers and building trust within corporate teams.",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000",
      alt: "Executive Coaching",
      category: "Counselling",
      title: "Professional Guidance",
      description: "One-on-one sessions helping clients to see things clearly and facilitate positive change.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      alt: "Team Building",
      category: "EMPOWER Program",
      title: "Student Self-Discovery",
      description: "Our year-long WHO-based program providing a platform for students to enhance motivation and self-confidence.",
      size: "tall"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000",
      alt: "Seminar",
      category: "Workshops",
      title: "Teacher & Nursing Workshops",
      description: "Specialized workshops tailored for educators and our 'Positive Nursing' program for healthcare professionals.",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000",
      alt: "Collaboration",
      category: "Therapies",
      title: "Group & Expressive Therapy",
      description: "Safe, confidential spaces for shared learning, expressive healing, and cognitive behavior therapy (CBT).",
      size: "standard"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000",
      alt: "Success",
      category: "Results",
      title: "Achieving Excellence",
      description: "Celebrating positive transformations, improved relationships, and successful stress management.",
      size: "standard"
    }
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-[#17144B] text-[11px] font-bold tracking-[0.2em] uppercase">
              <ImageIcon size={14} className="text-[#552D30]" strokeWidth={2.5} />
              Visual Journey
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#17144B] leading-[1.1] tracking-tight">
              Moments of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#552D30] to-[#8a494e]">Transformation</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 font-normal max-w-sm border-l-4 border-[#552D30] pl-6 leading-relaxed bg-gradient-to-r from-slate-50 to-transparent py-2">
            A glimpse into the interactive workshops and counseling environments where we unlock true human potential.
          </p>
        </div>

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
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${sizeClasses[image.size]}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0826]/90 via-[#17144B]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                {/* Decorative border frame on hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-xl transition-colors duration-500 z-10 pointer-events-none"></div>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {image.category}
                  </span>
                  <div className="flex justify-between items-end gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug drop-shadow-lg">{image.title}</h3>
                    <div className="h-12 w-12 shrink-0 rounded-full bg-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-xl group-hover:scale-110">
                      <ArrowUpRight className="text-[#552D30]" size={22} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-[#0a0826]/95 backdrop-blur-lg animate-in fade-in duration-300" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-all z-50 p-3 rounded-full hover:bg-white/10 hover:rotate-90 duration-300 bg-white/5 backdrop-blur-md" aria-label="Close gallery">
            <X size={32} strokeWidth={2} />
          </button>
          <div className="relative w-full max-w-6xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-[1.2] h-[45%] md:h-full bg-slate-100">
              <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-cover" priority />
            </div>
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white overflow-y-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#552D30]/10 text-[#552D30] text-[11px] font-extrabold tracking-[0.2em] uppercase mb-6 w-fit border border-[#552D30]/20">
                {selectedImage.category}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#17144B] leading-[1.1] tracking-tight mb-6">
                {selectedImage.title}
              </h3>
              <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed mb-10 border-l-2 border-slate-200 pl-4">
                {selectedImage.description}
              </p>
              <Button 
                className="h-16 px-10 bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full text-base font-bold tracking-wide transition-all shadow-[0_10px_20px_rgba(23,20,75,0.2)] w-full sm:w-fit hover:-translate-y-1 group"
                onClick={() => {
                  setSelectedImage(null);
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
                }}
              >
                Inquire About Sessions <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ==========================================
// 5. CONTACT SECTION (PREMIUM LOOK)
// ==========================================
function ContactSection() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMsg("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      {/* Exuberant Glowing Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#17144B]/10 via-[#17144B]/5 to-transparent rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#552D30]/10 via-[#552D30]/5 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-10 md:space-y-14">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-[#17144B] text-[11px] font-bold tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Contact Us
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#17144B] leading-[1.05] tracking-tight">
                Ready to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#552D30] to-[#8a494e]">Connect?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 font-normal max-w-md leading-relaxed border-l-4 border-[#552D30] pl-6 bg-gradient-to-r from-slate-100 to-transparent py-2">
                Whether you're looking to transform your team, enroll in EMPOWER, or find personal clarity, our experts are ready to listen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { icon: <Activity size={24} strokeWidth={2} />, title: "Specialized Therapies", desc: "CBT, Behavior Modification & more." },
                { icon: <Mail size={24} strokeWidth={2} />, title: "Direct Support", desc: "Response within 24 business hours." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#17144B] shadow-sm group-hover:bg-[#17144B] group-hover:text-white group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#17144B] leading-tight mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            {/* Ambient Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#17144B] to-[#552D30] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <Card className="relative bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-[2.5rem] p-4 md:p-10 transition-transform duration-500 hover:scale-[1.01]">
              <CardHeader className="space-y-3 pb-8 text-center sm:text-left">
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-[#17144B] tracking-tight">Send a Message</CardTitle>
                <CardDescription className="text-base text-slate-500 font-normal">
                  Confidential, professional, and entirely secure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#17144B] ml-1">First Name</label>
                      <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jane" required className="h-14 bg-slate-50/80 border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B]/20 focus-visible:border-[#17144B] rounded-xl px-5 shadow-inner transition-all text-base" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#17144B] ml-1">Last Name</label>
                      <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required className="h-14 bg-slate-50/80 border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B]/20 focus-visible:border-[#17144B] rounded-xl px-5 shadow-inner transition-all text-base" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#17144B] ml-1">Email Address</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" required className="h-14 bg-slate-50/80 border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B]/20 focus-visible:border-[#17144B] rounded-xl px-5 shadow-inner transition-all text-base" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#17144B] ml-1">Your Inquiry</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you today?" required className="bg-slate-50/80 border-slate-200 text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B]/20 focus-visible:border-[#17144B] min-h-[140px] rounded-xl resize-none p-5 shadow-inner transition-all text-base" />
                  </div>
                  {errorMsg && <p className="text-red-500 text-sm font-bold px-1 bg-red-50 p-3 rounded-lg border border-red-100">{errorMsg}</p>}
                  
                  <Button 
                    type="submit" 
                    disabled={loading || success} 
                    className={`w-full h-16 text-white text-base tracking-wide font-extrabold rounded-full transition-all duration-300 shadow-xl ${success ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gradient-to-r from-[#17144B] to-[#2a266e] hover:from-[#2a266e] hover:to-[#17144B] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(23,20,75,0.3)]"}`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-3"><Loader2 className="animate-spin" size={20} /> Processing...</span>
                    ) : success ? (
                      <span className="flex items-center gap-3"><Check size={20} /> Message Sent Successfully</span>
                    ) : (
                      <span className="flex items-center gap-3">Send Inquiry <ArrowRight size={20} /></span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN PAGE EXPORT
// ==========================================
export default function Home() {
  return (
    <>
      {/* GLOBAL FONT INJECTION */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        
        .force-google-sans, .force-google-sans * {
          font-family: 'Google Sans', 'Product Sans', sans-serif !important;
        }
      `}} />

      <main className="force-google-sans min-h-screen bg-white text-slate-900 selection:bg-[#552D30] selection:text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}