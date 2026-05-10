import { tags, articles } from "@/data/mock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleCard from "@/components/common/ArticleCard";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return tags.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = tags.find((t) => t.slug === params.slug);
  if (!tag) return {};
  return {
    title: `#${tag.name} — Tagged Articles`,
    description: `Browse all articles tagged with ${tag.name}`,
  };
}

export default function TagPage({ params }: Props) {
  const tag = tags.find((t) => t.slug === params.slug);
  if (!tag) notFound();

  const tagArticles = articles.filter((a) => a.tags.some((t) => t.id === tag.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <span className="text-sm font-mono text-accent-primary uppercase tracking-wider">Tag</span>
        <h1 className="text-display-md font-bold text-text-primary mt-2 mb-3">#{tag.name}</h1>
        <p className="text-text-secondary">{tag.articleCount} articles tagged</p>
      </div>

      {/* All Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((t) => (
          <Link
            key={t.id}
            href={`/tag/${t.slug}`}
            className={`tag-pill ${t.id === tag.id ? "!bg-accent-primary/20 !border-accent-primary/40" : ""}`}
          >
            #{t.name} ({t.articleCount})
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tagArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {tagArticles.length === 0 && (
        <p className="text-text-muted text-center py-16">No articles with this tag yet.</p>
      )}
    </div>
  );
}
