"use client";

import React from "react";
import Image from "next/image";
import { 
  Target, Eye, Award, CheckCircle2, Heart, 
  Sparkles, ShieldCheck, Zap, Globe, Users 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
        .text-gradient { background: linear-gradient(to right, #17144B, #552D30); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}} />

      <main className="force-google-sans min-h-screen bg-white text-slate-900">
        <Navbar />

        {/* 1. EXUBERANT HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-slate-50 to-white -z-10"></div>
          <div className="container mx-auto px-6 md:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Our Essence
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-[#17144B]">
              Tuning Minds.<br />
              <span className="text-gradient">Transforming Lives.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
              Mind Tune Consultants is a premier consultancy dedicated to psychological wellness, 
              life-skill empowerment, and professional excellence.
            </p>
            <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" 
                alt="Mind Tune Vision" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/60 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* 2. VISION & MISSION (Bento Style) */}
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-[#17144B] p-12 md:p-16 rounded-[3.5rem] text-white flex flex-col justify-between group hover:bg-[#1e1a5e] transition-colors duration-500">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                <Eye size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To be the global benchmark in mental wellness and life-skill training, fostering a society 
                  where every individual possesses the emotional resilience and psychological tools to 
                  lead a healthy, productive, and balanced life.
                </p>
              </div>
            </div>

            <div className="bg-[#552D30] p-12 md:p-16 rounded-[3.5rem] text-white flex flex-col justify-between group hover:bg-[#633538] transition-colors duration-500">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-10">
                <Target size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  To empower students, professionals, and families through scientifically-backed life skills, 
                  professional counseling, and innovative training modules that bridge the gap between 
                  potential and performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE PHILOSOPHY (The WHO standard) */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] mb-6">Built on Global Standards</h2>
              <p className="text-lg text-slate-600">
                Our programs are rooted in the World Health Organization's (WHO) 1993 definition of life skills: 
                <span className="italic font-bold"> "the abilities for adaptive and positive behavior."</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Clinical Precision", 
                  desc: "Unlike casual advice, our counseling is handled by highly trained professionals providing clinical-grade therapies.",
                  icon: <ShieldCheck className="text-blue-600" />
                },
                { 
                  title: "Self-Discovery", 
                  desc: "Programs like 'EMPOWER' act as a year-long journey of self-transformation and confidence building.",
                  icon: <Sparkles className="text-amber-500" />
                },
                { 
                  title: "Holistic Training", 
                  desc: "From soft skills in the boardroom to stress management in schools, we cover the full spectrum of human behavior.",
                  icon: <Globe className="text-green-600" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-sm hover:shadow-xl transition-all">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#17144B] mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE MIND TUNE ADVANTAGE (Stats/Values) */}
        <section className="py-32 container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
               <h2 className="text-5xl font-bold text-[#17144B] mb-8 leading-tight">
                 Why Professionals <br />
                 <span className="text-[#552D30]">Choose Mind Tune</span>
               </h2>
               <div className="space-y-8">
                  {[
                    "Confidentiality Guaranteed",
                    "Evidence-Based Therapeutic Modules",
                    "Customized Grade-wise School Programs",
                    "Corporate Soft-Skills Excellence",
                    "Certified Expert Facilitators"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="font-bold text-slate-700">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-[#17144B]/5 p-10 rounded-[3rem] text-center space-y-2 translate-y-8">
                <p className="text-4xl font-black text-[#17144B]">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Core Life Skills</p>
              </div>
              <div className="bg-[#552D30]/5 p-10 rounded-[3rem] text-center space-y-2">
                <p className="text-4xl font-black text-[#552D30]">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Confidentiality</p>
              </div>
              <div className="bg-[#17144B]/5 p-10 rounded-[3rem] text-center space-y-2 translate-y-8">
                <p className="text-4xl font-black text-[#17144B]">Year-Long</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Support Programs</p>
              </div>
              <div className="bg-[#552D30]/5 p-10 rounded-[3rem] text-center space-y-2">
                <p className="text-4xl font-black text-[#552D30]">Expert</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Counsellors</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TEAM CALLOUT SECTION */}
        <section className="py-24 bg-[#17144B] rounded-[4rem] mx-6 md:mx-12 mb-24 overflow-hidden relative">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="container mx-auto px-12 relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-8">
                <Award size={40} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Led by Experts</h2>
              <p className="text-slate-300 text-lg max-w-2xl mb-12">
                Our team consists of highly trained psychologists and certified life-skill trainers 
                who understand that positive change requires more than just advice—it requires 
                scientific guidance and empathy.
              </p>
              <Link href="/contact">
                <button className="px-12 py-5 bg-white text-[#17144B] rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#552D30] hover:text-white transition-all shadow-2xl">
                  Work With Our Experts
                </button>
              </Link>
           </div>
        </section>

        <Footer />
      </main>
    </>
  );
}