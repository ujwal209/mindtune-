"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Brain, HeartHandshake, CheckCircle2, ShieldCheck, 
  UserPlus, Users, Sparkles, MessageSquare, ArrowRight, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CounsellingPage() {
  const counsellingServices = [
    { title: "Behavioral issues", icon: <Brain size={24} /> },
    { title: "Stress management", icon: <HeartHandshake size={24} /> },
    { title: "Adolescent problems", icon: <UserPlus size={24} /> },
    { title: "Career counseling", icon: <Sparkles size={24} /> },
    { title: "Marital counseling", icon: <Users size={24} /> },
    { title: "Study Techniques", icon: <MessageSquare size={24} /> },
  ];

  const therapies = [
    "Psychotherapy", "Couples therapy", "Family therapy", 
    "Cognitive behavior therapy", "Behavior modification therapy", 
    "Client-centered therapy", "Expressive therapy", "Group therapy"
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
      `}} />

      <main className="force-google-sans min-h-screen bg-white text-slate-900 selection:bg-[#552D30] selection:text-white">
        <Navbar />

        {/* Immersive Page Hero */}
        <section className="bg-[#17144B] py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000" 
              alt="Counselling Session" 
              fill 
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17144B] via-[#17144B]/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              Clinical Support
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Counselling & Therapies
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Professional guidance to help you see things more clearly, process experiences, and facilitate profound positive change.
            </p>
          </div>
        </section>

        {/* Editorial Introduction: The Professional Difference */}
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#17144B] tracking-tight leading-tight">
                  Understanding the Role of a <br />
                  <span className="text-[#552D30]">Professional Counselor</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-normal leading-relaxed">
                  <p>
                    Most of the people, at some point in their lives, play the role of a counselor without having a true understanding of the concept of Counselling or what the role of the professional counselor entails.
                  </p>
                  <p>
                    There is a big difference between a professional counselor and a person who uses some Counselling skills as part of their role as a friend, neighbour or colleague.
                  </p>
                  <p>
                    This professional engagement enables the client to focus deeply on feelings, experiences, or behavior, with an ultimate goal to facilitating positive change.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#552D30]/5 rounded-[3rem] rotate-3 scale-105"></div>
                <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative z-10 flex flex-col items-start">
                  <div className="w-16 h-16 bg-[#552D30]/10 rounded-2xl flex items-center justify-center mb-8">
                    <ShieldCheck className="text-[#552D30]" size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#17144B] mb-6 leading-snug">
                    Clarity & Confidentiality
                  </h3>
                  <p className="text-xl text-slate-700 font-medium leading-relaxed">
                    A professional counselor is a highly trained individual who is able to help the client to see things more clearly, possibly from a different view-point, with complete confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="bg-[#17144B] py-16 border-y border-[#17144B]">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <Lock className="text-white/50 mx-auto mb-6" size={40} strokeWidth={1.5} />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">A Safe, Confidential Space</h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">
              Every session is conducted with the utmost privacy and respect, ensuring you have the freedom to explore your thoughts without judgment.
            </p>
          </div>
        </section>

        {/* Comprehensive Services & Therapies Area */}
        <section className="py-24 bg-[#fafafa]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-32">
              
              {/* Counselling Services Grid */}
              <div>
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                  <div className="p-4 bg-[#17144B]/10 rounded-2xl">
                    <HeartHandshake className="text-[#17144B]" size={36} strokeWidth={2} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] tracking-tight">Our Counselling Services</h2>
                  <p className="text-lg text-slate-500 max-w-2xl">Expert interventions tailored to your specific life stage and challenges.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {counsellingServices.map((service, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div className="text-[#552D30] mb-6 p-4 bg-[#552D30]/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[#17144B]">{service.title}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Behavior Therapies Section */}
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-white rounded-[4rem] shadow-sm border border-slate-100 -z-10"></div>
                
                <div className="p-8 md:p-16 text-center">
                  <div className="flex flex-col items-center mb-12 space-y-4">
                    <div className="p-4 bg-[#552D30]/10 rounded-2xl">
                      <Brain className="text-[#552D30]" size={36} strokeWidth={2} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] tracking-tight">Behavior Therapy</h2>
                    <p className="text-lg text-slate-500 max-w-2xl">We provide various evidence-based clinical therapies designed to modify unhelpful behaviors and thoughts.</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    {therapies.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-full border border-slate-200 hover:border-[#17144B]/30 hover:bg-white transition-all cursor-default shadow-sm">
                        <CheckCircle2 className="text-[#17144B]" size={20} strokeWidth={2.5} />
                        <span className="font-bold text-slate-700 text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-white relative overflow-hidden text-center border-t border-slate-100">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] mb-6 tracking-tight">
              Take the First Step Towards Positive Change
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Reach out today to schedule a confidential consultation. Our experts are here to listen and guide you forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto h-14 px-12 bg-[#552D30] hover:bg-[#3d1f22] text-white rounded-full text-sm font-bold tracking-wide transition-all shadow-xl hover:-translate-y-0.5">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}