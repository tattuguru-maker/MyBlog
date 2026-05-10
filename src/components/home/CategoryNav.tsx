import { categories } from "@/data/mock";
import CategoryPill from "@/components/common/CategoryPill";

export default function CategoryNav() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-mono text-accent-secondary uppercase tracking-wider">Explore</span>
          <h2 className="text-display-sm font-bold text-text-primary mt-2">Browse by Category</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <CategoryPill key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
