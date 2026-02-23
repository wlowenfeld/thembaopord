"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-navy font-bold text-lg tracking-tight">
            THE MBA OPORD
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/book" className="text-sm font-medium text-slate-dark hover:text-navy transition-colors">
              The Book
            </Link>
            <Link href="/coaching" className="text-sm font-medium text-slate-dark hover:text-navy transition-colors">
              Coaching
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-dark hover:text-navy transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-dark hover:text-navy transition-colors">
              About
            </Link>
            <Link
              href="/coaching#strategy-call"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gold hover:bg-gold-dark rounded-md transition-colors"
            >
              Free Strategy Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 pb-4">
          <div className="px-4 space-y-3">
            <Link href="/book" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-dark hover:text-navy">
              The Book
            </Link>
            <Link href="/coaching" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-dark hover:text-navy">
              Coaching
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-dark hover:text-navy">
              Blog
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-dark hover:text-navy">
              About
            </Link>
            <Link
              href="/coaching#strategy-call"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gold hover:bg-gold-dark rounded-md transition-colors"
            >
              Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
