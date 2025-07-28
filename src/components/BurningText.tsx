// This file is a React TypeScript component for burning text effect
import React, { useEffect, useRef } from 'react';
// Ensure the JSX runtime is available
import 'react/jsx-runtime';

interface BurningTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
}

const BurningText = ({ children, className = '', delay = 0 }: BurningTextProps) => {
  const maskId = useRef(`burning-mask-${Math.random().toString(36).substr(2, 9)}`).current;
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.setProperty('--burn-delay', `${delay}ms`);
    }
  }, [delay]);

  return (
    <span
      className={`burning-text ${className}`}
      style={{ display: 'inline-block', position: 'relative' }}
      ref={textRef}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <linearGradient id={`${maskId}-gradient`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="black" />
            <stop offset="20%" stopColor="white" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${maskId}-gradient)`}>
            <animate
              attributeName="y"
              from="100%"
              to="0%"
              dur="2s"
              begin={`calc(var(--burn-delay, 0ms))`}
              fill="freeze"
            />
          </rect>
        </mask>
      </svg>
      <span
        style={{
          WebkitMask: `url(#${maskId})`,
          mask: `url(#${maskId})`,
          display: 'inline-block',
          transition: 'filter 0.3s',
          filter: 'drop-shadow(0 2px 8px orange) drop-shadow(0 0px 16px yellow)',
        }}
        className="burning-text-inner"
      >
        {children}
      </span>
      {/* Flicker effect overlay */}
      <span
        className="burning-flicker"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          opacity: 0.5,
          animation: 'burn-flicker 0.25s infinite alternate',
        }}
      />
      <style>{`
        @keyframes burn-flicker {
          0% { opacity: 0.4; filter: blur(2px) brightness(1.2); }
          100% { opacity: 0.7; filter: blur(4px) brightness(1.5); }
        }
        .burning-text-inner {
          animation: burn-reveal 2s cubic-bezier(0.4,0,0.2,1) forwards;
          animation-delay: var(--burn-delay, 0ms);
          opacity: 0;
        }
        @keyframes burn-reveal {
          0% { opacity: 0; filter: blur(8px) brightness(2); }
          60% { opacity: 1; filter: blur(2px) brightness(1.2); }
          100% { opacity: 1; filter: blur(0) brightness(1); }
        }
      `}</style>
    </span>
  );
};

export default BurningText; 