import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import BookCTA from "@/components/BookCTA";
import BlogCard from "@/components/BlogCard";
import AnimateIn from "@/components/AnimateIn";
import BookCover from "@/components/BookCover";
import ReadinessQuiz from "@/components/ReadinessQuiz";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero — problem-first hook */}
      <section className="relative pt-32 pb-28 sm:pt-40 sm:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light" />
        {/* Angled gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0)"}} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <AnimateIn delay={0} direction="none">
                <p className="text-gold font-semibold text-xs uppercase tracking-[0.25em] mb-6">
                  For Military Officers
                </p>
              </AnimateIn>
              <AnimateIn delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] mb-6 tracking-tight">
                  The military gave you a playbook for everything{" "}
                  <span className="text-gold whitespace-nowrap">— except what comes next.</span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={200}>
                <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
                  You&apos;re staring at the biggest career decision of your life with no OPORD, no briefing, and no one in your chain who&apos;s done it. That changes now.
                </p>
              </AnimateIn>
              <AnimateIn delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/coaching#strategy-call"
                    className="btn-shine inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors text-center shadow-lg shadow-black/20"
                  >
                    Book a Free Strategy Call
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all text-center"
                  >
                    Get the Playbook
                  </Link>
                </div>
                {/* Trust signals */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-gold text-[10px] font-bold">&#9733;</span>
                    </div>
                    <span className="text-gray-300 text-xs font-medium">NYU Stern MBA &apos;19</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-gold text-[10px] font-bold">&#9733;</span>
                    </div>
                    <span className="text-gray-300 text-xs font-medium">U.S. Army Veteran</span>
                  </div>
                </div>
              </AnimateIn>
            </div>
            <div className="md:col-span-2 hidden md:block">
              <AnimateIn delay={400} direction="right">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gold/10 rounded-2xl blur-xl" />
                  <BookCover className="relative rounded-xl shadow-2xl shadow-black/40 max-w-[280px] mx-auto" />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points — what they're dealing with */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
                Sound familiar?
              </h2>
              <p className="text-slate-dark">
                Every military officer considering an MBA hits the same walls.
              </p>
            </div>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                pain: "You don't know if an MBA is actually worth it for your goals",
                solve: "The OPORD breaks down the real ROI — not the brochure version",
              },
              {
                pain: "You have no idea how to explain your military career to civilians",
                solve: "Chapter-by-chapter framework for translating your experience",
              },
              {
                pain: "The application process feels designed for people who aren't you",
                solve: "Built specifically for the military officer's application journey",
              },
              {
                pain: "You're making this decision mostly alone",
                solve: "1-on-1 coaching from someone who stood exactly where you are",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="card-hover group border border-gray-100 rounded-xl p-7 h-full bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/10 transition-colors">
                      <span className="text-red-400 text-sm group-hover:text-gold transition-colors">&#10005;</span>
                    </div>
                    <div>
                      <p className="text-navy font-semibold mb-2">{item.pain}</p>
                      <p className="text-sm text-slate-dark leading-relaxed">
                        <span className="text-gold font-semibold">&rarr;</span> {item.solve}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">Free Assessment</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
                Are you ready for an MBA?
              </h2>
              <p className="text-slate-dark">
                Eight quick questions. Two minutes. Find out where you stand.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={150}>
            <ReadinessQuiz />
          </AnimateIn>
        </div>
      </section>

      {/* Book preview — with real cover */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div className="space-y-3">
                {[
                  { num: "01", title: "The Decision Point", desc: "Is an MBA right for you?" },
                  { num: "02", title: "Building Your Narrative", desc: "Translating military experience" },
                  { num: "03", title: "The Application", desc: "Essays, recs, and tactical details" },
                  { num: "04", title: "Funding the Mission", desc: "GI Bill, Yellow Ribbon, scholarships" },
                  { num: "05", title: "Thriving in B-School", desc: "What nobody tells you about day one" },
                ].map((ch) => (
                  <div key={ch.num} className="flex items-center gap-4 bg-cream rounded-lg p-4 group hover:bg-gold/5 transition-colors">
                    <span className="text-gold text-xs font-bold tracking-widest shrink-0">{ch.num}</span>
                    <div>
                      <p className="text-navy font-semibold text-sm">{ch.title}</p>
                      <p className="text-slate text-xs">{ch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div>
                <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">The Book</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
                  Every phase. One playbook.
                </h2>
                <p className="text-slate-dark leading-relaxed mb-8">
                  Laid out in the five-paragraph operations order format you already know.
                  From deciding whether an MBA is right for you to thriving once you get there.
                </p>
                <Link
                  href="/book"
                  className="btn-shine inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-gold/15"
                >
                  Get the Book
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Coaching teaser */}
      <section className="py-24 bg-navy relative overflow-hidden">
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
                  <h2 className="text-3xl font-bold text-navy">Intel from the field</h2>
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
