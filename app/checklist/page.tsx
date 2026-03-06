import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Military MBA Application Checklist",
  description:
    "A step-by-step checklist covering the entire MBA application process for military officers. From school selection to your deposit — every phase, in order.",
};

const phases = [
  {
    num: "01",
    title: "Strategy & School Selection",
    timeline: "18–15 months out",
    items: [
      "Define your post-MBA career goal (industry + function)",
      "Research 10–15 programs focused on military community & recruiting",
      "Talk to military alumni at each target school",
      "Narrow to 5–7 targets based on fit, not just ranking",
      "Build your school tracking spreadsheet",
      "Map your military timeline against application deadlines",
      "Decide your target round: R1, R2, or R3",
    ],
  },
  {
    num: "02",
    title: "Test Prep & GMAT/GRE",
    timeline: "12–10 months out",
    items: [
      "Take a diagnostic practice test to set your baseline",
      "Sign up for a prep course or self-study program",
      "Set your target score (10–20 points above school averages)",
      "Study 60–90 min/day, 4–5 days/week for 10–12 weeks",
      "Schedule test date — aim for 3 months before R1 deadline",
      "Take the GMAT/GRE",
    ],
  },
  {
    num: "03",
    title: "Recommenders",
    timeline: "10–8 months out",
    items: [
      "Identify 2–3 recommenders (CO/supervisor + peer + optional civilian)",
      "Ask in person — give them 6–8 weeks minimum",
      "Provide each a packet: resume, key talking points, draft essays, deadline",
      "Follow up at the halfway mark",
    ],
  },
  {
    num: "04",
    title: "Essays & Application",
    timeline: "8–5 months out",
    items: [
      "Answer core questions: Why MBA? Why now? Why this school?",
      "Draft essays — lead with future goals, not just military credentials",
      "Get feedback from 2–3 people who know MBA admissions",
      "Revise — cut anything generic or that reads like an OER bullet",
      "Complete each school's application form",
      "Prepare your military-to-civilian resume",
      "Submit 2 weeks before the deadline",
    ],
  },
  {
    num: "05",
    title: "Interviews",
    timeline: "4–2 months out",
    items: [
      "Prepare your 2-minute personal narrative (a story, not a bio)",
      "Prep: Why MBA? Why our school? Walk me through your resume.",
      "Practice with someone who gives honest feedback",
      "Interview — be authentic, answer the question asked",
      "Send a thank-you within 24 hours",
    ],
  },
  {
    num: "06",
    title: "Decisions & Next Steps",
    timeline: "1–0 months out",
    items: [
      "Compare offers: scholarships, community, recruiting, culture fit",
      "Run the funding math: GI Bill + Yellow Ribbon + scholarships + savings",
      "Submit your deposit",
      "Notify your command / begin transition paperwork",
      "Connect with incoming class and military veteran group",
    ],
  },
];

export default function ChecklistPage() {
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
              Free Resource
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight tracking-tight">
              The Military MBA Application Checklist
            </h1>
            <p className="text-lg text-slate-dark leading-relaxed max-w-2xl mb-8">
              Every step of the MBA application process for military officers — from initial
              research through your deposit. Six phases, in order, no guessing.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg shadow-sm">
              <p className="text-sm font-semibold text-navy mb-1">
                Download the printable PDF checklist
              </p>
              <p className="text-xs text-slate-dark mb-4">
                Drop your email and we&apos;ll send it straight to your inbox.
              </p>
              <EmailCapture variant="inline" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Checklist phases */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em] mb-3 text-center">
              The Process
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
              Six phases. One clear path.
            </h2>
            <p className="text-slate-dark text-center max-w-xl mx-auto mb-14">
              Work backward from your target matriculation date. Adjust for your PCS/ETS
              schedule — the military calendar comes first.
            </p>
          </AnimateIn>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <AnimateIn key={phase.num} delay={i * 60}>
                <div className="relative">
                  {/* Phase header */}
                  <div className="flex items-baseline gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-navy text-gold font-bold text-sm">
                        {phase.num}
                      </span>
                      <h3 className="text-lg font-bold text-navy">{phase.title}</h3>
                    </div>
                    <span className="hidden sm:inline text-xs text-slate bg-cream px-3 py-1 rounded-full">
                      {phase.timeline}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="ml-[52px] space-y-3">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded border border-gray-300 shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-dark leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  {i < phases.length - 1 && (
                    <div className="mt-10 border-t border-gray-100" />
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimateIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              You have the checklist. Now get a partner.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
              The checklist tells you what to do. Coaching helps you do it right. From school
              selection to interview prep, work with someone who&apos;s been through the exact same transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching#strategy-call"
                className="btn-shine inline-flex items-center justify-center px-8 py-3.5 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all"
              >
                Get the Book
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture variant="banner" />
    </>
  );
}
