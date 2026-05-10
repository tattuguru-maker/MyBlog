import { articles, comments } from "@/data/mock";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AdZone from "@/components/common/AdZone";
import ArticleCard from "@/components/common/ArticleCard";
import SocialShare from "@/components/article/SocialShare";
import CommentSection from "@/components/article/CommentSection";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags.map((t) => t.name),
      images: [{ url: article.coverImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleComments = comments.filter((c) => c.articleId === article.id);
  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.category.id === article.category.id)
    .slice(0, 3);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: article.coverImage,
            author: { "@type": "Person", name: article.author.name },
            publisher: { "@type": "Organization", name: "BlogVerse" },
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://blogverse.dev/article/${article.slug}` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://blogverse.dev" },
              { "@type": "ListItem", position: 2, name: article.category.name, item: `https://blogverse.dev/category/${article.category.slug}` },
              { "@type": "ListItem", position: 3, name: article.title },
            ],
          }),
        }}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Ad */}
        <AdZone size="728×90" label="Article Header Leaderboard" className="h-[90px] max-w-4xl mx-auto mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-text-muted">
                <li><Link href="/" className="hover:text-accent-secondary transition-colors">Home</Link></li>
                <li><span>/</span></li>
                <li><Link href={`/category/${article.category.slug}`} className="hover:text-accent-secondary transition-colors">{article.category.name}</Link></li>
                <li><span>/</span></li>
                <li className="text-text-secondary truncate max-w-xs">{article.title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="tag-pill" style={{ borderColor: article.category.color + "40", color: article.category.color }}>
                  {article.category.name}
                </span>
                <span className="text-sm text-text-muted">{article.readTime} min read</span>
                {article.trending && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-accent-tertiary/20 text-accent-tertiary rounded-full">
                    TRENDING
                  </span>
                )}
              </div>

              <h1 className="text-display-md lg:text-display-lg font-bold text-text-primary mb-6 text-balance">
                {article.title}
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed mb-8">{article.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-glass-border">
                <Link href={`/author/${article.author.slug}`} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary group-hover:text-accent-secondary transition-colors">
                      {article.author.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {new Date(article.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric", month: "long", day: "numeric",
                      })}
                      {article.updatedAt !== article.publishedAt && (
                        <> &middot; Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</>
                      )}
                    </p>
                  </div>
                </Link>

                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span>{(article.views / 1000).toFixed(1)}K views</span>
                  <span>{article.likes} likes</span>
                  <span>{article.commentsCount} comments</span>
                </div>
              </div>
            </header>

            {/* Cover Image Placeholder */}
            <div className="relative aspect-[16/9] bg-bg-tertiary rounded-2xl overflow-hidden mb-10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/15 to-accent-tertiary/15 flex items-center justify-center">
                <svg className="w-20 h-20 text-text-muted opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                </svg>
              </div>
            </div>

            {/* In-content Ad */}
            <AdZone size="Native" label="In-Content Native Ad" className="h-[120px] mb-8" />

            {/* Article Body */}
            <div className="prose-blog" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-glass-border">
              {article.tags.map((tag) => (
                <Link key={tag.id} href={`/tag/${tag.slug}`} className="tag-pill">
                  #{tag.name}
                </Link>
              ))}
            </div>

            {/* Social Share */}
            <SocialShare title={article.title} slug={article.slug} />

            {/* FAQ Schema Placeholder */}
            <section className="mt-12 glass-card p-6" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-xl font-bold text-text-primary mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: `What is ${article.category.name}?`, a: `${article.category.description}. This article covers key aspects and best practices in this domain.` },
                  { q: `Who should read this article?`, a: "This article is designed for developers, engineers, and tech professionals looking to deepen their understanding of the topic." },
                  { q: "How long does it take to read?", a: `This article takes approximately ${article.readTime} minutes to read at an average reading speed.` },
                ].map((item, i) => (
                  <details key={i} className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-3 text-text-primary font-medium hover:text-accent-secondary transition-colors">
                      {item.q}
                      <svg className="w-4 h-4 text-text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </summary>
                    <p className="text-sm text-text-secondary pb-3 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Comments */}
            <CommentSection comments={articleComments} articleId={article.id} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <AdZone size="300×250" label="Sidebar Rectangle" className="h-[250px]" />

            {/* Author Bio */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary" />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{article.author.name}</p>
                  <p className="text-xs text-text-muted">{article.author.role}</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{article.author.bio}</p>
              <Link
                href={`/author/${article.author.slug}`}
                className="text-xs text-accent-secondary hover:text-accent-primary transition-colors"
              >
                View Profile &rarr;
              </Link>
            </div>

            <AdZone size="300×600" label="Sidebar Half Page" className="h-[400px]" />

            {/* Table of Contents placeholder */}
            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-text-primary mb-3">In this Article</h3>
              <nav className="space-y-2">
                {["Introduction", "Architecture", "Implementation", "Best Practices", "Conclusion"].map((item) => (
                  <a key={item} href="#" className="block text-xs text-text-secondary hover:text-accent-secondary transition-colors py-1">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-glass-border">
            <h2 className="text-display-sm font-bold text-text-primary mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}

        {/* Article End Ad */}
        <AdZone size="728×90" label="Article End Leaderboard" className="h-[90px] max-w-4xl mx-auto mt-12" />
      </article>
    </>
  );
}
