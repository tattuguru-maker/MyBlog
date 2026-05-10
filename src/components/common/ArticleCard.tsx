import Link from "next/link";
import type { Article } from "@/types";

interface Props {
  article: Article;
  variant?: "default" | "featured" | "compact";
}

export default function ArticleCard({ article, variant = "default" }: Props) {
  if (variant === "featured") {
    return (
      <Link href={`/article/${article.slug}`} className="group block">
        <article className="glass-card-hover overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[16/9] bg-bg-tertiary overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20" />
            <div className="absolute inset-0 flex items-center justify-center text-text-muted">
              <svg className="w-16 h-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
            </div>
            {article.trending && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold bg-accent-tertiary text-white rounded-full shadow-glow-accent">
                  TRENDING
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="tag-pill" style={{ borderColor: article.category.color + "40", color: article.category.color }}>
                {article.category.name}
              </span>
              <span className="text-xs text-text-muted">{article.readTime} min read</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-text-secondary line-clamp-2 mb-4">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
                <span className="text-xs text-text-secondary">{article.author.name}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span>{(article.views / 1000).toFixed(1)}K views</span>
                <span>{article.likes} likes</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/article/${article.slug}`} className="group block">
        <article className="flex gap-4 p-4 rounded-xl hover:bg-glass-hover transition-all duration-200">
          <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-bg-tertiary overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-accent-primary/10 to-accent-tertiary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-text-muted opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent-secondary transition-colors line-clamp-2">
              {article.title}
            </h4>
            <div className="flex items-center gap-2 mt-2 text-xs text-text-muted">
              <span>{article.author.name}</span>
              <span className="w-1 h-1 rounded-full bg-text-muted" />
              <span>{article.readTime} min</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <article className="glass-card-hover overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[16/10] bg-bg-tertiary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-tertiary/10" />
          <div className="absolute inset-0 flex items-center justify-center text-text-muted">
            <svg className="w-12 h-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="tag-pill !text-[10px]" style={{ borderColor: article.category.color + "40", color: article.category.color }}>
              {article.category.name}
            </span>
            <span className="text-xs text-text-muted">{article.readTime} min</span>
          </div>
          <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2 flex-1">{article.excerpt}</p>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-glass-border">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex-shrink-0" />
            <span className="text-xs text-text-secondary">{article.author.name}</span>
            <span className="ml-auto text-xs text-text-muted">
              {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
