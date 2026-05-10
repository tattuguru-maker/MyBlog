import { authors, articles } from "@/data/mock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArticleCard from "@/components/common/ArticleCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = authors.find((a) => a.slug === params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — Author Profile`,
    description: author.bio,
  };
}

export default function AuthorPage({ params }: Props) {
  const author = authors.find((a) => a.slug === params.slug);
  if (!author) notFound();

  const authorArticles = articles.filter((a) => a.author.id === author.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Author Header */}
      <div className="glass-card p-8 md:p-12 mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center flex-shrink-0 shadow-glow-lg">
            <span className="text-3xl font-bold text-white">{author.name[0]}</span>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-display-sm font-bold text-text-primary mb-1">{author.name}</h1>
            <p className="text-accent-secondary text-sm mb-4">{author.role}</p>
            <p className="text-text-secondary leading-relaxed max-w-2xl mb-6">{author.bio}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
              <div className="text-center">
                <p className="text-xl font-bold gradient-text">{author.articlesCount}</p>
                <p className="text-xs text-text-muted">Articles</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold gradient-text">{(author.totalViews / 1_000_000).toFixed(1)}M</p>
                <p className="text-xs text-text-muted">Total Views</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {Object.entries(author.socials).map(([platform, handle]) =>
                handle ? (
                  <a
                    key={platform}
                    href="#"
                    className="px-3 py-1.5 text-xs rounded-lg border border-glass-border text-text-secondary hover:text-accent-secondary hover:border-accent-primary/30 transition-all capitalize"
                  >
                    {platform}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Author Articles */}
      <div>
        <h2 className="text-display-sm font-bold text-text-primary mb-8">
          Articles by {author.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authorArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        {authorArticles.length === 0 && (
          <p className="text-text-muted text-center py-12">No articles yet.</p>
        )}
      </div>
    </div>
  );
}
