import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';

export const ScrollExpand = ({
  children,
  className = '',
  expandedClassName = '',
  title = '',
  subtitle = '',
  badge = 'Interactive Container',
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-80px' });
  const [isManualExpanded, setIsManualExpanded] = useState(false);

  const isExpanded = isInView || isManualExpanded;

  return (
    <div ref={containerRef} className={`w-full py-4 ${className}`}>
      <motion.div
        animate={{
          scale: isExpanded ? 1 : 0.96,
          opacity: isExpanded ? 1 : 0.85,
          borderRadius: isExpanded ? '28px' : '20px',
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden border transition-all duration-500 bg-bg-surface ${
          isExpanded
            ? 'border-brand-primary/40 shadow-elevation'
            : 'border-border-subtle shadow-card'
        } ${expandedClassName}`}
      >
        {(title || subtitle) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-bg-subtle/40">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                {badge}
              </span>
              <div>
                <h4 className="text-sm font-bold text-text-primary">{title}</h4>
                {subtitle && (
                  <p className="text-xs text-text-tertiary">{subtitle}</p>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsManualExpanded(!isManualExpanded)}
              className="p-1.5 rounded-lg text-text-tertiary hover:text-brand-primary hover:bg-bg-subtle transition-colors"
              title={isManualExpanded ? 'Collapse' : 'Expand full container'}
            >
              {isManualExpanded ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        )}

        <div
          className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent transition-opacity duration-700 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="p-6 md:p-8">{children}</div>
      </motion.div>
    </div>
  );
};

export default ScrollExpand;
