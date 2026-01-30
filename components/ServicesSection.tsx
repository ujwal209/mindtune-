"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Brain, Compass, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <div className="relative py-24 space-y-40 bg-[#fafafa] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#17144B]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#552D30]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Service 1: Soft Skills - Editorial Layout */}
        <section className="grid lg:grid-cols-2 gap-20 items-center" id="services">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-xs font-black tracking-widest uppercase">
              Professional Development
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#17144B] leading-[0.95] tracking-tighter">
              Soft Skills & <br /><span className="text-[#552D30]">Life Training</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light max-w-md">
              Master the art of human connection. We refine the skills that automation can't replace.
            </p>
            <div className="space-y-4">
              {["Interpersonal Intelligence", "Adaptive Leadership", "Conflict Mastery"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-px w-8 bg-[#552D30] transition-all group-hover:w-12" />
                  <span className="text-lg font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#contact" className="inline-block pt-4">
              <Button className="h-16 px-10 bg-[#17144B] text-white rounded-2xl text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-[#17144B]/20">
                Explore Module <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#552D30]/10 rounded-full blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(23,20,75,0.3)]">
              <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070" alt="Soft Skills" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17144B] via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] hidden md:block border border-slate-100">
              <Users className="text-[#552D30] mb-4" size={40} />
              <p className="text-slate-900 font-black text-xl leading-tight">85% of job success comes from soft skills.</p>
            </div>
          </div>
        </section>

        {/* Service 2: Workshops - Reversed Editorial */}
        <section className="grid lg:grid-cols-2 gap-24 items-center pt-20" id="workshops">
          <div className="relative">
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#17144B]/10 rounded-full blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(85,45,48,0.3)]">
              <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="Workshops" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#552D30] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#552D30]/5 border border-[#552D30]/10 text-[#552D30] text-xs font-black tracking-widest uppercase">
              Actionable Learning
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#17144B] leading-[0.95] tracking-tighter">
              Immersive <br /><span className="text-[#552D30]">Workshops</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed font-light">
              Stop listening, start doing. Our workshops are intensive laboratories for behavioral change and skill mastery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Results Driven", "Peer Feedback", "Live Coaching", "Certified Paths"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <CheckCircle2 className="text-[#552D30]" size={20} />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
            <Link href="#contact" className="inline-block pt-4">
              <Button variant="outline" className="h-16 px-10 border-2 border-[#552D30] text-[#552D30] rounded-2xl text-lg font-bold hover:bg-[#552D30] hover:text-white transition-all">
                View Upcoming Dates
              </Button>
            </Link>
          </div>
        </section>

        {/* Service 3: Mental Wellness - The "Showstopper" Section */}
        <section className="mt-40 relative group" id="counseling">
          <div className="absolute inset-0 bg-[#17144B] rounded-[4rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700" />
          <div className="relative bg-[#17144B] rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl border border-white/10">
            {/* Background Image with Overlay */}
            <Image src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070" alt="" fill className="object-cover opacity-20" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <div className="h-20 w-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-4">
                <HeartHandshake size={40} />
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
                A Safe Space to <br /><span className="text-slate-400">Heal & Grow</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
                Confidential, empathetic, and professional support for your emotional journey.
              </p>

              {/* Bento Grid Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
                {[
                  { title: "Anxiety Relief", desc: "Scientific tools to reclaim your calm.", icon: <Brain size={24} /> },
                  { title: "Total Privacy", desc: "100% confidential professional care.", icon: <Users size={24} /> },
                  { title: "Holistic Path", desc: "Mind, body, and soul alignment.", icon: <Compass size={24} /> }
                ].map((card, i) => (
                  <div key={i} className="group/card bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] text-left hover:bg-white/10 transition-all duration-500">
                    <div className="text-[#552D30] mb-6 p-3 bg-white w-fit rounded-2xl group-hover/card:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h4 className="text-white font-black text-2xl mb-2">{card.title}</h4>
                    <p className="text-slate-400 leading-relaxed font-light">{card.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="#contact" className="pt-10">
                <Button className="h-16 px-12 bg-white text-[#17144B] hover:bg-[#552D30] hover:text-white rounded-2xl text-xl font-black shadow-2xl transition-all">
                  Book a Private Session
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}