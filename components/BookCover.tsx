import React from 'react';

interface BookCoverProps {
  className?: string;
}

export default function BookCover({ className = '' }: BookCoverProps) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 300 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        }}
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F1A30" />
            <stop offset="100%" stopColor="#1B2A4A" />
          </linearGradient>

          {/* Subtle texture overlay */}
          <pattern
            id="texturePattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="#C4973B" opacity="0.08" />
            <circle cx="30" cy="30" r="1" fill="#C4973B" opacity="0.08" />
            <circle cx="20" cy="5" r="0.5" fill="#C4973B" opacity="0.05" />
            <circle cx="35" cy="20" r="0.5" fill="#C4973B" opacity="0.05" />
          </pattern>

          {/* Gold gradient for premium feel */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8C547" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          {/* Compass rose pattern behind title */}
          <g id="compassRose">
            <circle cx="150" cy="150" r="35" fill="none" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
            <circle cx="150" cy="150" r="25" fill="none" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
            <line x1="150" y1="115" x2="150" y2="185" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
            <line x1="115" y1="150" x2="185" y2="150" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
            <line x1="127" y1="127" x2="173" y2="173" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
            <line x1="173" y1="127" x2="127" y2="173" stroke="#C4973B" strokeWidth="0.5" opacity="0.15" />
          </g>
        </defs>

        {/* Main background */}
        <rect width="300" height="400" fill="url(#bgGradient)" />

        {/* Texture overlay */}
        <rect width="300" height="400" fill="url(#texturePattern)" />

        {/* Gold corner accents - top left */}
        <path
          d="M 0 0 L 30 0 L 0 30 Z"
          fill="none"
          stroke="#C4973B"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Gold corner accents - top right */}
        <path
          d="M 300 0 L 270 0 L 300 30 Z"
          fill="none"
          stroke="#C4973B"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Gold corner accents - bottom left */}
        <path
          d="M 0 400 L 30 400 L 0 370 Z"
          fill="none"
          stroke="#C4973B"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Gold corner accents - bottom right */}
        <path
          d="M 300 400 L 270 400 L 300 370 Z"
          fill="none"
          stroke="#C4973B"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Top horizontal line */}
        <line x1="30" y1="25" x2="270" y2="25" stroke="#C4973B" strokeWidth="1.5" opacity="0.8" />

        {/* Subtitle text at top - small tracked out */}
        <text
          x="150"
          y="45"
          fontSize="8"
          fontFamily="'Helvetica', 'Arial', sans-serif"
          fontWeight="500"
          fill="#C4973B"
          textAnchor="middle"
          letterSpacing="2.5"
          opacity="0.9"
        >
          THE UNOFFICIAL MILITARY OFFICER&apos;S GUIDE
        </text>

        {/* Compass rose behind main title */}
        <use href="#compassRose" />

        {/* Main title - "THE MBA" */}
        <text
          x="150"
          y="155"
          fontSize="58"
          fontFamily="'Georgia', serif"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
          letterSpacing="-1.5"
        >
          THE MBA
        </text>

        {/* Main title - "OPORD" */}
        <text
          x="150"
          y="215"
          fontSize="68"
          fontFamily="'Georgia', serif"
          fontWeight="900"
          fill="url(#goldGradient)"
          textAnchor="middle"
          letterSpacing="-2"
        >
          OPORD
        </text>

        {/* Decorative chevron divider */}
        <g opacity="0.7">
          {/* Top chevron */}
          <polyline
            points="80,235 150,250 220,235"
            fill="none"
            stroke="#C4973B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bottom chevron */}
          <polyline
            points="80,260 150,245 220,260"
            fill="none"
            stroke="#C4973B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Subtle horizontal lines as accent pattern */}
        <g opacity="0.4">
          <line x1="70" y1="282" x2="230" y2="282" stroke="#C4973B" strokeWidth="0.8" />
          <line x1="70" y1="287" x2="230" y2="287" stroke="#C4973B" strokeWidth="0.8" />
          <line x1="70" y1="292" x2="230" y2="292" stroke="#C4973B" strokeWidth="0.8" />
        </g>

        {/* Subtitle text */}
        <text
          x="150"
          y="315"
          fontSize="11"
          fontFamily="'Helvetica', 'Arial', sans-serif"
          fontWeight="400"
          fill="#A8B8D8"
          textAnchor="middle"
          letterSpacing="0.3"
        >
          From Application to Graduation
        </text>

        {/* Author name */}
        <text
          x="150"
          y="365"
          fontSize="9"
          fontFamily="'Helvetica', 'Arial', sans-serif"
          fontWeight="600"
          fill="#C4973B"
          textAnchor="middle"
          letterSpacing="1.8"
        >
          WES LOWENFELD
        </text>

        {/* Bottom horizontal line */}
        <line x1="30" y1="375" x2="270" y2="375" stroke="#C4973B" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </div>
  );
}
