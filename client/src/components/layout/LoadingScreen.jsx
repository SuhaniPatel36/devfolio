import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Terminal } from 'lucide-react';
import { SPEmblem } from '../ui/BrandLogo';

export const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('Initializing Core Architecture...');

  useEffect(() => {
    const phases = [
      { at: 15, text: 'Compiling React 19 Components...' },
      { at: 45, text: 'Synthesizing Full-Stack Modules...' },
      { at: 75, text: 'Calibrating Dynamic Color Engines...' },
      { at: 92, text: 'Mounting Production Environment...' },
      { at: 100, text: 'Ready • Welcome to Suhani Patel' },
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 450);
          return 100;
        }

        const match = phases.find((p) => next >= p.at);
        if (match) setCurrentPhase(match.text);

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.04,
        filter: 'blur(10px)',
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-main text-text-primary overflow-hidden selection:bg-brand-primary"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md w-full">
        {/* Animated Brand Emblem / Monogram Logo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 flex items-center justify-center">
          {/* Rotating ambient halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-3xl border border-dashed border-brand-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-2 rounded-3xl border border-brand-accent/20"
          />

          {/* Central emblem container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-24 h-24 rounded-2xl bg-bg-surface/90 border border-brand-primary/40 shadow-2xl backdrop-blur-xl flex items-center justify-center relative overflow-hidden group p-2"
          >
            {/* Shimmer sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

            {/* Official Theme-Adaptive Brand SP Emblem */}
            <SPEmblem size={72} animate={false} />
          </motion.div>

          {/* Floating mini badge icons */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-2 -right-2 p-1.5 rounded-lg bg-bg-surface border border-brand-primary/30 shadow-md text-brand-primary"
          >
            <Code2 className="w-3.5 h-3.5" />
          </motion.div>
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-2 -left-2 p-1.5 rounded-lg bg-bg-surface border border-brand-accent/30 shadow-md text-brand-accent"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
        </div>

        {/* Brand Name Typography */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-2"
        >
          <h1 className="text-2xl sm:text-3xl font-black tracking-widest uppercase font-mono bg-gradient-to-r from-text-primary via-brand-primary to-text-primary bg-clip-text text-transparent">
            Suhani Patel
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-text-secondary tracking-wider mt-1 flex items-center justify-center gap-2">
            <span>MERN Stack Engineer</span>
            <span className="text-brand-primary">•</span>
            <span>React Developer</span>
          </p>
        </motion.div>

        {/* Progress Bar & Status Line */}
        <div className="w-full mt-6 space-y-2">
          {/* Progress track */}
          <div className="w-full h-1.5 rounded-full bg-bg-subtle/80 border border-border-subtle overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 blur-[1px] animate-pulse" />
            </motion.div>
          </div>

          {/* Progress details */}
          <div className="flex items-center justify-between text-[11px] font-mono text-text-tertiary px-0.5">
            <span className="truncate max-w-[240px] text-left text-text-secondary">
              {currentPhase}
            </span>
            <span className="font-bold text-brand-primary shrink-0">
              {progress}%
            </span>
          </div>
        </div>

        {/* Quick Skip Button for instant accessibility */}
        <button
          onClick={onLoadingComplete}
          className="mt-8 text-[11px] font-mono text-text-tertiary hover:text-brand-primary transition-colors flex items-center gap-1.5 opacity-60 hover:opacity-100"
        >
          <Terminal className="w-3 h-3" />
          <span>Click anywhere or press Enter to skip</span>
        </button>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
