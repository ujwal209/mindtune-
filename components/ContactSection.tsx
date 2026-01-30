"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, Check, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Logic for actual submission would go here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#17144B]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#552D30]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Bold Branding */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#17144B]/5 border border-[#17144B]/10 text-[#17144B] text-xs font-black tracking-widest uppercase">
                Contact Us
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-[#17144B] leading-[0.9] tracking-tighter">
                Ready to <br /> 
                <span className="text-[#552D30]">Connect?</span>
              </h2>
              <p className="text-xl text-slate-500 font-light max-w-md leading-relaxed">
                Whether you're looking to transform your team or find personal clarity, our experts are ready to listen.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-8">
              {[
                { icon: <CheckCircle2 size={24} />, title: "Certified Professionalism", desc: "Expert guidance you can trust." },
                { icon: <Mail size={24} />, title: "Direct Support", desc: "Response within 24 business hours." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#17144B] flex items-center justify-center text-white shadow-lg shadow-[#17144B]/20 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-[#17144B]">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="relative">
            {/* Decorative Card Shadow/Glow */}
            <div className="absolute inset-0 bg-[#552D30]/10 blur-3xl rounded-[3rem] -z-10 scale-95" />
            
            <Card className="bg-white border border-slate-100 shadow-[0_50px_100px_-20px_rgba(23,20,75,0.15)] rounded-[3rem] p-4 md:p-10">
              <CardHeader className="space-y-2 pb-10">
                <CardTitle className="text-4xl font-black text-[#17144B] tracking-tight">Send a Message</CardTitle>
                <CardDescription className="text-lg text-slate-400 font-light">
                  No strings attached. Just a conversation.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                      <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jane" required className="h-14 bg-slate-50 border-none text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B] rounded-2xl px-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                      <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required className="h-14 bg-slate-50 border-none text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B] rounded-2xl px-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" required className="h-14 bg-slate-50 border-none text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B] rounded-2xl px-6" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Inquiry</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" required className="bg-slate-50 border-none text-slate-900 focus-visible:ring-2 focus-visible:ring-[#17144B] min-h-[140px] rounded-2xl resize-none p-6" />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading || success} 
                    className={`w-full h-16 text-white text-lg font-black rounded-2xl transition-all duration-300 shadow-xl ${
                      success 
                        ? "bg-emerald-500 hover:bg-emerald-600 scale-100" 
                        : "bg-[#552D30] hover:bg-[#17144B] hover:-translate-y-1 active:scale-95 shadow-[#552D30]/20"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-3"><Loader2 className="animate-spin" /> Processsing...</span>
                    ) : success ? (
                      <span className="flex items-center gap-3"><Check /> Message Sent!</span>
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