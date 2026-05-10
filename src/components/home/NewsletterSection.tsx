"use client";

export default function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative p-8 md:p-16 text-center">
            <h2 className="text-display-sm md:text-display-md font-bold text-text-primary mb-4 text-balance">
              Stay Ahead of the Curve
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
              Join 45,000+ developers who get our weekly curated digest of the most impactful tech articles.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="input-field flex-1"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Free
              </button>
            </form>
            <p className="text-xs text-text-muted mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
