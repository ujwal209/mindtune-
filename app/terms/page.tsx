"use client";

import React from "react";
import { FileText } from "lucide-react";

export default function TermsOfService() {
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
              <FileText size={32} className="text-[#552D30]" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#17144B] tracking-tight">
              Terms of Service
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
                  Welcome to <strong>Mind Tune Consultants</strong>. By accessing our website, booking our services, or enrolling in our programs (including the EMPOWER program, corporate workshops, and counseling sessions), you agree to be bound by these Terms of Service. Please read them carefully.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">1. Services Provided</h2>
                <p>
                  Mind Tune Consultants provides psychological counseling, corporate training, life-skills workshops, and educational programs. The content provided on our website and in our public workshops is for informational and educational purposes only and is not a substitute for medical or psychiatric evaluation.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">2. Appointments and Cancellations</h2>
                <p>
                  For private counseling and dedicated corporate sessions, appointments must be scheduled in advance. We require a minimum of 24 hours' notice for any cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">3. Professional Boundaries & Conduct</h2>
                <p>
                  We maintain strict professional boundaries in all therapeutic and training environments. Participants in our group therapies and workshops are expected to treat others with respect and maintain the confidentiality of shared group experiences. Mind Tune Consultants reserves the right to terminate services if a client exhibits abusive or inappropriate behavior.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">4. Intellectual Property</h2>
                <p>
                  All materials, workshop modules, proprietary frameworks (such as the EMPOWER program structure), logos, and content provided by Mind Tune Consultants are our exclusive intellectual property. They may not be copied, reproduced, distributed, or utilized for commercial purposes without our express written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">5. Limitation of Liability</h2>
                <p>
                  While we strive to provide the highest quality of professional support and training, Mind Tune Consultants shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, or for the outcomes of individual decisions made by clients following our consultations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#17144B] tracking-tight">6. Changes to Terms</h2>
                <p>
                  Mind Tune Consultants has the discretion to update these Terms of Service at any time. We encourage Users to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review these terms periodically and become aware of modifications.
                </p>
              </section>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}