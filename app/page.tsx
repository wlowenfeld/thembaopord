import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import BookCTA from "@/components/BookCTA";
import BlogCard from "@/components/BlogCard";
import AnimateIn from "@/components/AnimateIn";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream" />
        <div className="absolute inset-0 bg-grid" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimateIn delay={0} direction="none">
              <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-6">
                For Military Officers Pursuing an MBA
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] mb-6 tracking-tight">
                Your MBA mission deserves{" "}
                <span className="gold-underline">an operations order.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
              <p className="text-lg sm:text-xl text-slate-dark leading-relaxed mb-10 max-w-2xl">
                You&apos;ve planned complex operations under pressure. Applying to business school
                shouldn&apos;t be where you wing it.
              </p>
            </AnimateIn>
            <AnimateIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="btn-shine inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors text-center shadow-lg shadow-gold/20"
                >
                  Get the Book
                </Link>
                <Link
                  href="/coaching#strategy-call"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-navy/10 text-navy hover:border-navy hover:bg-navy hover:text-white font-semibold rounded-lg transition-all text-center"
                >
                  Free Strategy Call
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Credibility strip — minimal, not a banner */}
      <section className="py-4 border-y border-gray-100/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate tracking-wide uppercase">
            <span>NYU Stern MBA &apos;19</span>
            <span className="text-gold">&#9670;</span>
            <span>U.S. Military Veteran</span>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="max-w-2xl mb-16">
              <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">Who this is for</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
                Wherever you are in the process, this meets you there.
              </h2>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: "01",
                title: "Thinking About It",
                desc: "You know an MBA could change your trajectory, but you don't know where to start. The OPORD gives you the full picture before you commit.",
              },
              {
                stage: "02",
                title: "Ready to Apply",
                desc: "You've decided to go. Now you need to build a competitive application that translates your military experience for an admissions committee.",
              },
              {
                stage: "03",
                title: "Accepted & Preparing",
                desc: "You got in. The OPORD covers what nobody tells you about thriving in business school as a military officer, from day one through recruiting.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.stage} delay={i * 120}>
                <div className="card-hover group bg-white border border-gray-100 rounded-xl p-8 h-full">
                  <span className="text-xs font-bold text-gold tracking-widest">{item.stage}</span>
                  <h3 className="font-bold text-navy text-lg mt-3 mb-3 group-hover:text-gold-dark transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-dark leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resource: Decision Point Assessment */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-2xl blur-sm" />
              <div className="relative bg-white rounded-2xl p-10 sm:p-14 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start gap-8">
                  <div className="sm:flex-1">
                    <p className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">Free Assessment</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 leading-tight">
                      Are you actually ready for an MBA?
                    </h2>
                    <p className="text-slate-dark leading-relaxed mb-8">
                      Eight honest questions before you commit to applications. Takes five minutes.
                      Saves you months of going in the wrong direction.
                    </p>
                    <Link
                      href="/blog/decision-point-assessment-checklist"
                      className="btn-shine inline-flex items-center justify-center px-8 py-3.5 bg-navy hover:bg-navy-light text-white font-semibold rounded-lg transition-colors shadow-lg shadow-navy/10"
                    >
                      Take the Assessment
                    </Link>
                  </div>
                  {/* Decorative element */}
                  <div className="hidden sm:flex flex-col items-center gap-2 pt-2">
                    <div className="w-16 h-16 rounded-xl bg-cream flex items-center justify-center">
                      <span className="text-3xl font-bold text-gold">?</span>
                    </div>
                    <span className="text-xs text-slate">5 min</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Book preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              {/* Book cover — improved */}
              <div className="relative max-w-xs mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy/5 to-gold/5 rounded-2xl" />
                <div className="relative bg-navy rounded-xl shadow-2xl aspect-[3/4] flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-10 h-0.5 bg-gold/50 mb-6" />
                  <p className="text-gold/80 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6">
                    The Unofficial Military Officer&apos;s Guide
                  </p>
                  <h3 className="text-white text-3xl font-bold leading-none tracking-tight mb-1">THE MBA</h3>
                  <h3 className="text-white text-3xl font-bold leading-none tracking-tight">OPORD</h3>
                  <div className="w-16 h-0.5 bg-gold my-6" />
                  <p className="text-gray-400 text-xs tracking-wider uppercase">Wes Lowenfeld</p>
                  <div className="w-10 h-0.5 bg-gold/50 mt-6" />
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div>
                <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">The Book</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
                  The complete playbook, in the format you already know.
                </h2>
                <p className="text-slate-dark leading-relaxed mb-8">
                  Every phase of the MBA journey laid out in the five-paragraph operations order format.
                  No filler. Just the intel you need to execute.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "How to choose the right program for your goals and family",
                    "Translating military experience into a winning application",
                    "Funding strategies: GI Bill, Yellow Ribbon, and scholarships",
                    "What business school is actually like for a military officer",
                    "Recruiting, networking, and career transition planning",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold text-xs font-bold">&#10003;</span>
                      </div>
                      <span className="text-sm text-slate-dark leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark transition-colors group"
                >
                  Learn more about the book
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Coaching teaser */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div>
                <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">1-on-1 Coaching</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                  The book gives you strategy. Coaching gives you a partner.
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Someone who&apos;s been through the process, knows what admissions committees
                  look for, and will hold you accountable to getting it done right.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/coaching"
                    className="btn-shine inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    Explore Coaching
                  </Link>
                  <Link
                    href="/coaching#strategy-call"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all"
                  >
                    Free 20-Min Call
                  </Link>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "01", label: "School Selection\n& Strategy" },
                  { num: "02", label: "Application\nNarrative" },
                  { num: "03", label: "Essay Editing\n& Revisions" },
                  { num: "04", label: "Interview\nPreparation" },
                ].map((item) => (
                  <div key={item.num} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                    <span className="text-gold text-xs font-bold tracking-widest">{item.num}</span>
                    <p className="text-white text-sm font-medium mt-2 whitespace-pre-line leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {posts.length > 0 && (
        <section className="py-24 bg-cream">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateIn>
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">From the Blog</p>
                  <h2 className="text-3xl font-bold text-navy">Latest thinking</h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark transition-colors group"
                >
                  All posts
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </AnimateIn>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <AnimateIn key={post.slug} delay={i * 100}>
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    slug={post.slug}
                    readingTime={post.readingTime}
                    category={post.category}
                  />
                </AnimateIn>
              ))}
            </div>
            <Link
              href="/blog"
              className="sm:hidden inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark transition-colors mt-8 group"
            >
              All posts
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
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
