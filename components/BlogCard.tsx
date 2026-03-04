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
    <article className="card-hover group bg-white border border-gray-100 rounded-xl p-6 h-full">
      <Link href={`/blog/${slug}`} className="block h-full flex flex-col">
        {category && (
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold mb-3 block">
            {category}
          </span>
        )}
        <h3 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-dark leading-relaxed mb-4 line-clamp-2 flex-1">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-slate pt-4 border-t border-gray-50">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-gold/40">&#9670;</span>
          <span>{readingTime}</span>
        </div>
      </Link>
    </article>
  );
}
