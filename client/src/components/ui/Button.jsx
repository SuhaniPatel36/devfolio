import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5'
  };
  const variantStyles = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-sm hover:shadow active:scale-[0.98]',
    secondary: 'bg-bg-surface hover:bg-bg-subtle text-text-primary border border-border-subtle hover:border-border-hover shadow-sm active:scale-[0.98]',
    accent: 'bg-brand-accent hover:opacity-90 text-white shadow-sm active:scale-[0.98]',
    outline: 'border border-border-subtle hover:border-brand-primary text-text-primary hover:text-brand-primary bg-transparent',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle bg-transparent'
  };
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={combinedClasses} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};
