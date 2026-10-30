import React from 'react';

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align];

  return (
    <div className={`flex flex-col mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-bold tracking-wider uppercase text-brand-primary bg-bg-subtle border border-border-subtle rounded-pill">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
