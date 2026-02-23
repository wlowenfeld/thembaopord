import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Book",
  description:
    "The MBA OPORD: The Unofficial Military Officer's Guide to Business School. Everything you need to know about choosing, applying to, funding, and thriving in an MBA program.",
};

export default function BookPage() {
  const chapters = [
    { num: 1, title: "The Decision Point", desc: "Is an MBA right for you? How to think about ROI, timing, and career goals." },
    { num: 2, title: "Why an MBA?", desc: "The real reasons military officers pursue an MBA, beyond the obvious." },
    { num: 3, title: "Choosing Your School", desc: "Rankings vs. fit. What actually matters when you have a family and a career to consider." },
    { num: 4, title: "Building Your Narrative", desc: "How to translate military experience into a story admissions committees want to hear." },
    { num: 5, title: "The Application", desc: "Essays, recommendations, resumes, and the tactical details that separate good from great." },
    { num: 6, title: "The Interview", desc: "What to expect and how to prepare without sounding like you're delivering a briefing." },
    { num: 7, title: "Funding the Mission", desc: "GI Bill, Yellow Ribbon, scholarships, and the math that makes a top MBA affordable." },
    { num: 8, title: "Thriving in Business School", desc: "The culture shift, study groups, and what nobody tells you about day one." },
    { num: 9, title: "The Home Front", desc: "Managing the transition with a spouse, kids, and a life outside the classroom." },
    { num: 10, title: "Recruiting and Careers", desc: "From first resume drop to final offer. How military officers recruit differently." },
    { num: 11, title: "Building Your Network", desc: "The relationships that matter most and how to build them before you need them." },
  ];

  return (
    <>
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            {/* Book cover */}
            <div className="md:col-span-2">
              <div className="bg-navy rounded-lg shadow-xl aspect-[3/4] flex flex-col items-center justify-center p-8 text-center sticky top-24">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                  The Unofficial Military Officer&apos;s Guide
                </p>
                <h2 className="text-white text-2xl font-bold leading-tight mb-2">THE MBA<br />OPORD</h2>
                <div className="w-12 h-0.5 bg-gold my-4" />
                <p className="text-gray-300 text-sm">Wes Lowenfeld</p>
              </div>
            </div>

            {/* Book details */}
            <div className="md:col-span-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                The MBA OPORD
              </h1>
              <p className="text-lg text-gold-dark font-medium mb-6">
                The Unofficial Military Officer&apos;s Guide to Business School
              </p>
              <p className="text-slate-dark leading-relaxed mb-4">
                You&apos;ve led soldiers, managed budgets bigger than most startups, and made
                decisions under conditions that would break most civilians. But when it comes
                to applying to business school, you&apos;re starting from scratch.
              </p>
              <p className="text-slate-dark leading-relaxed mb-6">
                The MBA OPORD is the field manual that doesn&apos;t exist. Written by a military
                veteran and Stern MBA &apos;19 grad, it covers every phase of the journey in the
                five-paragraph order format you already know. From deciding whether an MBA is
                right for you to thriving once you get there.
              </p>

              {/* Purchase CTA */}
              <div className="bg-cream rounded-lg p-6 mb-10">
                <p className="text-navy font-semibold mb-3">Get your copy:</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors"
                  >
                    Buy on Amazon
                  </a>
                  <span className="text-sm text-slate self-center">(Link available at launch)</span>
                </div>
              </div>

              {/* Chapter list */}
              <h2 className="text-2xl font-bold text-navy mb-6">What&apos;s Inside</h2>
              <div className="space-y-4">
                {chapters.map((ch) => (
                  <div key={ch.num} className="flex gap-4 items-start">
                    <span className="text-sm font-bold text-gold bg-cream rounded-md w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                      {ch.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy text-sm">{ch.title}</h3>
                      <p className="text-sm text-slate-dark">{ch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-xl mx-auto px-4">
          <EmailCapture
            headline="Not ready to buy yet? Grab the free checklist."
            description="The Military MBA Application Checklist covers the key steps and timeline. Yours free, no strings attached."
            buttonText="Get the Checklist"
          />
        </div>
      </section>

      {/* Coaching nudge */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Want personalized guidance?</h2>
          <p className="text-slate-dark mb-6">
            The book gives you the playbook. Coaching gives you a co-pilot.
            From essay strategy to interview prep, work one-on-one with someone
            who&apos;s been through it.
          </p>
          <Link
            href="/coaching"
            className="inline-flex items-center px-8 py-3 bg-navy hover:bg-navy-light text-white font-semibold rounded-md transition-colors"
          >
            Explore Coaching
          </Link>
        </div>
      </section>
    </>
  );
}
