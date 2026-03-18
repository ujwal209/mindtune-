"use client";

import React from "react";
import Link from "next/link";
import { 
  Compass, Users, CheckCircle2, Brain, Lightbulb, Target, 
  MessageSquare, ShieldAlert, Activity, Heart, ArrowRight, Award, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  // The 10 Core Life Skills defined by WHO
  const whoLifeSkills = [
    { name: "Self-awareness", icon: <Brain size={24} />, desc: "Understanding one's own character, strengths, and weaknesses." },
    { name: "Empathy", icon: <Heart size={24} />, desc: "The ability to imagine what life is like for another person." },
    { name: "Critical thinking", icon: <Target size={24} />, desc: "Analyzing information and experiences objectively." },
    { name: "Creative thinking", icon: <Lightbulb size={24} />, desc: "Generating novel ideas and finding innovative solutions." },
    { name: "Decision making", icon: <CheckCircle2 size={24} />, desc: "Constructively evaluating decisions and their consequences." },
    { name: "Problem solving", icon: <ShieldAlert size={24} />, desc: "Resolving life's challenges constructively and efficiently." },
    { name: "Effective communication", icon: <MessageSquare size={24} />, desc: "Expressing oneself both verbally and non-verbally." },
    { name: "Interpersonal skills", icon: <Users size={24} />, desc: "Relating to people in positive and meaningful ways." },
    { name: "Coping with stress", icon: <Activity size={24} />, desc: "Recognizing sources of stress and acting to control our levels of stress." },
    { name: "Coping with emotions", icon: <Compass size={24} />, desc: "Recognizing emotions within us and others, and responding appropriately." }
  ];

  const softSkills = [
    "Communication skills", "Listening skills", "People skills", 
    "Conflict handling", "Empathy", "Interpersonal relations", 
    "Critical thinking", "Group dynamics", "Interview skills", "Public speaking"
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
              Personal Development
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              Life & Soft Skills
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Equipping individuals with the essential psychological and interpersonal tools to navigate challenges and succeed in any environment.
            </p>
          </div>
        </section>

        {/* Introduction: The Distinction */}
        <section className="py-20 md:py-32 container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#17144B] tracking-tight">
              The Foundation of Human Excellence
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              While hard skills and technical knowledge might get you an interview, it is your <strong>Life Skills</strong> and <strong>Soft Skills</strong> that will ultimately determine your long-term success, emotional well-being, and leadership potential. 
            </p>
          </div>
        </section>

        {/* Life Skills & WHO Framework Section */}
        <section className="py-24 bg-[#fafafa] border-y border-slate-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-[#17144B]/10 rounded-2xl">
                      <Compass className="text-[#17144B]" size={36} strokeWidth={2} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] tracking-tight">What are Life Skills?</h2>
                  </div>
                  <p className="text-xl text-slate-600 font-normal leading-relaxed">
                    Life skills are a large group of psycho-social and interpersonal skills that help people make informed decisions, communicate effectively, and develop coping and self-management strategies to lead a healthy and productive life.
                  </p>
                </div>
                <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-[#17144B] mb-4">The WHO Standard</h3>
                  <p className="text-slate-600 leading-relaxed">
                    The World Health Organization (WHO) identified 10 core life skills necessary for positive and adaptive behavior. These form the foundation of our <Link href="/programs" className="text-[#552D30] underline font-bold hover:text-[#17144B]">EMPOWER Program</Link> and individual coaching methodologies.
                  </p>
                </div>
              </div>

              {/* The 10 Core Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {whoLifeSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-12 h-12 rounded-xl bg-[#17144B]/5 flex items-center justify-center text-[#17144B] mb-4 group-hover:bg-[#17144B] group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-[#17144B] text-lg mb-2 leading-tight">{skill.name}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-[#552D30]/10 rounded-2xl">
                    <Users className="text-[#552D30]" size={36} strokeWidth={2} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#17144B] tracking-tight">What are Soft Skills?</h2>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 font-normal leading-relaxed">
                  <p>
                    Soft skills are character traits and interpersonal skills that characterize a person's relationships with other people. They dictate how you interact, solve conflicts, and navigate social complexities.
                  </p>
                  <p>
                    In the modern workplace, soft skills are considered the essential complement to hard skills (your occupational and technical knowledge). They are the skills automation cannot replace.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl font-bold text-[#17144B] mb-6">Our Focus Areas:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {softSkills.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#552D30]/30 transition-colors">
                        <CheckCircle2 className="text-[#552D30] shrink-0" size={20} strokeWidth={2.5} />
                        <span className="font-bold text-slate-800 text-sm md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impact/ROI Callout Box */}
              <div className="w-full lg:w-[400px] bg-[#17144B] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <Award size={48} className="text-amber-400 mb-8" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-6">The Impact of Soft Skills</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start">
                    <TrendingUp className="shrink-0 text-amber-400 mt-1" size={20} />
                    <p className="text-slate-300 text-sm leading-relaxed"><strong className="text-white">Career Acceleration:</strong> 85% of job success comes from having well-developed soft and people skills.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Users className="shrink-0 text-amber-400 mt-1" size={20} />
                    <p className="text-slate-300 text-sm leading-relaxed"><strong className="text-white">Team Synergy:</strong> Reduces workplace conflict and builds high-trust, collaborative environments.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Brain className="shrink-0 text-amber-400 mt-1" size={20} />
                    <p className="text-slate-300 text-sm leading-relaxed"><strong className="text-white">Adaptability:</strong> Enhances resilience allowing teams to navigate corporate changes seamlessly.</p>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#552D30] relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to Transform Your Potential?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are an individual looking for personal growth or an organization aiming to upskill your team, Mind Tune Consultants is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/programs">
                <Button className="w-full sm:w-auto h-14 px-10 bg-white text-[#552D30] hover:bg-slate-100 rounded-full text-sm font-bold tracking-wide transition-all shadow-xl hover:-translate-y-0.5">
                  View Our Workshops
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-10 border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#552D30] rounded-full text-sm font-bold tracking-wide transition-all">
                  Contact Us Today <ArrowRight className="ml-2 w-4 h-4" />
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