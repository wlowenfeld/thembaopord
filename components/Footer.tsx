import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">THE MBA OPORD</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The definitive guide for military officers pursuing an MBA. Written by a veteran who&apos;s been through it.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/book" className="text-sm text-gray-300 hover:text-white transition-colors">
                  The Book
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Wes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Get Started</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/coaching#strategy-call" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Free 20-Min Strategy Call
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Buy the Book
                </Link>
              </li>
              <li>
                <a href="mailto:wes@thembaopord.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  wes@thembaopord.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} The MBA OPORD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
