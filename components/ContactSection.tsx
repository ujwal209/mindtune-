"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Check, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
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
        headers: {
          'Content-Type': 'application/json',
        },
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
    <>
      {/* THE FIX: 
        1. We pull Google Sans from a working CDN instead of Google Fonts API.
        2. We use a global CSS override to force every element inside to use it.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        
        .force-google-sans, .force-google-sans * {
          font-family: 'Google Sans', 'Product Sans', sans-serif !important;
        }
      `}} />

      <section 
        id="contact" 
        className="force-google-sans relative py-24 md:py-32 bg-white overflow-hidden"
      >
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#17144B]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#552D30]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: Premium Branding */}
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-[11px] font-medium tracking-[0.2em] uppercase">
                  Contact Us
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#17144B] leading-[1.05] tracking-tight">
                  Ready to <br /> 
                  <span className="text-[#552D30]">Connect?</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-500 font-normal max-w-md leading-relaxed border-l-2 border-[#552D30]/30 pl-6">
                  Whether you're looking to transform your team or find personal clarity, our experts are ready to listen.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-8 pt-4">
                {[
                  { icon: <CheckCircle2 size={22} strokeWidth={1.5} />, title: "Certified Professionalism", desc: "Expert guidance you can trust." },
                  { icon: <Mail size={22} strokeWidth={1.5} />, title: "Direct Support", desc: "Response within 24 business hours." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group items-start">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#17144B] flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      {item.icon}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-lg text-[#17144B] leading-tight mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Sleek Form Card */}
            <div className="relative">
              {/* Decorative Card Glow */}
              <div className="absolute inset-0 bg-[#17144B]/5 blur-2xl rounded-[2rem] -z-10 translate-y-4 scale-[0.98]" />
              
              <Card className="bg-white border border-slate-100 shadow-2xl rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-8">
                <CardHeader className="space-y-2 pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-semibold text-[#17144B] tracking-tight">Send a Message</CardTitle>
                  <CardDescription className="text-base text-slate-500 font-normal">
                    No strings attached. Just a conversation.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 ml-1">First Name</label>
                        <Input 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          placeholder="Jane" 
                          required 
                          className="h-14 bg-slate-50/50 border border-slate-200 text-slate-900 focus-visible:ring-1 focus-visible:ring-[#17144B] focus-visible:border-[#17144B] rounded-xl px-4 shadow-sm transition-all" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 ml-1">Last Name</label>
                        <Input 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          placeholder="Doe" 
                          required 
                          className="h-14 bg-slate-50/50 border border-slate-200 text-slate-900 focus-visible:ring-1 focus-visible:ring-[#17144B] focus-visible:border-[#17144B] rounded-xl px-4 shadow-sm transition-all" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 ml-1">Email Address</label>
                      <Input 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="jane@example.com" 
                        required 
                        className="h-14 bg-slate-50/50 border border-slate-200 text-slate-900 focus-visible:ring-1 focus-visible:ring-[#17144B] focus-visible:border-[#17144B] rounded-xl px-4 shadow-sm transition-all" 
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-500 ml-1">Your Inquiry</label>
                      <Textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="How can we help you?" 
                        required 
                        className="bg-slate-50/50 border border-slate-200 text-slate-900 focus-visible:ring-1 focus-visible:ring-[#17144B] focus-visible:border-[#17144B] min-h-[120px] rounded-xl resize-none p-4 shadow-sm transition-all" 
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-500 text-sm font-medium px-1">{errorMsg}</p>
                    )}

                    <Button 
                      type="submit" 
                      disabled={loading || success} 
                      className={`w-full h-14 text-white text-sm tracking-wide font-medium rounded-full transition-all duration-300 shadow-md ${
                        success 
                          ? "bg-emerald-600 hover:bg-emerald-700" 
                          : "bg-[#17144B] hover:bg-[#2a266e] hover:-translate-y-0.5 hover:shadow-lg"
                      }`}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={18} /> Processing...</span>
                      ) : success ? (
                        <span className="flex items-center gap-2"><Check size={18} /> Message Sent Successfully</span>
                      ) : (
                        <span className="flex items-center gap-2">Send Inquiry <ArrowRight size={18} /></span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}