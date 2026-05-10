"use client";

interface Props {
  title: string;
  slug: string;
}

export default function SocialShare({ title, slug }: Props) {
  const url = `https://blogverse.dev/article/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    { name: "Twitter", href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`, icon: "X" },
    { name: "LinkedIn", href: `https://linkedin.com/sharing/share-offsite/?url=${encoded}`, icon: "in" },
    { name: "Facebook", href: `https://facebook.com/sharer/sharer.php?u=${encoded}`, icon: "f" },
    { name: "Reddit", href: `https://reddit.com/submit?url=${encoded}&title=${encodedTitle}`, icon: "r" },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-glass-border">
      <span className="text-sm text-text-muted">Share:</span>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center text-text-muted hover:text-accent-secondary hover:border-accent-primary/30 transition-all text-xs font-bold uppercase"
          aria-label={`Share on ${p.name}`}
        >
          {p.icon}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="w-9 h-9 rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center text-text-muted hover:text-accent-secondary hover:border-accent-primary/30 transition-all"
        aria-label="Copy link"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m9.86-4.122a4.5 4.5 0 0 0-1.242-7.244l-4.5-4.5a4.5 4.5 0 0 0-6.364 6.364l1.757 1.757" />
        </svg>
      </button>
    </div>
  );
}
