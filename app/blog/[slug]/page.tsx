import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import EmailCapture from "@/components/EmailCapture";
import BookCTA from "@/components/BookCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Wes Lowenfeld"],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-navy mb-4">Post not found</h1>
          <Link href="/blog" className="text-gold-dark hover:text-gold">
            &larr; Back to blog
          </Link>
        </div>
      </section>
    );
  }

  const html = markdownToHtml(post.content);

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="pt-28 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <Link href="/blog" className="text-sm text-gold-dark hover:text-gold mb-6 inline-block">
            &larr; Back to blog
          </Link>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold block mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate mb-10">
            <span>By Wes Lowenfeld</span>
            <span className="text-gray-300">|</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="text-gray-300">|</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Inline CTA */}
          <div className="mt-12">
            <EmailCapture
              headline="Found this useful? Grab the free checklist."
              description="The Military MBA Application Checklist covers every step of the process. Free, no strings."
              buttonText="Get the Checklist"
            />
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy mb-8">More from the blog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <article key={p.slug} className="group">
                  <Link href={`/blog/${p.slug}`}>
                    <h3 className="font-semibold text-navy group-hover:text-gold-dark transition-colors text-sm leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate">{p.readingTime}</p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookCTA />
    </>
  );
}
