import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Advice and insights for military officers pursuing an MBA. Application strategy, funding, school selection, and career transition.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy mb-3">Blog</h1>
        <p className="text-slate-dark mb-12 max-w-2xl">
          Practical advice for military officers considering, applying to, or
          preparing for business school.
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Posts */}
          <div className="md:w-2/3 space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border border-gray-100 rounded-xl p-6 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.category && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold mb-3 block">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-dark leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate pt-4 border-t border-gray-50">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <span className="text-gold/40">&#9670;</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="md:w-1/3 space-y-8">
            <div className="md:sticky md:top-24">
              <EmailCapture
                headline="Get the Free Checklist"
                description="The Military MBA Application Checklist. Know what to do and\u00a0when."
                buttonText="Send It"
              />
              <div className="bg-cream rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-navy mb-3 text-sm">Categories</h3>
                <ul className="space-y-2">
                  {["Admissions", "Funding", "School Selection", "Military Transition", "Getting Started"].map((cat) => (
                    <li key={cat} className="text-sm text-slate-dark hover:text-navy cursor-pointer transition-colors">
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
