import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import BookCTA from "@/components/BookCTA";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              For Military Officers Pursuing an MBA
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight mb-6">
              Your MBA mission deserves an operations order.
            </h1>
            <p className="text-lg text-slate-dark leading-relaxed mb-8 max-w-2xl">
              You&apos;ve planned complex operations under pressure. Applying to business school
              shouldn&apos;t be where you wing it. The MBA OPORD is the playbook for military
              officers ready to make the transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors text-center"
              >
                Get the Book
              </Link>
              <Link
                href="/coaching#strategy-call"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-md transition-colors text-center"
              >
                Free 20-Min Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-cream-dark py-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-slate-dark">
            <span className="font-medium">NYU Stern MBA &apos;19</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="font-medium">Military Veteran</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="font-medium">MBA Admissions Coach</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="font-medium">Published Author</span>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Built for the military officer considering an MBA</h2>
            <p className="text-slate-dark leading-relaxed">
              Whether you&apos;re an O-1 exploring options or an O-4 planning your transition,
              this guide was written by someone who stood exactly where you are.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Thinking About It",
                desc: "You know an MBA could change your trajectory, but you don't know where to start. The OPORD gives you the full picture before you commit.",
              },
              {
                title: "Ready to Apply",
                desc: "You've decided to go. Now you need to build a competitive application that translates your military experience for an admissions committee.",
              },
              {
                title: "Accepted & Preparing",
                desc: "You got in. The OPORD covers what nobody tells you about thriving in business school as a military officer, from day one through recruiting.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-lg p-6">
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-slate-dark leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Book cover placeholder */}
              <div className="bg-navy rounded-lg shadow-xl aspect-[3/4] max-w-xs mx-auto flex flex-col items-center justify-center p-8 text-center">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">The Unofficial Military Officer&apos;s Guide</p>
                <h3 className="text-white text-2xl font-bold leading-tight mb-2">THE MBA<br />OPORD</h3>
                <div className="w-12 h-0.5 bg-gold my-4" />
                <p className="text-gray-300 text-sm">Wes Lowenfeld</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">The complete playbook</h2>
              <p className="text-slate-dark leading-relaxed mb-6">
                The MBA OPORD walks you through every phase of the MBA journey using
                the five-paragraph operations order format you already know. No filler,
                no fluff, just the intel you need to execute.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "How to choose the right program for your goals and family",
                  "Translating military experience into a winning application",
                  "Funding strategies: GI Bill, Yellow Ribbon, and scholarships",
                  "What business school is actually like for a military officer",
                  "Recruiting, networking, and career transition planning",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-dark">
                    <span className="text-gold mt-0.5 font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Want hands-on guidance?</h2>
            <p className="text-slate-dark leading-relaxed mb-6">
              The book gives you the strategy. Coaching gives you a partner who&apos;s been
              through the process, knows what admissions committees look for, and will hold
              you accountable to getting it done right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-md transition-colors"
              >
                Explore Coaching
              </Link>
              <Link
                href="/coaching#strategy-call"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gold text-gold-dark hover:bg-gold hover:text-white font-semibold rounded-md transition-colors"
              >
                Free 20-Min Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-navy">Latest from the Blog</h2>
              <Link href="/blog" className="text-sm font-semibold text-gold-dark hover:text-gold transition-colors">
                View all posts &rarr;
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </section>
      )}

      {/* Email capture */}
      <EmailCapture variant="banner" />

      {/* Book CTA */}
      <BookCTA />
    </>
  );
}
