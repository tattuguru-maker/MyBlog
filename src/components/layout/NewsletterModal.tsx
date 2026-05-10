"use client";

import { useUIStore } from "@/store";

export default function NewsletterModal() {
  const { newsletterModalOpen, toggleNewsletter } = useUIStore();

  if (!newsletterModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" onClick={toggleNewsletter} />
      <div className="relative glass-card p-8 max-w-md w-full animate-scale-in">
        <button
          onClick={toggleNewsletter}
          className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center mx-auto mb-4 shadow-glow">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">Join Our Newsletter</h3>
          <p className="text-sm text-text-secondary">
            Get weekly curated articles on tech, development, and AI delivered straight to your inbox.
          </p>
        </div>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Your name" className="input-field" />
          <input type="email" placeholder="you@example.com" className="input-field" />
          <button type="submit" className="btn-primary w-full mt-2">
            Subscribe for Free
          </button>
        </form>

        <p className="text-xs text-text-muted text-center mt-4">
          No spam ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
