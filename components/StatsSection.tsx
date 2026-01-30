import React from "react";
import { Brain, Compass, Users, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { label: "Workshops Delivered", value: "500+", icon: Brain },
    { label: "Careers Guided", value: "1.2k+", icon: Compass },
    { label: "Corporate Partners", value: "40+", icon: Users },
    { label: "Satisfaction Rate", value: "98%", icon: Star },
  ];

  return (
    <section className="bg-white border-b border-slate-100 relative z-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              <div className="mb-5 p-4 bg-slate-50 rounded-full group-hover:bg-[#552D30]/10 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-[#552D30]" />
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#17144B] mb-2 tracking-tight">{stat.value}</h3>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}