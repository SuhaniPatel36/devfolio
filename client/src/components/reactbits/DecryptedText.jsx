import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789@#$%&*<>/';

export const DecryptedText = ({
  text = '',
  speed = 40,
  maxIterations = 10,
  className = '',
  parentClassName = '',
  animateOn = 'view',
  ...props
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const scramble = () => {
    if (isScrambling || !text) return;
    setIsScrambling(true);

    let iteration = 0;
    const length = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / (maxIterations / length);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'view' && !hasAnimatedRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            hasAnimatedRef.current = true;
            scramble();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [text, animateOn]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      scramble();
    }
  };

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono tracking-tight ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;
