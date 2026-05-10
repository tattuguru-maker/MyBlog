"use client";

import Link from "next/link";
import { useState } from "react";
import { useUIStore } from "@/store";
import { categories } from "@/data/mock";

export default function Header() {
  const { toggleSearch } = useUIStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg-primary/80 border-b border-glass-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-text-primary tracking-tight">
              Blog<span className="gradient-text">Verse</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-glass-hover transition-all duration-200"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="px-3 py-2 text-sm text-accent-secondary hover:text-accent-primary rounded-lg hover:bg-glass-hover transition-all duration-200"
            >
              Dashboard
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSearch}
              className="p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-glass-hover transition-all"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <Link
              href="/dashboard"
              className="hidden sm:flex p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-glass-hover transition-all"
              aria-label="Dashboard"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
              </svg>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-xl text-text-secondary hover:text-text-primary hover:bg-glass-hover transition-all"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  className="px-3 py-2.5 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-glass-hover transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="px-3 py-2.5 text-sm text-accent-secondary hover:text-accent-primary rounded-lg hover:bg-glass-hover transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
