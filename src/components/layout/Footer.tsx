import Link from "next/link";
import { categories } from "@/data/mock";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-text-primary tracking-tight">
                Blog<span className="gradient-text">Verse</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              A modern blog platform delivering cutting-edge insights on technology, development, and digital innovation.
            </p>
            <div className="flex gap-3">
              {["twitter", "github", "linkedin", "rss"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center text-text-muted hover:text-accent-secondary hover:border-accent-primary/30 transition-all"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-mono">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-text-secondary hover:text-accent-secondary transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {["About", "Contact", "Advertise", "Privacy Policy", "Terms of Service", "RSS Feed"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-text-secondary hover:text-accent-secondary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-sm text-text-secondary mb-4">Get the latest articles delivered to your inbox.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="you@example.com"
                className="input-field text-sm"
              />
              <button type="submit" className="btn-primary text-sm py-2.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} BlogVerse. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            Built with Next.js, Tailwind CSS & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
