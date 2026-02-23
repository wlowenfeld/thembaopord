import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The MBA OPORD website.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate mb-10">Last updated: February 22, 2026</p>

        <div className="prose max-w-none">
          <h2>Overview</h2>
          <p>
            The MBA OPORD (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
            thembaopord.com. This page informs you of our policies regarding the collection,
            use, and disclosure of personal information when you use our website.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you voluntarily provide when you subscribe to our
            email list, book a coaching call, or contact us directly. This may include
            your name, email address, and any information you share in messages to us.
          </p>
          <p>
            We also automatically collect certain technical information when you visit
            our website, including your IP address, browser type, and pages visited.
            This is collected through standard web analytics tools to help us understand
            how visitors use our site.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Send you the email content you signed up for (newsletters, guides, checklists)</li>
            <li>Respond to your inquiries and provide coaching services</li>
            <li>Improve our website and content</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Email Communications</h2>
          <p>
            If you subscribe to our email list, we use MailerLite to manage our email
            communications. You can unsubscribe at any time by clicking the unsubscribe
            link in any email we send. We will never sell or share your email address
            with third parties for marketing purposes.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to improve
            your experience. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use the following third-party services that may collect information:
          </p>
          <ul>
            <li>Vercel (website hosting)</li>
            <li>MailerLite (email marketing)</li>
            <li>Calendly (appointment scheduling)</li>
            <li>Google Analytics (website analytics)</li>
          </ul>
          <p>
            Each of these services has its own privacy policy governing how they handle
            your data.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information. However,
            no method of transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete the personal information we
            hold about you. To exercise these rights, contact us at{" "}
            <a href="mailto:wes@thembaopord.com">wes@thembaopord.com</a>.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for individuals under the age of 18. We do not
            knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of
            any changes by posting the new policy on this page and updating the &quot;last
            updated&quot; date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, contact us at{" "}
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
