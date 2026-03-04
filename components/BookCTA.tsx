import Link from "next/link";

interface BookCTAProps {
  variant?: "full" | "compact";
}

export default function BookCTA({ variant = "full" }: BookCTAProps) {
  if (variant === "compact") {
    return (
      <div className="bg-navy rounded-xl p-6 text-center">
        <p className="text-white font-semibold mb-2">Ready to start your MBA journey?</p>
        <p className="text-gray-300 text-sm mb-4">Get the complete playbook.</p>
        <Link
          href="/book"
          className="btn-shine inline-flex items-center px-5 py-2.5 bg-gold hover:bg-gold-dark text-white font-semibold text-sm rounded-lg transition-colors"
        >
          Get the Book
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy-dark" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          Your MBA mission starts here.
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          The MBA OPORD covers everything from choosing the right program to funding your degree,
          acing your applications, and thriving once you get there.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="btn-shine inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-dark text-white font-semibold rounded-lg transition-colors shadow-lg shadow-gold/20"
          >
            Get the Book
          </Link>
          <Link
            href="/coaching#strategy-call"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </section>
  );
}
