import { categories, articles } from "@/data/mock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleCard from "@/components/common/ArticleCard";
import CategoryPill from "@/components/common/CategoryPill";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return {};
  return {
    title: `${category.name} Articles`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const categoryArticles = articles.filter((a) => a.category.id === category.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
          <span className="text-sm font-mono text-text-muted uppercase tracking-wider">Category</span>
        </div>
        <h1 className="text-display-md font-bold text-text-primary mb-3">{category.name}</h1>
        <p className="text-lg text-text-secondary max-w-2xl">{category.description}</p>
        <p className="text-sm text-text-muted mt-2">{category.articleCount} articles</p>
      </div>

      {/* Category Nav */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <CategoryPill key={cat.id} category={cat} active={cat.id === category.id} />
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {categoryArticles.length === 0 && (
        <p className="text-text-muted text-center py-16">No articles in this category yet.</p>
      )}
    </div>
  );
}
