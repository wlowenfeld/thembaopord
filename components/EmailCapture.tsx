"use client";

import { useState } from "react";

interface EmailCaptureProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  variant?: "inline" | "banner" | "sidebar";
}

export default function EmailCapture({
  headline = "Get the Free Military MBA Checklist",
  description = "A step-by-step application checklist built for military officers. Know exactly what to do and when.",
  buttonText = "Send Me the Checklist",
  variant = "inline",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`${variant === "banner" ? "bg-cream py-12" : "bg-cream rounded-lg p-8"}`}>
        <div className={variant === "banner" ? "max-w-2xl mx-auto text-center px-4" : "text-center"}>
          <p className="text-navy font-semibold text-lg mb-2">Check your inbox.</p>
          <p className="text-slate-dark">Your checklist is on the way. Keep an eye out for an email from The MBA OPORD.</p>
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <section className="bg-cream py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-navy mb-3">{headline}</h2>
          <p className="text-slate-dark mb-6">{description}</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@military.mil"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-gold hover:bg-gold-dark text-white font-semibold text-sm rounded-md transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : buttonText}
            </button>
          </form>
          {status === "error" && (
            <p className="text-red-600 text-sm mt-2">Something went wrong. Try again.</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <div className="bg-cream rounded-lg p-8">
      <h3 className="text-xl font-bold text-navy mb-2">{headline}</h3>
      <p className="text-slate-dark text-sm mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@military.mil"
          className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-3 bg-gold hover:bg-gold-dark text-white font-semibold text-sm rounded-md transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : buttonText}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">Something went wrong. Try again.</p>
      )}
    </div>
  );
}
