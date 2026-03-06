import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for The MBA OPORD website.",
};

export default function TermsPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Terms of Service</h1>
        <p className="text-sm text-slate mb-10">Last updated: February 22, 2026</p>

        <div className="prose max-w-none">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using thembaopord.com, you agree to be bound by these
            Terms of Service. If you disagree with any part of these terms, you may
            not access the website.
          </p>

          <h2>Informational Purposes</h2>
          <p>
            The content on this website, including blog posts, guides, and other
            materials, is provided for informational and educational purposes only.
            While we strive to provide accurate and up-to-date information about the
            MBA admissions process, we make no guarantees about admissions outcomes.
          </p>
          <p>
            Every applicant&apos;s situation is unique, and admissions decisions are made
            by individual schools based on their own criteria. Our content and coaching
            services are designed to help you present the strongest possible application,
            but we cannot and do not guarantee admission to any program.
          </p>

          <h2>Coaching Services</h2>
          <p>
            Coaching services are provided on the terms agreed upon at the time of
            purchase. Coaching is advisory in nature. We provide guidance, feedback,
            and strategy recommendations, but all application decisions remain yours.
          </p>
          <p>
            Refund requests for coaching services will be handled on a case-by-case
            basis. If you are unsatisfied with the coaching experience, contact us
            within 14 days of your first session.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images,
            is the property of The MBA OPORD and is protected by copyright law. You
            may not reproduce, distribute, or create derivative works from our content
            without express written permission.
          </p>
          <p>
            You may share links to our content and quote brief excerpts for
            non-commercial purposes with proper attribution.
          </p>

          <h2>User Conduct</h2>
          <p>
            You agree not to use the website in any way that could damage, disable,
            or impair the site, or interfere with any other party&apos;s use of the site.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            The MBA OPORD and its owner shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from your
            use of the website or services. Our total liability shall not exceed the
            amount you paid for services in the 12 months preceding the claim.
          </p>

          <h2>Disclaimer</h2>
          <p>
            This website is not affiliated with, endorsed by, or officially connected
            to any MBA program, business school, the U.S. Department of Defense, or
            any branch of the U.S. military. All opinions expressed are those of the
            author based on personal experience.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws
            of the United States, without regard to conflict of law provisions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will provide
            notice of significant changes by updating the date at the top of this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Contact us at{" "}
            <a href="mailto:wes@thembaopord.com">wes@thembaopord.com</a>.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm text-gold-dark hover:text-gold">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
