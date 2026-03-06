import React from 'react';

interface BookCoverProps {
  className?: string;
}

/**
 * Option A: "The Bold Type"
 * Inspired by Atomic Habits / Dare to Lead — massive title dominates,
 * ultra-clean negative space, confident and modern. The title IS the design.
 */
export default function BookCoverA({ className = '' }: BookCoverProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 600 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="a-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0D1525" />
            <stop offset="100%" stopColor="#1B2A4A" />
          </linearGradient>
          <linearGradient id="a-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C547" />
            <stop offset="50%" stopColor="#C4973B" />
            <stop offset="100%" stopColor="#D4A84B" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="600" height="800" fill="url(#a-bg)" />

        {/* Top category label */}
        <text
          x="300" y="90"
          fontSize="12"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="500"
          fill="#C4973B"
          textAnchor="middle"
          letterSpacing="5"
        >
          FOR MILITARY OFFICERS
        </text>

        {/* Thin gold rule under label */}
        <line x1="220" y1="105" x2="380" y2="105" stroke="#C4973B" strokeWidth="1" opacity="0.6" />

        {/* THE — large, white, tracking wide */}
        <text
          x="300" y="255"
          fontSize="100"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
          letterSpacing="18"
        >
          THE
        </text>

        {/* MBA — massive, gold gradient, tight tracking */}
        <text
          x="300" y="370"
          fontSize="155"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="900"
          fill="url(#a-gold)"
          textAnchor="middle"
          letterSpacing="-3"
        >
          MBA
        </text>

        {/* OPORD — massive, white, tight tracking */}
        <text
          x="300" y="490"
          fontSize="130"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
          letterSpacing="-2"
        >
          OPORD
        </text>

        {/* Subtitle — clean, spaced */}
        <text
          x="300" y="560"
          fontSize="16"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="400"
          fill="#8899B8"
          textAnchor="middle"
          letterSpacing="1"
        >
          From Application to Graduation
        </text>

        {/* Gold bar accent — thick and bold */}
        <rect x="250" y="590" width="100" height="4" rx="2" fill="#C4973B" />

        {/* Author */}
        <text
          x="300" y="720"
          fontSize="14"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="600"
          fill="#C4973B"
          textAnchor="middle"
          letterSpacing="4"
        >
          WES LOWENFELD
        </text>

        {/* Subtle credential */}
        <text
          x="300" y="745"
          fontSize="10"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="400"
          fill="#5A6B8A"
          textAnchor="middle"
          letterSpacing="2"
        >
          NYU STERN MBA &apos;19 &bull; U.S. ARMY VETERAN
        </text>
      </svg>
    </div>
  );
}
