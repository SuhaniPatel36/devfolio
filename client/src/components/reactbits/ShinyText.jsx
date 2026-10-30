import React from 'react';

export const ShinyText = ({
  text,
  disabled = false,
  speed = 4,
  className = '',
  children,
}) => {
  const content = text || children;
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-text-primary via-brand-primary to-brand-accent ${
        !disabled ? 'animate-shimmer' : ''
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(255, 255, 255, 0.2) 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration,
      }}
    >
      {content}
    </span>
  );
};

export default ShinyText;
