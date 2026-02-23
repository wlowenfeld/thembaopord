import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Wes",
  description:
    "Wes Lowenfeld is a military veteran, NYU Stern MBA '19 graduate, and author of The MBA OPORD. He coaches military officers through the MBA admissions process.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headshot placeholder */}
          <div className="w-32 h-32 bg-cream rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-3xl font-bold text-gold">WL</span>
          </div>

          <h1 className="text-3xl font-bold text-navy text-center mb-2">Wes Lowenfeld</h1>
          <p className="text-center text-gold-dark font-medium mb-8">
            Military Veteran &middot; NYU Stern MBA &apos;19 &middot; Author &middot; Coach
          </p>

          <div className="space-y-5 text-slate-dark leading-relaxed">
            <p>
              I spent years in the military before deciding to pursue an MBA. When I started
              looking into business school, I realized there was almost nothing written
              specifically for people like me. Plenty of general admissions guides existed, and
              plenty of veteran resource pages were buried on school websites, but nothing
              actually walked a military officer through the entire process from the perspective
              of someone who&apos;d done it.
            </p>
            <p>
              So I figured it out the hard way. I got into NYU Stern and graduated in 2019.
              Along the way, I learned what works and what doesn&apos;t when you&apos;re translating
              a military career for a civilian admissions committee. I learned how to fund
              a top MBA without going broke. And I learned what it actually takes to thrive
              in business school when your frame of reference is the military, not Wall Street.
            </p>
            <p>
              The MBA OPORD is the guide I wish I&apos;d had. I wrote it for the officer sitting
              in a TOC or a company HQ somewhere, wondering if this whole MBA thing is worth
              it. It is. And I want to help you get there.
            </p>
            <p>
              Beyond the book, I coach military officers one-on-one through the admissions
              process. I keep my client list small because I think this work is too important
              to mass-produce. If you want someone in your corner who&apos;s been through it,
              that&apos;s what I do.
            </p>
          </div>

          {/* TODO for Wes: Add specific details — branch, years of service, rank,
              roles/deployments you're comfortable sharing, and post-MBA career path.
              The current version is deliberately vague so you can fill in the specifics. */}

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coaching#strategy-call"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors"
            >
              Book a Free Call
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-md transition-colors"
            >
              Get the Book
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
