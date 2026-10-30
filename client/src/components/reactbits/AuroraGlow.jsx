import React from 'react';

export const AuroraGlow = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-primary/10 blur-[100px] animate-pulse" />
      <div
        className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-brand-accent/10 blur-[120px] animate-pulse"
        style={{ animationDuration: '6s' }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-indigo-500/10 blur-[100px] animate-pulse"
        style={{ animationDuration: '8s' }}
      />
    </div>
  );
};

export default AuroraGlow;
