"use client";

import { useUIStore } from "@/store";
import dynamic from "next/dynamic";

const FloatingShapes = dynamic(() => import("@/components/three/FloatingShapes"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-hero-gradient" />,
});

export default function HeroSection() {
  const { toggleNewsletter } = useUIStore();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8 animate-in">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse-glow" />
            <span className="text-sm text-accent-secondary font-medium">Discover the Future of Tech</span>
          </div>

          <h1 className="text-display-lg md:text-display-xl font-bold text-text-primary mb-6 animate-in stagger-1 text-balance">
            Where Technology Meets{" "}
            <span className="gradient-text">Innovation</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed animate-in stagger-2">
            Deep dives into AI, web development, cloud architecture, and emerging technologies.
            Written by engineers, for engineers.
          </p>

          <div className="flex flex-wrap gap-4 animate-in stagger-3">
            <a href="#featured" className="btn-primary inline-flex items-center gap-2">
              Explore Articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
            <button onClick={toggleNewsletter} className="btn-ghost inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Subscribe
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 animate-in stagger-4">
            {[
              { label: "Articles", value: "300+" },
              { label: "Monthly Readers", value: "2.4M" },
              { label: "Contributors", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                <span className="text-sm text-text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
