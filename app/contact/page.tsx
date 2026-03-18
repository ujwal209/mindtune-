"use client";

import React, { useState } from "react";
import { 
  Mail, Phone, MapPin, Send, MessageSquare, 
  ShieldCheck, Clock, CheckCircle2, Loader2, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+91 91104 25066",
      desc: "Mon-Sat from 9am to 6pm.",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "mindtuneconsultants@gmail.com",
      desc: "We'll respond within 24 hours.",
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "Basaveshwar Nagar, Bengaluru",
      desc: "Karnataka, India - 560079",
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
      `}} />

      <main className="force-google-sans min-h-screen bg-white text-slate-900 selection:bg-[#552D30] selection:text-white">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-[#17144B] py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                Get in Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                Let’s Start a <span className="text-white/70">Conversation.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
                Whether you're looking for personal counselling, corporate training, or school programs, our experts are ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              
              {/* Left Column: Info */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#17144B] mb-6">Contact Information</h2>
                  <p className="text-slate-600 text-lg mb-10">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-14 h-14 shrink-0 bg-[#17144B]/5 rounded-2xl flex items-center justify-center text-[#17144B] group-hover:bg-[#17144B] group-hover:text-white transition-all duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#17144B]">{info.title}</h3>
                        <p className="text-slate-900 font-medium mt-1">{info.details}</p>
                        <p className="text-slate-500 text-sm mt-1">{info.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-6">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-[#552D30]" size={24} />
                    <span className="font-bold text-slate-800">100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="text-[#552D30]" size={24} />
                    <span className="font-bold text-slate-800">Expert Response within 24h</span>
                  </div>
                </div>
              </div>

              {/* Right Column: The Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative">
                  {status === "success" ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-3xl font-bold text-[#17144B]">Message Sent!</h3>
                      <p className="text-slate-600 text-lg">Thank you for reaching out. Our team will contact you shortly.</p>
                      <Button 
                        onClick={() => setStatus("idle")}
                        className="bg-[#17144B] text-white rounded-full px-8"
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                          <input 
                            required
                            type="text"
                            placeholder="John"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#552D30] focus:ring-0 outline-none transition-all"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                          <input 
                            type="text"
                            placeholder="Doe"
                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#552D30] focus:ring-0 outline-none transition-all"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input 
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#552D30] focus:ring-0 outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                        <textarea 
                          required
                          rows={5}
                          placeholder="Tell us about your requirements..."
                          className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-[#552D30] focus:ring-0 outline-none transition-all resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>

                      <Button 
                        disabled={status === "loading"}
                        className="w-full h-16 bg-[#552D30] hover:bg-[#3d1f22] text-white rounded-2xl text-lg font-bold shadow-lg transition-all flex items-center justify-center gap-3"
                      >
                        {status === "loading" ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          <>
                            Send Message <Send size={20} />
                          </>
                        )}
                      </Button>
                      
                      {status === "error" && (
                        <p className="text-red-500 text-center font-medium mt-4">
                          Something went wrong. Please try again later.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ / Guidance Section */}
        <section className="py-24 bg-[#fafafa] border-y border-slate-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[#17144B] mb-6">Common Questions</h2>
              <p className="text-lg text-slate-600">Quick answers to help you get started with Mind Tune Consultants.</p>
            </div>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                { q: "Is my personal information kept confidential?", a: "Absolutely. All counselling sessions and personal data are protected by strict professional confidentiality protocols." },
                { q: "Can I book a corporate workshop for my entire team?", a: "Yes, we specialize in tailored corporate trainings. You can request a custom quote via the contact form above." },
                { q: "Do you offer online counselling sessions?", a: "Yes, we provide both in-person and secure virtual sessions to accommodate your schedule and location." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-[#17144B] mb-3 flex items-center gap-3">
                    <MessageSquare size={20} className="text-[#552D30]" /> {faq.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Map / Global Support Section */}
        <section className="py-24 container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto bg-[#17144B] rounded-[3rem] p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-6 lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase">
                Location
              </div>
              <h2 className="text-4xl font-bold tracking-tight leading-tight">Visit Our <br /> Office</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We are located in the heart of Basaveshwar Nagar, Bengaluru. Feel free to drop by for a scheduled consultation.
              </p>
              
              <div className="pt-4">
                <Link 
                  href="https://www.google.com/maps?q=Basaveshwar+Nagar,+Bengaluru" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-white font-bold group"
                >
                  <span className="border-b border-white/30 group-hover:border-white transition-all">Get Directions</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Google Maps Iframe Integration */}
            <div className="w-full lg:w-2/3 h-[400px] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4726604119946!2d77.5474838!3d12.9415786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e3d9cd41833%3A0x5e24e723b8274ba8!2sMIND%20TUNE%20CONSULTANTS!5e0!3m2!1sen!2sin!4v1773847175657!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Decorative Overlay Frame */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-[2.5rem]"></div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}