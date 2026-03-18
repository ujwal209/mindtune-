"use client";

import React from "react";
import Link from "next/link";
import { 
  BookOpen, Target, CheckCircle2, Award, GraduationCap, 
  Users, Briefcase, HeartPulse, ArrowRight, Sparkles, LayoutGrid 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProgramsPage() {
  // Categorized workshops for a much cleaner, more professional presentation
  const workshopCategories = [
    {
      title: "Corporate & Professional",
      icon: <Briefcase size={28} className="text-[#17144B]" />,
      items: [
        "Corporate trainings", "Soft skills training", "Leadership skills", 
        "Management skills", "Career planning", "Team work", "Problem solving"
      ]
    },
    {
      title: "Personal & Relational",
      icon: <Users size={28} className="text-[#552D30]" />,
      items: [
        "Positive parenting", "People skills", "Stress management", 
        "Interpersonal relations", "Communication skills"
      ]
    },
    {
      title: "Academic & Specialized",
      icon: <GraduationCap size={28} className="text-[#17144B]" />,
      items: [
        "Teacher’s workshop", "Study techniques", "Memory techniques", 
        "Positive nursing (for Nurses)"
      ]
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
      `}} />

      <main className="force-google-sans min-h-screen bg-white text-slate-900 selection:bg-[#552D30] selection:text-white">
        <Navbar />

        {/* Page Hero */}
        <section className="bg-[#17144B] py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              Interactive Learning
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Workshops & Programs
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Immersive environments designed to build essential life skills, foster self-discovery, and drive organizational success.
            </p>
          </div>
        </section>

        {/* EMPOWER Introduction Section */}
        <section className="py-20 md:py-32 container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#552D30]/10 text-[#552D30] text-[11px] font-bold tracking-[0.2em] uppercase">
                  Signature Program
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#17144B] leading-tight tracking-tight">
                  ‘EMPOWER’ <br />
                  <span className="text-[#552D30]">Year Long Program</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
                  To motivate students to adopt life skills, Mind Tune Consultants has developed a program called <strong>EMPOWER</strong>, which benefits every student to experience a fantastic journey of self-discovery.
                </p>
                <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
                  It is a yearlong program based on the ten core life skills as identified by the “World Health Organization”, designed to be easily integrated into any school curriculum.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#17144B]/5 rounded-[3rem] -rotate-3 scale-105"></div>
                <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative z-10">
                  <Target className="text-[#552D30] mb-8" size={48} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-[#17144B] mb-6">The WHO Standard</h3>
                  <blockquote className="text-xl md:text-2xl font-medium text-slate-700 italic leading-relaxed border-l-4 border-[#552D30] pl-6">
                    "The abilities for adaptive and positive behavior that enable individuals to deal effectively with demands and challenges of today’s life."
                  </blockquote>
                  <p className="text-sm font-bold text-slate-400 mt-6 tracking-widest uppercase">— WHO, 1993 Definition</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMPOWER Features Grid */}
        <section className="py-20 bg-[#fafafa] border-y border-slate-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#17144B] tracking-tight">How EMPOWER Transforms Students</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#17144B]/10 rounded-2xl flex items-center justify-center mb-6">
                    <LayoutGrid className="text-[#17144B]" size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#17144B] mb-3">Grade-Wise Modules</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Well designed, structured modules allow students to learn, implement, and practice life skills tailored to their specific age and maturity level.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#552D30]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="text-[#552D30]" size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#17144B] mb-3">Holistic Approach</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Students are trained with innovative and creative methodologies that go beyond textbooks to develop a truly well-rounded perspective.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="text-amber-600" size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[#17144B] mb-3">Self-Discovery</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Provides a platform to enhance motivational levels and self-confidence, exploring new dimensions of self-discovery to achieve the best possible goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate & Specialized Workshops Section */}
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20 space-y-6">
              <div className="p-4 bg-[#17144B]/10 rounded-2xl">
                <BookOpen className="text-[#17144B]" size={36} strokeWidth={2} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] tracking-tight">Specialized Workshops</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed">
                Beyond student programs, we conduct intensive, results-driven workshops tailored for corporate teams, parents, educators, and healthcare professionals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {workshopCategories.map((category, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#17144B] leading-tight">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#552D30] shrink-0 mt-0.5" size={20} strokeWidth={2.5} />
                        <span className="font-bold text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#17144B] relative overflow-hidden text-center">
          {/* Abstract Background for CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#552D30]/40 to-transparent opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Empower Your Team or School?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact us today to schedule a tailored workshop or discuss integrating the EMPOWER program into your curriculum.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="w-full sm:w-auto h-14 px-10 bg-white text-[#17144B] hover:bg-slate-100 rounded-full text-sm font-bold tracking-wide transition-all shadow-xl hover:-translate-y-0.5">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/counselling">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-10 border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#17144B] rounded-full text-sm font-bold tracking-wide transition-all">
                  Explore Therapies <ArrowRight className="ml-2 w-4 h-4" />
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