import Link from "next/link";
import type { Category } from "@/types";

interface Props {
  category: Category;
  active?: boolean;
}

export default function CategoryPill({ category, active = false }: Props) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
        active
          ? "bg-accent-primary/20 border-accent-primary/40 text-accent-secondary shadow-glow"
          : "border-glass-border text-text-secondary hover:border-accent-primary/20 hover:text-text-primary hover:bg-glass-hover"
      }`}
    >
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
      {category.name}
      <span className="text-xs text-text-muted">({category.articleCount})</span>
    </Link>
  );
}
