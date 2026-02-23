import Link from "next/link";

interface BookCTAProps {
  variant?: "full" | "compact";
}

export default function BookCTA({ variant = "full" }: BookCTAProps) {
  if (variant === "compact") {
    return (
      <div className="bg-navy rounded-lg p-6 text-center">
        <p className="text-white font-semibold mb-2">Ready to start your MBA journey?</p>
        <p className="text-gray-300 text-sm mb-4">Get the complete playbook.</p>
        <Link
          href="/book"
          className="inline-flex items-center px-5 py-2.5 bg-gold hover:bg-gold-dark text-white font-semibold text-sm rounded-md transition-colors"
        >
          Get the Book
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-navy py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Your MBA mission starts here.
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          The MBA OPORD covers everything from choosing the right program to funding your degree,
          acing your applications, and thriving once you get there. Written by someone who&apos;s done it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-3 bg-gold hover:bg-gold-dark text-white font-semibold rounded-md transition-colors"
          >
            Get the Book
          </Link>
          <Link
            href="/coaching#strategy-call"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-md transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
}
