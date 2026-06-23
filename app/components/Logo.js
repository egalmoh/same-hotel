import React from 'react';

/**
 * Same Hotel Logo Component
 * Renders a premium vector SVG monogram of the letters "S" and "H".
 * Supports gold gradient or currentColor fills, and custom dimensions.
 */
export default function Logo({ 
  className = '', 
  width = 36, 
  height = 36, 
  variant = 'gold' 
}) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Same Hotel Logo"
    >
      <defs>
        <linearGradient id="logoGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-gold-light, #DFBA73)" />
          <stop offset="50%" stopColor="var(--color-gold, #C5A059)" />
          <stop offset="100%" stopColor="var(--color-gold-dark, #A47E3B)" />
        </linearGradient>
      </defs>
      
      {/* Outer delicate geometric frame */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        stroke={variant === 'gold' ? 'url(#logoGoldGradient)' : 'currentColor'} 
        strokeWidth="1" 
        strokeDasharray="4 2"
        opacity="0.4"
      />
      <circle 
        cx="50" 
        cy="50" 
        r="40" 
        stroke={variant === 'gold' ? 'url(#logoGoldGradient)' : 'currentColor'} 
        strokeWidth="1.5" 
      />
      
      {/* Interlocking Monogram S & H */}
      {/* H - Left pillar */}
      <path 
        d="M36 28V72" 
        stroke={variant === 'gold' ? 'url(#logoGoldGradient)' : 'currentColor'} 
        strokeWidth="3.5" 
        strokeLinecap="round"
      />
      
      {/* H - Right pillar */}
      <path 
        d="M64 28V72" 
        stroke={variant === 'gold' ? 'url(#logoGoldGradient)' : 'currentColor'} 
        strokeWidth="3.5" 
        strokeLinecap="round"
      />
      
      {/* H - Crossbar */}
      <path 
        d="M36 50H64" 
        stroke={variant === 'gold' ? 'url(#logoGoldGradient)' : 'currentColor'} 
        strokeWidth="2.5" 
        opacity="0.6"
      />
      
      {/* S - Curved paths weaving through the H */}
      <path 
        d="M58 35C58 29 42 29 42 35C42 41 58 43 58 49C58 55 42 55 42 49" 
        stroke={variant === 'gold' ? 'url(#logoGoldGradient)' : 'currentColor'} 
        strokeWidth="3.5" 
        strokeLinecap="round"
        transform="translate(0, 8)"
      />
    </svg>
  );
}
