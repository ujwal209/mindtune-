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
  MapPin,
  Globe,
  Star
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

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-[#552D30] selection:text-white">
      
      {/* --- NAVIGATION (Solid White) --- */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
             <div className="relative h-16 w-auto aspect-[3/1]">
               <Image 
                 src="/logo.jpg" 
                 alt="Mind Tune Consultants" 
                 width={180} 
                 height={60}
                 className="object-contain object-left h-full w-auto"
                 priority
               />
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="#services" className="hover:text-[#17144B] transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17144B] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#workshops" className="hover:text-[#17144B] transition-colors relative group">
              Workshops
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17144B] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#counseling" className="hover:text-[#17144B] transition-colors relative group">
              Counseling
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17144B] transition-all group-hover:w-full"></span>
            </Link>
            
            {/* FIXED: Link to #contact section */}
            <Link href="#contact">
              <Button className="bg-[#17144B] hover:bg-[#17144B]/90 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-[#17144B]/20 transition-all hover:scale-105">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white p-6 space-y-4 shadow-2xl absolute w-full left-0 z-50">
            <Link href="#services" className="block text-lg font-medium text-slate-700" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#workshops" className="block text-lg font-medium text-slate-700" onClick={() => setIsMenuOpen(false)}>Workshops</Link>
            <Link href="#counseling" className="block text-lg font-medium text-slate-700" onClick={() => setIsMenuOpen(false)}>Counseling</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#17144B] text-white size-lg mt-4 py-6 text-lg">Book Consultation</Button>
            </Link>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#17144B]">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Mind Tune Consultants Hero"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#17144B] via-[#17144B]/95 to-[#552D30]/90"></div>
          
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#552D30]/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center py-20">
          
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2 text-sm font-medium text-blue-100 mb-8 shadow-xl">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-400 mr-3 animate-pulse shadow-[0_0_15px_#60A5FA]"></span>
            Transforming Potential into Performance
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 max-w-6xl leading-[1.1] drop-shadow-sm">
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-pink-200">Human Side</span> <br className="hidden md:block"/>
            of True Success.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mb-12 leading-relaxed font-light opacity-90">
            We move beyond technical expertise to cultivate essential skills. 
            Unlock confidence, resilience, and leadership with Mind Tune Consultants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link href="#services">
              <Button size="lg" className="h-16 w-full sm:w-auto bg-[#552D30] hover:bg-[#6d3a3d] text-white text-lg font-semibold px-10 rounded-full shadow-2xl shadow-[#552D30]/40 transition-all hover:scale-105 hover:-translate-y-1">
                Explore Programs
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="h-16 w-full sm:w-auto text-white border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#17144B] text-lg font-semibold px-10 rounded-full transition-all hover:scale-105 hover:-translate-y-1">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-20 flex flex-col items-center gap-4 text-sm text-slate-400 animate-in fade-in slide-in-from-bottom-8 duration-1000">
             <div className="flex -space-x-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#17144B] bg-slate-800 overflow-hidden relative shadow-lg">
                     <Image 
                        src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                        alt="User" 
                        fill
                        className="object-cover"
                     />
                  </div>
                ))}
              </div>
              <p className="font-medium tracking-wide">Trusted by <span className="text-white font-bold">1,200+</span> professionals worldwide</p>
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
                <li key={i} className="flex items-center gap-4 text-slate-700 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-[#552D30] h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button variant="outline" className="border-[#17144B] text-[#17144B] hover:bg-[#17144B] hover:text-white rounded-full px-8 py-6 text-lg mt-4">
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
                <li key={i} className="flex items-center gap-4 text-slate-700 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-[#17144B] h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button variant="outline" className="border-[#552D30] text-[#552D30] hover:bg-[#552D30] hover:text-white rounded-full px-8 py-6 text-lg mt-4">
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
                <li key={i} className="flex items-center gap-4 text-slate-700 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-[#552D30] h-6 w-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact">
              <Button variant="outline" className="border-[#17144B] text-[#17144B] hover:bg-[#17144B] hover:text-white rounded-full px-8 py-6 text-lg mt-4">
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

        {/* Feature 4: Mental Wellness (Parallax-style Card) */}
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

      {/* --- CTA / FORM SECTION (Added ID for Scrolling) --- */}
      <section id="contact" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#552D30] rounded-full mix-blend-screen filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ready to Start <br /> Your Journey?
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
                Whether you need to upskill your team, find your dream career, or seek personal clarity, Mind Tune Consultants are here to guide you.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-[#17144B] border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle2 size={32} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">Expert Guidance</h4>
                    <p className="text-slate-400">Led by certified professionals.</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                   <div className="w-16 h-16 rounded-full bg-[#17144B] border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <CheckCircle2 size={32} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl">Flexible Scheduling</h4>
                    <p className="text-slate-400">Online and in-person sessions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white shadow-2xl rounded-3xl p-4">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl">Get in Touch</CardTitle>
                <CardDescription className="text-slate-400 text-lg">Fill out the form below and we&apos;ll contact you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Input placeholder="First Name" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#552D30] focus-visible:border-[#552D30]" />
                    </div>
                    <div className="space-y-2">
                      <Input placeholder="Last Name" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#552D30] focus-visible:border-[#552D30]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Email Address" type="email" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#552D30] focus-visible:border-[#552D30]" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="How can we help you?" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus-visible:ring-[#552D30] focus-visible:border-[#552D30] min-h-[140px]" />
                  </div>
                  <Button className="w-full h-14 bg-[#552D30] hover:bg-[#6d3a3d] text-white text-xl font-bold rounded-xl transition-all hover:scale-[1.02]">
                    Send Message <ArrowRight size={20} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050412] text-slate-300 py-24 border-t border-slate-800">
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

              <p className="text-base leading-relaxed text-slate-500 max-w-sm">
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
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
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