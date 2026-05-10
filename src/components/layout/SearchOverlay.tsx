"use client";

import { useUIStore } from "@/store";
import { articles } from "@/data/mock";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function SearchOverlay() {
  const { searchOpen, toggleSearch } = useUIStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.length > 1
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.some((t) => t.name.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
      setQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === "Escape" && searchOpen) toggleSearch();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen, toggleSearch]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" onClick={toggleSearch} />
      <div className="relative w-full max-w-2xl mx-4 glass-card p-2 animate-scale-in">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3">
          <svg className="w-5 h-5 text-text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search articles, tags, topics…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-text-primary placeholder-text-muted outline-none text-lg"
          />
          <kbd className="hidden sm:flex px-2 py-1 text-xs text-text-muted border border-glass-border rounded-md">
            ESC
          </kbd>
        </div>

        {/* Results */}
        {filtered.length > 0 && (
          <div className="border-t border-glass-border mt-1 max-h-[50vh] overflow-y-auto">
            {filtered.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                onClick={toggleSearch}
                className="flex items-start gap-4 px-4 py-3 hover:bg-glass-hover rounded-xl transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">{article.title}</p>
                  <p className="text-xs text-text-muted mt-1 truncate">{article.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="tag-pill !text-[10px] !py-0.5">{article.category.name}</span>
                    <span className="text-xs text-text-muted">{article.readTime} min read</span>
                  </div>
                </div>
                <svg className="w-4 h-4 text-text-muted flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            ))}
          </div>
        )}

        {query.length > 1 && filtered.length === 0 && (
          <div className="border-t border-glass-border mt-1 px-4 py-8 text-center">
            <p className="text-text-muted">No results found for &ldquo;{query}&rdquo;</p>
          </div>
        )}
      </div>
    </div>
  );
}
