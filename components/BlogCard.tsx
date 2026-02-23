import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readingTime: string;
  category?: string;
}

export default function BlogCard({ title, excerpt, date, slug, readingTime, category }: BlogCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block">
        {category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-navy group-hover:text-gold-dark transition-colors mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-dark leading-relaxed mb-3 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-slate">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-gray-300">|</span>
          <span>{readingTime}</span>
        </div>
      </Link>
    </article>
  );
}
