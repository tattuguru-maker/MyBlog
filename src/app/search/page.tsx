"use client";

import { useState } from "react";
import { articles, categories } from "@/data/mock";
import ArticleCard from "@/components/common/ArticleCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "views" | "likes">("date");

  const filtered = articles
    .filter((a) => {
      const matchesQuery =
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        a.tags.some((t) => t.name.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = !selectedCategory || a.category.id === selectedCategory;
      return matchesQuery && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "views") return b.views - a.views;
      if (sortBy === "likes") return b.likes - a.likes;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-display-md font-bold text-text-primary mb-4">Search Articles</h1>
        <div className="relative max-w-2xl">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
            placeholder="Search by title, topic, or tag…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field pl-12 text-lg"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
              !selectedCategory
                ? "border-accent-primary/40 bg-accent-primary/10 text-accent-secondary"
                : "border-glass-border text-text-secondary hover:border-accent-primary/20"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                selectedCategory === cat.id
                  ? "border-accent-primary/40 bg-accent-primary/10 text-accent-secondary"
                  : "border-glass-border text-text-secondary hover:border-accent-primary/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-text-muted">Sort:</span>
          {(["date", "views", "likes"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-all capitalize ${
                sortBy === s
                  ? "border-accent-primary/40 bg-accent-primary/10 text-accent-secondary"
                  : "border-glass-border text-text-secondary hover:border-accent-primary/20"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <p className="text-sm text-text-muted mb-6">{filtered.length} articles found</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg mb-2">No articles found</p>
          <p className="text-text-muted text-sm">Try a different search term or category</p>
        </div>
      )}
    </div>
  );
}
