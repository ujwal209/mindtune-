"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "March 15, 2026";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.cdnfonts.com/css/google-sans');
        .force-google-sans, .force-google-sans * { font-family: 'Google Sans', 'Product Sans', sans-serif !important; }
      `}} />

      <main className="force-google-sans min-h-screen bg-[#fafafa] selection:bg-[#17144B] selection:text-white pt-32 pb-24">
        {/* Page Header */}
        <div className="container mx-auto px-6 md:px-12 mb-16 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="h-16 w-16 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-[#552D30]" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#17144B] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-base md:text-lg">
              Effective Date: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-[2.5rem] p-8 md:p-16">
            
            <div className="space-y-10 text-slate-600 leading-relaxed text-base md:text-lg font-light">
              <section className="space-y-4">
                <p>
                  At <strong>Mind Tune Consultants</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website and services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">1. Information We Collect</h2>
                <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register for a workshop, subscribe to our newsletter, fill out a form, or participate in therapy sessions. This may include:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#552D30]">
                  <li>Name, email address, and phone number.</li>
                  <li>Demographic information and professional details (for corporate training).</li>
                  <li>Health and psychological background information (strictly confidential and collected only during professional counseling sessions).</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">2. How We Use Your Information</h2>
                <p>Mind Tune Consultants collects and uses personal information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#552D30]">
                  <li><strong>To personalize user experience:</strong> We may use information to understand how our Users as a group use the services and resources provided on our Site.</li>
                  <li><strong>To improve our services:</strong> Your feedback helps us to effectively respond to your customer service requests and support needs.</li>
                  <li><strong>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their inquiries or bookings.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">3. Confidentiality & Therapy Records</h2>
                <p>
                  All information shared during counseling and therapy sessions is strictly confidential and protected by ethical professional guidelines. We do not share, sell, or rent your clinical records to any third party without your explicit written consent, except where mandated by law (e.g., in cases of imminent threat to life).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">4. Data Security</h2>
                <p>
                  We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our Site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">5. Contacting Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
                  <p className="font-bold text-[#17144B]">Mind Tune Consultants</p>
                  <p>Email: <a href="mailto:mindtuneintl@gmail.com" className="text-[#552D30] hover:underline">mindtuneintl@gmail.com</a></p>
                  <p>Phone: 9844085292 / 9449458914</p>
                </div>
              </section>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}