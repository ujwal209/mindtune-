"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Brain, 
  Compass, 
  HeartHandshake, 
  Menu, 
  X,
  Mail,
  Phone,
  Globe,
  MapPin,
  Star,
  Loader2,
  Check,
  TrendingUp,
  ImageIcon,
  Maximize2,
  XCircle
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define Gallery Item Interface
interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // -- FORM STATE --
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // -- GALLERY STATE --
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Enhanced Gallery Data
  const galleryImages: GalleryItem[] = [
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop",
      alt: "Corporate Workshop",
      category: "Workshops",
      title: "Interactive Team Learning",
      description: "A high-energy session focused on breaking down communication barriers and fostering cross-departmental collaboration through gamified learning experiences."
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      alt: "Executive Coaching",
      category: "Counseling",
      title: "One-on-One Guidance",
      description: "Personalized executive coaching session aimed at identifying leadership blind spots and developing actionable strategies for career advancement."
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      alt: "Team Building",
      category: "Soft Skills",
      title: "Building Synergy",
      description: "Outdoor team-building retreat designed to build trust and resilience among team members through problem-solving challenges."
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
      alt: "Seminar",
      category: "Events",
      title: "Leadership Seminars",
      description: "Large-scale industry seminar featuring keynote speeches on emotional intelligence in the modern workplace."
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop",
      alt: "Collaboration",
      category: "Soft Skills",
      title: "Effective Communication",
      description: "Intensive workshop on non-verbal communication, active listening, and conflict resolution for mid-level managers."
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
      alt: "Success",
      category: "Results",
      title: "Achieving Excellence",
      description: "Celebrating milestones and success stories with our partners, marking the completion of a year-long transformation program."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-[#552D30] selection:text-white">
      
      {/* --- PREMIUM NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-28 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center">
             <div className="relative h-20 w-auto aspect-[3.5/1]">
               <Image 
                 src="/logo.jpg" 
                 alt="Mind Tune Consultants" 
                 width={240} 
                 height={80}
                 className="object-contain object-left h-full w-auto"
                 priority
               />
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 text-sm font-bold tracking-wider text-slate-600 uppercase">
              <Link href="#services" className="hover:text-[#17144B] transition-colors relative group py-2">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#552D30] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#workshops" className="hover:text-[#17144B] transition-colors relative group py-2">
                Workshops
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#552D30] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#gallery" className="hover:text-[#17144B] transition-colors relative group py-2">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#552D30] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#counseling" className="hover:text-[#17144B] transition-colors relative group py-2">
                Counseling
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#552D30] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            
            <Link href="#contact">
              <Button className="bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full px-8 py-7 text-sm font-bold tracking-wide shadow-xl shadow-[#17144B]/20 transition-all hover:scale-105 hover:shadow-2xl">
                BOOK CONSULTATION
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#17144B]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white p-6 space-y-4 shadow-2xl absolute w-full left-0 z-50">
            <Link href="#services" className="block text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
            <Link href="#workshops" className="block text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>WORKSHOPS</Link>
            <Link href="#gallery" className="block text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>GALLERY</Link>
            <Link href="#counseling" className="block text-xl font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>COUNSELING</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#17144B] text-white mt-4 py-6 text-lg font-bold">BOOK CONSULTATION</Button>
            </Link>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden bg-[#17144B] pt-20 pb-32 md:py-32 lg:py-40">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#552D30] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-md px-5 py-2 text-sm font-bold text-blue-200 shadow-lg">
                <Star className="w-4 h-4 mr-2 text-yellow-400 fill-yellow-400" />
                Trusted by 1,200+ Professionals
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Master the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-rose-200">
                  Human Side
                </span> <br />
                of Success.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Go beyond technical expertise. We cultivate the essential soft skills, emotional intelligence, and leadership resilience that define true professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                <Link href="#services">
                  <Button className="h-14 bg-[#552D30] hover:bg-[#6d3a3d] text-white text-lg font-bold px-10 rounded-full shadow-lg shadow-[#552D30]/40 transition-all hover:scale-105">
                    Explore Programs
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="h-14 text-white border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#17144B] text-lg font-bold px-10 rounded-full transition-all hover:scale-105">
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-[#17144B] bg-slate-800 overflow-hidden relative shadow-lg">
                         <Image 
                            src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                            alt="User" 
                            fill
                            className="object-cover"
                         />
                      </div>
                    ))}
                 </div>
                 <p className="font-medium">Join our community</p>
              </div>
            </div>
            <div className="relative hidden lg:block h-[600px] w-full">
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <Image 
                   src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                   alt="Consulting Session"
                   fill
                   className="object-cover"
                   priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <TrendingUp className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-bold uppercase">Client Growth</p>
                    <p className="text-xl font-bold text-white">+145%</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-20 -right-6 bg-white p-5 rounded-2xl shadow-2xl">
                 <div className="flex items-center gap-1 mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400"/>)}
                 </div>
                 <p className="font-bold text-[#17144B]">"Life Changing Training"</p>
                 <p className="text-xs text-slate-500">- Corporate Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-white border-b border-slate-100 relative z-20">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
             {[
                { label: "Workshops Delivered", value: "500+", icon: Brain },
                { label: "Careers Guided", value: "1.2k+", icon: Compass },
                { label: "Corporate Partners", value: "40+", icon: Users },
                { label: "Satisfaction Rate", value: "98%", icon: Star },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center group cursor-default">
                  <div className="mb-5 p-4 bg-slate-50 rounded-full group-hover:bg-[#552D30]/10 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-[#552D30]" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-[#17144B] mb-2 tracking-tight">{stat.value}</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES / SERVICES --- */}
      <div className="py-24 space-y-32 container mx-auto px-4 md:px-6 overflow-hidden">
        
        {/* Feature 1: Soft Skills */}
        <section className="flex flex-col lg:flex-row gap-16 items-center" id="services">
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="w-16 h-16 rounded-3xl bg-[#17144B] flex items-center justify-center text-white shadow-xl shadow-blue-900/20 rotate-3">
              <Users size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#17144B] leading-[1.1]">
              Soft Skills & <br /><span className="text-[#552D30]">Life Skills Training</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              We cultivate the essential human skills for success—effective communication, emotional intelligence, and adaptability. Build confidence and enhance relationships in any environment.
            </p>
            <ul className="space-y-5 pt-2">
              {[
                "Interpersonal & Adaptive Skills",
                "Emotional Intelligence Leadership",
                "Conflict Resolution & Teamwork"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-[#552D30] h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button variant="outline" className="border-[#17144B] text-[#17144B] hover:bg-[#17144B] hover:text-white rounded-full px-8 py-6 text-lg mt-4 font-bold">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
               <Image 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
                alt="Soft Skills Training"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/80 via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-10 left-10 text-white max-w-sm">
                 <p className="font-bold text-3xl mb-2">Unlock Potential</p>
                 <p className="text-base text-slate-200">Strategies designed for modern professional challenges.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Workshops */}
        <section className="flex flex-col lg:flex-row gap-16 items-center" id="workshops">
          <div className="lg:w-1/2 w-full">
             <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
               <Image 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Immersive Workshops"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#552D30]/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 text-white max-w-sm">
                 <p className="font-bold text-3xl mb-2">Interactive Learning</p>
                 <p className="text-base text-slate-200">Hands-on exercises for immediate impact.</p>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="w-16 h-16 rounded-3xl bg-[#552D30] flex items-center justify-center text-white shadow-xl shadow-red-900/20 -rotate-3">
              <Brain size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#17144B] leading-[1.1]">
              Immersive <br /><span className="text-[#552D30]">Learning Workshops</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Engage in hands-on learning experiences designed for actionable results. Our workshops are interactive sessions that combine expert instruction with practical exercises.
            </p>
             <ul className="space-y-5 pt-2">
              {[
                "Interactive & Results-Driven",
                "Deep-Dive Skill Development",
                "Peer Collaboration & Networking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-[#17144B] h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button variant="outline" className="border-[#552D30] text-[#552D30] hover:bg-[#552D30] hover:text-white rounded-full px-8 py-6 text-lg mt-4 font-bold">
                View Schedule
              </Button>
            </Link>
          </div>
        </section>

        {/* Feature 3: Career Counseling */}
        <section className="flex flex-col lg:flex-row gap-16 items-center" id="career">
           <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="w-16 h-16 rounded-3xl bg-[#17144B] flex items-center justify-center text-white shadow-xl shadow-blue-900/20 rotate-3">
              <Compass size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#17144B] leading-[1.1]">
              Strategic <br /><span className="text-[#552D30]">Career Counseling</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Navigate your professional journey with clarity. We provide personalized guidance whether you're choosing a path, seeking advancement, or considering a pivot.
            </p>
             <ul className="space-y-5 pt-2">
              {[
                "Personalized Career Roadmap",
                "Resume & Interview Strategy",
                "Strengths & Values Assessment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-[#552D30] h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button variant="outline" className="border-[#17144B] text-[#17144B] hover:bg-[#17144B] hover:text-white rounded-full px-8 py-6 text-lg mt-4 font-bold">
                Get Guidance
              </Button>
            </Link>
          </div>
           <div className="lg:w-1/2 w-full order-1 lg:order-2">
             <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
               <Image 
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
                alt="Career Planning"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/80 via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-10 left-10 text-white max-w-sm">
                 <p className="font-bold text-3xl mb-2">Define Your Path</p>
                 <p className="text-base text-slate-200">Expert advice for every stage of your career.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Feature 4: Mental Wellness */}
        <section className="rounded-[3rem] overflow-hidden relative min-h-[600px] flex items-center justify-center text-center p-6 md:p-12 shadow-2xl" id="counseling">
          <Image 
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop" 
            alt="Mental Wellness"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#17144B]/70 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 max-w-5xl space-y-8">
            <div className="mx-auto w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-2xl">
              <HeartHandshake size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] drop-shadow-md">
              A Safe Space for <br /> Healing & Growth
            </h2>
            <p className="text-lg md:text-2xl text-slate-100 leading-relaxed font-light max-w-3xl mx-auto">
              Find a supportive and confidential space for your mental and emotional well-being. Our professional counseling services offer compassionate guidance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-16">
              {[
                { title: "Anxiety Relief", desc: "Evidence-based approaches to manage stress." },
                { title: "Confidential", desc: "100% private sessions with licensed pros." },
                { title: "Holistic", desc: "Focusing on your complete well-being." },
              ].map((card, i) => (
                <div key={i} className="bg-white/10 border border-white/10 text-white backdrop-blur-md p-8 rounded-3xl hover:bg-white/20 transition-all cursor-default hover:-translate-y-1">
                   <h4 className="font-bold text-2xl mb-3">{card.title}</h4>
                   <p className="text-base opacity-90 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* --- NEW GALLERY SECTION (Enhanced & Interactive) --- */}
      <section id="gallery" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center rounded-full bg-[#17144B]/10 px-4 py-1.5 text-sm font-bold text-[#17144B] mb-2">
              <ImageIcon className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#17144B]">Moments of Transformation</h2>
            <p className="text-lg text-slate-600">
              A glimpse into the workshops, sessions, and events where we help individuals and teams unlock their true potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:shadow-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/90 via-[#17144B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content Reveal on Hover */}
                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-300 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-bold text-[#17144B] bg-white px-2 py-1 rounded inline-block mb-2 uppercase tracking-wide">{image.category}</p>
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMAGE LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
          <div 
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button 
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <XCircle size={32} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px] md:h-[600px] w-full">
                <Image 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="inline-block px-3 py-1 rounded-full bg-[#17144B]/10 text-[#17144B] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                  {selectedImage.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#17144B] mb-6">{selectedImage.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedImage.description}
                </p>
                <div className="mt-auto">
                  <Button 
                    className="bg-[#552D30] hover:bg-[#6d3a3d] text-white rounded-full px-8 py-6 w-full md:w-auto"
                    onClick={() => {
                      setSelectedImage(null);
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Inquire About This Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- CTA / FORM SECTION --- */}
      <section id="contact" className="py-32 bg-[#17144B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#552D30] rounded-full mix-blend-screen filter blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ready to Start <br /> Your Journey?
              </h2>
              <p className="text-blue-100 text-xl leading-relaxed max-w-lg">
                Whether you need to upskill your team, find your dream career, or seek personal clarity, Mind Tune Consultants are here to guide you.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm">
                    <CheckCircle2 size={32} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">Expert Guidance</h4>
                    <p className="text-blue-200">Led by certified professionals.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                   <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg backdrop-blur-sm">
                    <CheckCircle2 size={32} className="text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">Flexible Scheduling</h4>
                    <p className="text-blue-200">Online and in-person sessions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-slate-900 shadow-2xl rounded-[2.5rem] p-8 border-none">
              <CardHeader className="pb-6">
                <CardTitle className="text-4xl text-[#17144B]">Get in Touch</CardTitle>
                <CardDescription className="text-slate-500 text-lg">Fill out the form below and we&apos;ll contact you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name" 
                        required
                        className="h-14 bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-[#17144B] rounded-xl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name" 
                        required
                        className="h-14 bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-[#17144B] rounded-xl" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      required
                      className="h-14 bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-[#17144B] rounded-xl" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      required
                      className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-[#17144B] min-h-[160px] rounded-xl resize-none p-4" 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={loading || success}
                    className={`w-full h-16 text-white text-xl font-bold rounded-xl transition-all ${
                      success 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-[#552D30] hover:bg-[#6d3a3d] hover:scale-[1.02]"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Sending...</span>
                    ) : success ? (
                      <span className="flex items-center gap-2"><Check /> Message Sent!</span>
                    ) : (
                      <span className="flex items-center gap-2">Send Message <ArrowRight size={20} /></span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#0B0A24] text-slate-300 py-24 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              
              {/* Footer Logo */}
              <div className="flex items-center gap-3">
                 <div className="relative h-16 w-auto min-w-[120px] bg-white rounded-lg p-2 inline-block">
                   <Image 
                     src="/logo.jpg" 
                     alt="Mind Tune Consultants" 
                     width={150} 
                     height={50}
                     className="object-contain object-left h-full w-auto"
                   />
                 </div>
              </div>

              <p className="text-base leading-relaxed text-slate-400 max-w-sm">
                Empowering individuals and organizations through soft skills training, workshops, and professional counseling. Transform your potential today.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-8">Services</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link href="#services" className="hover:text-white transition-colors flex items-center group"><span className="w-1.5 h-1.5 bg-[#552D30] group-hover:bg-white rounded-full mr-3 transition-colors"></span>Soft Skills Training</Link></li>
                <li><Link href="#workshops" className="hover:text-white transition-colors flex items-center group"><span className="w-1.5 h-1.5 bg-[#552D30] group-hover:bg-white rounded-full mr-3 transition-colors"></span>Corporate Workshops</Link></li>
                <li><Link href="#career" className="hover:text-white transition-colors flex items-center group"><span className="w-1.5 h-1.5 bg-[#552D30] group-hover:bg-white rounded-full mr-3 transition-colors"></span>Career Counseling</Link></li>
                <li><Link href="#counseling" className="hover:text-white transition-colors flex items-center group"><span className="w-1.5 h-1.5 bg-[#552D30] group-hover:bg-white rounded-full mr-3 transition-colors"></span>Mental Wellness</Link></li>
              </ul>
            </div>
            
            {/* UPDATED CONTACT INFO */}
            <div>
              <h4 className="text-white font-bold text-lg mb-8">Contact</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-[#552D30]" /> 
                  <a href="mailto:mindtuneintl@gmail.com" className="hover:text-white transition-colors">mindtuneintl@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-[#552D30]" /> 
                  <span className="flex flex-col">
                    <a href="tel:9844085292" className="hover:text-white transition-colors">9844085292</a>
                    <a href="tel:9449458914" className="hover:text-white transition-colors">9449458914</a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe size={18} className="mt-0.5 text-[#552D30]" /> 
                  <a href="http://www.mindtuneconsultants.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.mindtuneconsultants.com</a>
                </li>
                 <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-[#552D30]" /> Bengaluru, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Mind Tune Consultants. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}