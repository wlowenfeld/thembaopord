import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
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
          Practical advice for military officers considering, applying to, or preparing for
          business school. No fluff.
        </p>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          <div className="md:col-span-2 space-y-10">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
                readingTime={post.readingTime}
                category={post.category}
              />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <EmailCapture
              headline="Get the Free Checklist"
              description="The Military MBA Application Checklist. Know what to do and when."
              buttonText="Send It"
            />
            <div className="bg-cream rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-3 text-sm">Categories</h3>
              <ul className="space-y-2">
                {["Admissions", "Funding", "School Selection", "Military Transition"].map((cat) => (
                  <li key={cat} className="text-sm text-slate-dark hover:text-navy cursor-pointer transition-colors">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
