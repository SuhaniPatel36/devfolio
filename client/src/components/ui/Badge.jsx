import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  dot = false,
  dotColor = 'bg-emerald-500',
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-badge-bg text-badge-text border-border-subtle',
    accent: 'bg-brand-accent-subtle text-amber-900 border-amber-200',
    primary: 'bg-blue-50 text-brand-primary border-blue-200',
    outline: 'bg-transparent text-text-secondary border-border-subtle'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-xs font-semibold font-mono tracking-wide border ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {dot && <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />}
      {children}
    </span>
  );
};
