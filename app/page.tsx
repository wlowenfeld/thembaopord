import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";
import AnimateIn from "@/components/AnimateIn";
import BookCover from "@/components/BookCover";
import ReadinessQuiz from "@/components/ReadinessQuiz";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — Big serif type, asymmetric, editorial
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        {/* Subtle diagonal gold line */}
        <div
          className="absolute top-0 right-0 w-[1px] h-[140%] bg-gradient-to-b from-transparent via-gold/30 to-transparent origin-top-right"
          style={{ transform: "rotate(-20deg)", transformOrigin: "top right" }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            {/* Text — takes 7 of 12 cols */}
            <div className="md:col-span-7">
              <AnimateIn delay={0} direction="none">
                <p className="text-gold/80 text-xs uppercase tracking-[0.3em] mb-8 font-medium">
                  For Military Officers Pursuing an MBA
                </p>
              </AnimateIn>
              <AnimateIn delay={100}>
                <h1 className="font-serif text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] text-white leading-[1.05] tracking-tight mb-8">
                  The process isn&apos;t hard.
                  <br />
                  <span className="text-gold italic">It&apos;s just built for
                  someone else.</span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={200}>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-12">
                  Every MBA admissions resource assumes you&apos;re a consultant or a banker. You&apos;re not. You need a guide written by someone who made the same transition you&apos;re about to make.
                </p>
              </AnimateIn>
              <AnimateIn delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Link
                    href="/coaching#strategy-call"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all"
                  >
                    Book a Free Strategy Call
                    <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center px-8 py-4 text-white/70 hover:text-white font-medium transition-colors"
                  >
                    Or start with the book
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Book cover — takes 5 of 12, offset high */}
            <div className="md:col-span-5 hidden md:flex justify-end">
              <AnimateIn delay={400} direction="right">
                <div className="relative -mb-16">
                  <BookCover className="w-[260px] rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]" />
                </div>
              </AnimateIn>
            </div>
          </div>

          {/* Minimal credential line */}
          <AnimateIn delay={500} direction="none">
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm tracking-wide">
                Written by <span className="text-white/70">Wes Lowenfeld</span> &mdash; NYU Stern MBA &apos;19, U.S. Army veteran
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROBLEM — Full-width text, no cards
          ═══════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">The Problem</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug mb-8">
              You don&apos;t need more motivation. You need someone to tell you exactly what to do.
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="space-y-6 text-slate-dark leading-relaxed text-[1.05rem]">
              <p>
                Right now you&apos;re Googling &ldquo;military MBA admissions&rdquo; at 11pm and getting
                advice written for 24-year-old consultants. Your essays read like performance reviews.
                You can&apos;t explain what a Battalion S3 does to a civilian admissions committee. And
                nobody in your chain of command has done this before.
              </p>
              <p>
                The information exists. It&apos;s just scattered across forums, blogs, and people who
                charge $400/hour to help bankers get into HBS. None of it was built for you.
              </p>
              <p className="text-navy font-semibold">
                I built it for you.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TWO PATHS — Coaching (primary) + Book
          Large asymmetric split, not identical cards
          ═══════════════════════════════════════════ */}
      <section className="py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">Two Ways In</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug mb-16 max-w-2xl">
              Whether you want a guide or a partner, I&apos;ve got you.
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Coaching — bigger, primary */}
            <div className="md:col-span-7">
              <AnimateIn delay={100}>
                <div className="bg-navy rounded-2xl p-10 sm:p-12 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-10 -mt-10" />
                  <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium relative">Recommended</p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-5 relative">
                    1-on-1 Coaching
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 max-w-md relative">
                    School selection. Essay strategy. Interview prep. We work through your entire application
                    together until it&apos;s airtight. You bring the experience &mdash; I help you frame it.
                  </p>
                  <div className="space-y-3 mb-8 relative">
                    {["Free 20-min strategy call to start", "Tailored to your branch, rank & timeline", "Essays, resume, interview \u2014 the full stack"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/coaching#strategy-call"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all relative"
                  >
                    Book a Free Call
                    <span className="inline-block transition-transform group-hover/btn:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Book — smaller, secondary */}
            <div className="md:col-span-5">
              <AnimateIn delay={200}>
                <div className="bg-white border border-gray-200 rounded-2xl p-10 sm:p-12 h-full flex flex-col">
                  <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium">Self-Guided</p>
                  <h3 className="font-serif text-3xl text-navy leading-tight mb-5">
                    The Book
                  </h3>
                  <p className="text-slate-dark leading-relaxed mb-6 flex-1">
                    Everything I tell my coaching clients, in OPORD format.
                    Is an MBA worth it? How to pick schools. Essays that don&apos;t read like OER bullets.
                    Funding. Thriving once you get there. No filler.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-lg transition-all"
                    >
                      Get the Book
                    </Link>
                    <Link
                      href="/checklist"
                      className="text-center text-sm text-slate hover:text-gold-dark transition-colors font-medium"
                    >
                      Or download the free checklist &rarr;
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW COACHING WORKS — Numbered steps, editorial
          ═══════════════════════════════════════════ */}
      <section id="how-it-works" className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">How It Works</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug mb-16 max-w-xl">
              Three steps. No ambiguity.
            </h2>
          </AnimateIn>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Strategy Call",
                desc: "20 minutes. We figure out where you are, where you want to go, and whether working together makes sense. No pitch.",
              },
              {
                num: "02",
                title: "Build Your Plan",
                desc: "Target schools, application timeline, essay strategy, recommender approach. Every piece of your application gets a clear plan tailored to your branch, rank, and PCS/ETS schedule.",
              },
              {
                num: "03",
                title: "Execute Together",
                desc: "Essays, resume translation, interview prep — we work through each element until your application is as strong as your service record.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 100}>
                <div className="grid md:grid-cols-12 gap-6 py-10 border-b border-gray-100 last:border-0 items-baseline">
                  <div className="md:col-span-1">
                    <span className="font-serif text-5xl text-gold/30 font-light">{item.num}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-slate-dark leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={350}>
            <div className="mt-14">
              <Link
                href="/coaching#strategy-call"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all text-lg"
              >
                Start with a Free Call
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <p className="text-sm text-slate mt-4">No commitment. No credit card.</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / CREDIBILITY — Not stats, a story
          ═══════════════════════════════════════════ */}
      <section className="py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6 font-medium">Who&apos;s Behind This</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug mb-8">
              I made this transition. Now I help other officers do the same.
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="space-y-5 text-slate-dark leading-relaxed text-[1.05rem]">
              <p>
                I&apos;m Wes Lowenfeld. I went from the Army to NYU Stern, class of 2019. The transition
                was harder than it needed to be &mdash; not because I wasn&apos;t qualified, but because
                nobody had organized the process for people like me.
              </p>
              <p>
                So I wrote the book I wish I&apos;d had, and started coaching the officers I wish someone
                had coached me. That&apos;s it. No big agency. Just someone who&apos;s done it and can
                help you do it smarter.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div className="mt-10">
              <Link
                href="/about"
                className="text-navy font-semibold hover:text-gold-dark transition-colors group"
              >
                Read my full story <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUIZ — engagement + email capture
          ═══════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4 font-medium">2-Minute Assessment</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-snug mb-4">
                Where do you actually stand?
              </h2>
              <p className="text-slate-dark">
                Eight questions. Honest answers. A clear picture of what you need to do next.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={150}>
            <ReadinessQuiz />
          </AnimateIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA — One strong close
          ═══════════════════════════════════════════ */}
      <section className="py-28 bg-navy relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <div className="w-8 h-px bg-gold mx-auto mb-10" />
            <h2 className="font-serif text-3xl sm:text-[2.75rem] text-white leading-tight mb-6">
              A 20-minute call costs you nothing.
              <br />
              <span className="text-gold/80">Guessing costs you a year.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you&apos;re 18 months out or submitting next month, the call is free and the
              advice is specific to your situation.
            </p>
            <Link
              href="/coaching#strategy-call"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-all text-lg"
            >
              Book Your Free Call
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture variant="banner" />
    </>
  );
}
