import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "One-on-one MBA admissions coaching for military officers. From application strategy to interview prep, work with a Stern MBA '19 grad who's been through the transition.",
};

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            MBA Admissions Coaching
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Your application is too important to figure out alone.
          </h1>
          <p className="text-lg text-slate-dark leading-relaxed max-w-2xl">
            You wouldn&apos;t plan a mission without intel. Don&apos;t plan your MBA application
            without someone who&apos;s been through the process, knows what top programs look for,
            and understands the unique position of military officers.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Call",
                desc: "Book a free 20-minute call. We'll assess where you are, where you want to go, and whether coaching is the right fit.",
              },
              {
                step: "02",
                title: "Build Your Plan",
                desc: "We map out your school targets, timeline, and application strategy. Every piece of your application gets a clear plan.",
              },
              {
                step: "03",
                title: "Execute Together",
                desc: "From essays to interviews, we work through each element side by side. You bring the experience; I'll help you frame it.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="text-3xl font-bold text-gold">{item.step}</span>
                <h3 className="font-semibold text-navy mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-dark leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-3 text-center">Coaching Options</h2>
          <p className="text-slate-dark text-center mb-10 max-w-2xl mx-auto">
            One flat price for your entire admissions cycle. No per-school fees,
            no nickel-and-diming. The work you do to build a great application
            applies everywhere you apply.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Comprehensive */}
            <div className="border-2 border-gold rounded-lg p-8 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Full Cycle
              </span>
              <h3 className="font-semibold text-navy text-lg">Comprehensive Coaching</h3>
              <p className="text-3xl font-bold text-navy mt-2 mb-1">$5,000</p>
              <p className="text-sm text-slate mb-6">Your entire admissions cycle, up to 5 schools</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "School selection strategy and target list",
                  "Application narrative and positioning",
                  "Resume review and optimization",
                  "Essay editing with unlimited revisions",
                  "Interview preparation and mock interviews",
                  "Funding strategy (GI Bill, Yellow Ribbon, scholarships)",
                  "Unlimited email support through decisions",
                  "Covers up to 5 school applications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-dark">
                    <span className="text-gold font-bold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#strategy-call"
                className="block text-center px-6 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Hourly */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col">
              <h3 className="font-semibold text-navy text-lg">Hourly Consulting</h3>
              <p className="text-3xl font-bold text-navy mt-2 mb-1">$300<span className="text-base font-normal text-slate">/hr</span></p>
              <p className="text-sm text-slate mb-6">2-hour minimum</p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Targeted help on specific areas",
                  "Essay review and feedback",
                  "Interview preparation",
                  "Resume optimization",
                  "School selection guidance",
                  "Application strategy session",
                  "No ongoing commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-dark">
                    <span className="text-gold font-bold mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#strategy-call"
                className="block text-center px-6 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Launch offer */}
      <section className="py-12 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Limited Launch Offer</p>
          <h2 className="text-2xl font-bold text-white mb-4">
            First 5 clients: Comprehensive Coaching for $2,500
          </h2>
          <p className="text-gray-300 mb-6">
            I&apos;m building something new, and I want to get it right. The first five
            coaching clients get the full Comprehensive Coaching package at half price
            in exchange for a detailed, honest testimonial after your admissions cycle.
          </p>
          <Link
            href="#strategy-call"
            className="inline-flex items-center px-8 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors"
          >
            Claim a Launch Spot
          </Link>
        </div>
      </section>

      {/* Why Wes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-6">Why work with me?</h2>
          <div className="space-y-4 text-slate-dark leading-relaxed">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "When should I start coaching?",
                a: "Ideally, 6-8 months before your target application deadline. That gives us time to build your school list, develop your narrative, and draft strong applications without rushing. But if you're closer to a deadline, we can work on an accelerated timeline.",
              },
              {
                q: "Why one flat price instead of per-school?",
                a: "Because the real work is building your story, sharpening your resume, and developing your application strategy. Once that foundation is set, adapting it for additional schools is straightforward. Charging per school doesn't reflect how the work actually happens, and I don't want you making school list decisions based on coaching fees.",
              },
              {
                q: "Do you only work with military officers?",
                a: "Yes. Military officers are my focus because translating military experience for civilian admissions committees is a specific skill. I understand the career paths, the language, and the transition challenges in a way that generalist consultants don't.",
              },
              {
                q: "What if I'm not sure I even want an MBA?",
                a: "That's a perfectly valid place to start. Book a strategy call. We can talk through whether an MBA makes sense for your goals before you commit to anything.",
              },
              {
                q: "How are sessions conducted?",
                a: "Video call, typically Zoom. I work around military schedules, including deployments and time zone differences. We'll figure out a cadence that works for your situation.",
              },
              {
                q: "What's your success rate?",
                a: "I'm transparent about this: I'm launching my coaching practice. I don't have a public track record yet, which is exactly why the first five clients get a significant discount. What I do have is firsthand experience getting into a top program as a military officer and the deep knowledge that comes from writing the book on it.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-navy mb-2">{item.q}</h3>
                <p className="text-sm text-slate-dark leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy call CTA */}
      <section id="strategy-call" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Book your free 20-minute strategy call</h2>
          <p className="text-slate-dark mb-8 max-w-xl mx-auto">
            No pitch, no pressure. We&apos;ll talk about where you are, where you want to go,
            and whether coaching makes sense for your situation.
          </p>
          {/* Calendly embed placeholder */}
          <div className="bg-cream rounded-lg p-12 border-2 border-dashed border-gray-300">
            <p className="text-slate-dark font-medium mb-2">Calendly scheduling widget goes here</p>
            <p className="text-sm text-slate">
              Replace this placeholder with your Calendly embed code.<br />
              Add your Calendly link to the Nav and Footer &quot;Free Strategy Call&quot; buttons.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
