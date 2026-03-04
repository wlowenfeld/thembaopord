import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one MBA admissions coaching for military officers. From application strategy to interview prep, work with a Stern MBA '19 grad who's been through the transition.",
};

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-cream" />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">
              MBA Admissions Coaching
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight tracking-tight">
              Your application is too important to figure out alone.
            </h1>
            <p className="text-lg text-slate-dark leading-relaxed max-w-2xl">
              You wouldn&apos;t plan a mission without intel. Don&apos;t plan your MBA application
              without someone who&apos;s been through it and knows what top programs look for.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3 text-center">The Process</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-12 text-center">Three steps. Zero guesswork.</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Call",
                desc: "Book a free 20-minute call. We assess where you are, where you want to go, and whether coaching is the right fit.",
              },
              {
                step: "02",
                title: "Build Your Plan",
                desc: "We map out your school targets, timeline, and application strategy. Every piece of your application gets a clear plan.",
              },
              {
                step: "03",
                title: "Execute Together",
                desc: "From essays to interviews, we work through each element side by side. You bring the experience; I help you frame it.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.step} delay={i * 120}>
                <div className="card-hover text-center bg-white border border-gray-100 rounded-xl p-8 h-full">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cream text-gold font-bold text-sm">{item.step}</span>
                  <h3 className="font-bold text-navy mt-4 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-dark leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">Pricing</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Coaching Options</h2>
              <p className="text-slate-dark max-w-xl mx-auto">
                One flat price for your entire admissions cycle. No per-school fees,
                no nickel-and-diming. The work you do applies everywhere you apply.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Comprehensive */}
            <AnimateIn delay={0}>
              <div className="relative bg-white border-2 border-gold rounded-xl p-8 flex flex-col h-full shadow-sm">
                <span className="absolute -top-3 left-6 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Full Cycle
                </span>
                <h3 className="font-bold text-navy text-lg">Comprehensive Coaching</h3>
                <div className="mt-3 mb-1">
                  <span className="text-4xl font-bold text-navy">$4,999</span>
                </div>
                <p className="text-sm text-slate mb-8">Your entire admissions cycle</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "School selection strategy and target list",
                    "Application narrative and positioning",
                    "Resume review and optimization",
                    "Essay editing with unlimited revisions",
                    "Interview preparation and mock interviews",
                    "Funding strategy (GI Bill, Yellow Ribbon, scholarships)",
                    "Unlimited email support through decisions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-dark">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold text-xs font-bold">&#10003;</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#strategy-call"
                  className="btn-shine block text-center px-6 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-gold/15"
                >
                  Get Started
                </Link>
              </div>
            </AnimateIn>

            {/* Hourly */}
            <AnimateIn delay={150}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col h-full">
                <h3 className="font-bold text-navy text-lg">Hourly Consulting</h3>
                <div className="mt-3 mb-1">
                  <span className="text-4xl font-bold text-navy">$300</span>
                  <span className="text-base font-normal text-slate ml-1">/hr</span>
                </div>
                <p className="text-sm text-slate mb-8">2-hour minimum</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {[
                    "Targeted help on specific areas",
                    "Essay review and feedback",
                    "Interview preparation",
                    "Resume optimization",
                    "School selection guidance",
                    "Application strategy session",
                    "No ongoing commitment required",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-dark">
                      <div className="w-5 h-5 rounded-full bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-navy text-xs font-bold">&#10003;</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#strategy-call"
                  className="block text-center px-6 py-3.5 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-lg transition-all"
                >
                  Get Started
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Launch offer */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4">Limited Launch Offer</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              First 5 clients: Comprehensive Coaching for $2,499
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              I&apos;m building something new and I want to get it right. The first five
              coaching clients get the full package at half price
              in exchange for a detailed, honest testimonial after your admissions cycle.
            </p>
            <Link
              href="#strategy-call"
              className="btn-shine pulse-gold inline-flex items-center px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors"
            >
              Claim a Launch Spot
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Why Wes */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">About Your Coach</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8">Why work with me?</h2>
            <div className="space-y-5 text-slate-dark leading-relaxed">
              <p>
                I&apos;m not a career admissions consultant who read about the military in a
                prep book. I served. I went through this exact process. I sat in the same
                seat you&apos;re in now, wondering whether an MBA was worth it, trying to
                figure out how to explain my military career to a civilian admissions
                committee, and sweating the details of every essay.
              </p>
              <p>
                I graduated from NYU Stern in 2019. I know what top programs look for, I
                know where military officers tend to get tripped up, and I know how to
                frame your experience so that admissions committees see what I see: someone
                who&apos;s already proven they can lead under pressure.
              </p>
              <p>
                This isn&apos;t a volume operation. I work with a small number of clients at a
                time so you get real attention, not a template with your name swapped in.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10">Common questions</h2>
          </AnimateIn>
          <div className="space-y-6">
            {[
              {
                q: "When should I start coaching?",
                a: "Ideally, 6\u20138 months before your target application deadline. That gives us time to build your school list, develop your narrative, and draft strong applications without rushing. But if you\u2019re closer to a deadline, we can work on an accelerated timeline.",
              },
              {
                q: "Why one flat price instead of per-school?",
                a: "Because the real work is building your story, sharpening your resume, and developing your application strategy. Once that foundation is set, adapting it for additional schools is straightforward. I don\u2019t want you making school list decisions based on coaching fees.",
              },
              {
                q: "Do you only work with military officers?",
                a: "Yes. Military officers are my focus because translating military experience for civilian admissions committees is a specific skill. I understand the career paths, the language, and the transition challenges in a way that generalist consultants don\u2019t.",
              },
              {
                q: "What if I'm not sure I even want an MBA?",
                a: "That\u2019s a perfectly valid place to start. Book a strategy call. We can talk through whether an MBA makes sense for your goals before you commit to anything.",
              },
              {
                q: "How are sessions conducted?",
                a: "Video call, typically Zoom. I work around military schedules, including deployments and time zone differences. We\u2019ll figure out a cadence that works for your situation.",
              },
              {
                q: "What's your success rate?",
                a: "I\u2019m transparent about this: I\u2019m launching my coaching practice. I don\u2019t have a public track record yet, which is exactly why the first five clients get a significant discount. What I do have is firsthand experience getting into a top program as a military officer and the deep knowledge that comes from writing the book on it.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.q} delay={i * 60}>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-dark leading-relaxed">{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy call CTA */}
      <section id="strategy-call" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
              Book your free strategy call
            </h2>
            <p className="text-slate-dark mb-10 max-w-xl mx-auto">
              No pitch, no pressure. We&apos;ll talk about where you are, where you want to go,
              and whether coaching makes sense for your situation.
            </p>
            {/* Calendly embed placeholder */}
            <div className="bg-cream rounded-xl p-12 border border-gray-200">
              <p className="text-slate-dark font-medium mb-2">Calendly scheduling widget goes here</p>
              <p className="text-sm text-slate">
                Replace this placeholder with your Calendly embed code.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
