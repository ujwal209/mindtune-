"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Brain, Compass, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <>
      {/* THE FIX: Force Google Sans globally for this section using the working CDN */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        
        .force-google-sans, .force-google-sans * {
          font-family: 'Google Sans', 'Product Sans', sans-serif !important;
        }
      `}} />

      <div className="force-google-sans relative py-24 md:py-32 space-y-32 md:space-y-40 bg-[#fafafa] overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#17144B]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#552D30]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Service 1: Soft Skills - Editorial Layout */}
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center" id="services">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-[11px] font-bold tracking-[0.2em] uppercase">
                Professional Development
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] leading-[1.1] tracking-tight">
                Soft Skills & <br /><span className="text-[#552D30]">Life Training</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal max-w-md">
                Master the art of human connection. We refine the skills that automation can't replace.
              </p>
              <div className="space-y-4 pt-2">
                {["Interpersonal Intelligence", "Adaptive Leadership", "Conflict Mastery"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-[2px] w-6 bg-[#552D30] transition-all duration-300 group-hover:w-10 rounded-full" />
                    <span className="text-base font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="inline-block pt-6">
                <Button className="h-14 px-8 bg-[#17144B] hover:bg-[#2a266e] text-white rounded-full text-sm font-bold tracking-wide hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
                  Explore Module <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#552D30]/10 rounded-full blur-3xl" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070" alt="Soft Skills" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17144B]/80 via-transparent to-transparent opacity-80"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[260px] hidden md:block border border-slate-100">
                <Users className="text-[#552D30] mb-3" size={32} strokeWidth={2} />
                <p className="text-slate-800 font-bold text-lg leading-snug">85% of job success comes from soft skills.</p>
              </div>
            </div>
          </section>

          {/* Service 2: Workshops - Reversed Editorial */}
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-10" id="workshops">
            <div className="relative">
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#17144B]/10 rounded-full blur-3xl" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Workshops" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#552D30]/80 via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#552D30]/5 border border-[#552D30]/10 text-[#552D30] text-[11px] font-bold tracking-[0.2em] uppercase">
                Actionable Learning
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] leading-[1.1] tracking-tight">
                Immersive <br /><span className="text-[#552D30]">Workshops</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal">
                Stop listening, start doing. Our workshops are intensive laboratories for behavioral change and skill mastery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {["Results Driven", "Peer Feedback", "Live Coaching", "Certified Paths"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-[#552D30]" size={20} strokeWidth={2.5} />
                    <span className="font-bold text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="#contact" className="inline-block pt-6">
                <Button variant="outline" className="h-14 px-8 border-2 border-[#552D30] text-[#552D30] rounded-full text-sm font-bold tracking-wide hover:bg-[#552D30] hover:text-white transition-all duration-300">
                  View Upcoming Dates
                </Button>
              </Link>
            </div>
          </section>

          {/* Service 3: Mental Wellness - The "Showstopper" Section */}
          <section className="relative group mt-24" id="counseling">
            <div className="absolute inset-0 bg-[#17144B] rounded-[2.5rem] md:rounded-[3rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700 opacity-50" />
            <div className="relative bg-[#17144B] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-white/10">
              {/* Background Image with Overlay */}
              <Image src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070" alt="Counseling" fill className="object-cover opacity-10 md:opacity-20" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white mb-2 shadow-inner">
                  <HeartHandshake size={32} strokeWidth={2} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                  A Safe Space to <br className="md:hidden" /><span className="text-slate-300">Heal & Grow</span>
                </h2>
                <p className="text-base md:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed opacity-90">
                  Confidential, empathetic, and professional support for your emotional journey.
                </p>

                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 md:mt-12">
                  {[
                    { title: "Anxiety Relief", desc: "Scientific tools to reclaim your calm.", icon: <Brain size={24} strokeWidth={2} /> },
                    { title: "Total Privacy", desc: "100% confidential professional care.", icon: <Users size={24} strokeWidth={2} /> },
                    { title: "Holistic Path", desc: "Mind, body, and soul alignment.", icon: <Compass size={24} strokeWidth={2} /> }
                  ].map((card, i) => (
                    <div key={i} className="group/card bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-left hover:bg-white/10 transition-colors duration-300">
                      <div className="text-[#552D30] mb-5 p-3 bg-white w-fit rounded-xl shadow-sm">
                        {card.icon}
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-normal">{card.desc}</p>
                    </div>
                  ))}
                </div>

                <Link href="#contact" className="pt-10">
                  <Button className="h-14 px-10 bg-white text-[#17144B] hover:bg-slate-100 rounded-full text-sm font-bold tracking-wide shadow-xl transition-all hover:-translate-y-0.5">
                    Book a Private Session
                  </Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}