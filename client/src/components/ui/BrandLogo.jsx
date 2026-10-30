import React from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * SPEmblem: The official SP tech monogram from the brand artwork.
 * - Circular orbital arcs with accent node
 * - Geometric 'S' in text-primary
 * - Slanted 'P' in theme accent color with dual speed-trail marks
 * Completely unboxed, pure vector, zero background box.
 */
export const SPEmblem = ({ 
  size = 42, 
  className = "", 
  primaryColor, 
  accentColor,
  animate = true
}) => {
  const { activePalette } = useTheme();

  const activeAccent = accentColor || activePalette?.accent || 'var(--brand-primary)';
  const activePrimary = primaryColor || 'var(--text-primary)';

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
      className={`shrink-0 overflow-visible transition-transform duration-300 ${animate ? 'group-hover:scale-105' : ''} ${className}`}
    >
      {/* Top Orbital Arc (from ~9 o'clock over the top of S) */}
      <path
        d="M 10 48 C 10 26, 28 10, 56 10 C 67 10, 75 13, 81 17"
        stroke={activePrimary}
        strokeWidth="2.4"
        strokeLinecap="round"
        className="transition-colors duration-500"
      />

      {/* Floating Orbital Node (Accent Dot) */}
      <circle
        cx="88"
        cy="22"
        r="4"
        fill={activeAccent}
        className="transition-colors duration-500"
      />

      {/* Bottom Orbital Arc (under the P curving right) */}
      <path
        d="M 87 45 C 90 56, 88 70, 78 81 C 68 91, 52 95, 38 95 C 31 95, 25 93, 19 90"
        stroke={activeAccent}
        strokeWidth="2.4"
        strokeLinecap="round"
        className="transition-colors duration-500"
      />

      {/* Tech Speed Trail / Dash 1 (Upper Horizontal Dash) */}
      <rect
        x="12"
        y="58"
        width="11"
        height="4.8"
        rx="2"
        fill={activeAccent}
        className="transition-colors duration-500"
      />

      {/* Tech Speed Trail / Dash 2 (Lower Horizontal Dash) */}
      <rect
        x="5"
        y="70"
        width="13"
        height="4.8"
        rx="2"
        fill={activeAccent}
        className="transition-colors duration-500"
      />

      {/* Letter 'S' - Clean Bold Geometric Curve */}
      <path
        d="M 68 27 
           L 34 27 
           A 9 9 0 0 0 25 36 
           L 25 39 
           A 9 9 0 0 0 34 48 
           L 66 48 
           A 10 10 0 0 1 76 58 
           L 76 63 
           A 10 10 0 0 1 66 73 
           L 44 73"
        stroke={activePrimary}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-500"
      />

      {/* Letter 'P' - Dynamic Slanted Stem */}
      <path
        d="M 39 38 
           L 20 86"
        stroke={activeAccent}
        strokeWidth="7.2"
        strokeLinecap="round"
        className="transition-colors duration-500"
      />

      {/* Letter 'P' - Rounded Upper Loop */}
      <path
        d="M 36 41 
           L 61 41 
           A 12 12 0 0 1 73 53 
           L 73 53 
           A 12 12 0 0 1 61 65 
           L 29 65"
        stroke={activeAccent}
        strokeWidth="6.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-500"
      />
    </svg>
  );
};

/**
 * BrandLogo: Pure, clean, unboxed official brand lockup.
 * Structure:
 *   [SP Emblem]  |  [SUHANI PATEL]
 * 
 * - Zero background box, zero awkward borders, zero glow blobs.
 * - S and Text automatically track 'text-primary' (dark/light harmonious).
 * - P, speed dashes, orbital node, divider and 'A' deltas track active theme accent.
 */
export const BrandLogo = ({
  className = "",
  size = "md", // "sm" | "md" | "lg"
  showText = true,
  animate = true
}) => {
  const { activePalette } = useTheme();
  const accentColor = activePalette?.accent || 'var(--brand-primary)';
  const primaryTextColor = 'var(--text-primary)';

  const sizeMap = {
    sm: { emblemSize: 32, textHeight: "h-5 sm:h-5", dividerHeight: "h-5", gap: "gap-2.5" },
    md: { emblemSize: 42, textHeight: "h-6 sm:h-7", dividerHeight: "h-6 sm:h-7", gap: "gap-3 sm:gap-3.5" },
    lg: { emblemSize: 52, textHeight: "h-8 sm:h-9", dividerHeight: "h-8 sm:h-9", gap: "gap-4" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center ${currentSize.gap} select-none group transition-opacity duration-200 ${className}`}>
      {/* 1. SP Monogram Icon (No background box) */}
      <SPEmblem size={currentSize.emblemSize} animate={animate} />

      {/* 2. Vertical Tech Divider Line */}
      {showText && (
        <div
          className={`${currentSize.dividerHeight} w-[2px] rounded-full transition-colors duration-500 opacity-90`}
          style={{ backgroundColor: accentColor }}
        />
      )}

      {/* 3. SUHANI PATEL Logotype Wordmark */}
      {showText && (
        <div className="flex items-center">
          <svg
            viewBox="0 0 290 34"
            className={`${currentSize.textHeight} w-auto overflow-visible`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* === SUHANI === */}
            {/* S */}
            <path
              d="M 18 8 L 8 8 A 5 5 0 0 0 3 13 L 3 14 A 5 5 0 0 0 8 19 L 14 19 A 5 5 0 0 1 19 24 L 19 25 A 5 5 0 0 1 14 30 L 3 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />

            {/* U */}
            <path
              d="M 27 8 L 27 24 A 6 6 0 0 0 33 30 L 37 30 A 6 6 0 0 0 43 24 L 43 8"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              className="transition-colors duration-500"
            />

            {/* H */}
            <path
              d="M 51 8 L 51 30 M 67 8 L 67 30 M 51 19 L 67 19"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              className="transition-colors duration-500"
            />

            {/* A (Apex structure) */}
            <path
              d="M 75 30 L 84 8 L 93 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />
            {/* A (Inner theme-colored delta) */}
            <polygon
              points="84,15 79,24 89,24"
              fill={accentColor}
              className="transition-colors duration-500"
            />

            {/* N */}
            <path
              d="M 101 30 L 101 8 L 117 30 L 117 8"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />

            {/* I */}
            <path
              d="M 126 8 L 126 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              className="transition-colors duration-500"
            />

            {/* === PATEL === */}
            {/* P */}
            <path
              d="M 148 30 L 148 8 L 160 8 A 6 6 0 0 1 166 14 L 166 15 A 6 6 0 0 1 160 21 L 148 21"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />

            {/* A (Apex structure) */}
            <path
              d="M 174 30 L 183 8 L 192 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />
            {/* A (Inner theme-colored delta) */}
            <polygon
              points="183,15 178,24 188,24"
              fill={accentColor}
              className="transition-colors duration-500"
            />

            {/* T */}
            <path
              d="M 199 8 L 217 8 M 208 8 L 208 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              className="transition-colors duration-500"
            />

            {/* E (Futuristic stencil 3 clean horizontal bars) */}
            <path
              d="M 224 8 L 241 8 M 224 19 L 238 19 M 224 30 L 241 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              className="transition-colors duration-500"
            />

            {/* L */}
            <path
              d="M 248 8 L 248 30 L 265 30"
              stroke={primaryTextColor}
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-500"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
