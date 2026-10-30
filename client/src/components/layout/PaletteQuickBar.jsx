import React, { useState, useEffect } from 'react';
import { 
  Palette, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Sparkles, 
  ChevronUp, 
  ChevronDown,
  X
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PALETTES } from '../../data/palettesData';

export const PaletteQuickBar = ({ onOpenShowcase }) => {
  const { theme, changeTheme, nextTheme, prevTheme, activePalette } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Keyboard shortcut listener: '[' for prev, ']' for next, 'p' or 'P' for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === '[') {
        prevTheme();
      } else if (e.key === ']') {
        nextTheme();
      } else if (e.key.toLowerCase() === 'p') {
        onOpenShowcase();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTheme, prevTheme, onOpenShowcase]);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-4 left-4 z-40 p-3 rounded-2xl glass-panel shadow-elevation text-text-primary hover:text-brand-primary hover:scale-105 transition-all flex items-center gap-2 group"
        title="Open Theme Palette Switcher (Press P)"
      >
        <Palette className="w-5 h-5 text-brand-primary group-hover:rotate-45 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline">Theme {activePalette?.num}</span>
      </button>
    );
  }

  return (
    <aside aria-label="Theme palette switcher" className="fixed bottom-20 md:bottom-4 left-3 md:left-4 z-40 max-w-sm pointer-events-auto transition-all duration-300">
      <div className="glass-panel rounded-2xl p-2 md:p-2.5 shadow-2xl border border-border-subtle flex flex-col gap-2">
        {/* Top / Main Controls Bar */}
        <div className="flex items-center justify-between gap-2">
          {/* Palette Info & Icon */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-bg-subtle transition-colors text-left"
            title="Click to expand/collapse 12 theme pills"
          >
            <div className="relative">
              <span
                className="w-3.5 h-3.5 rounded-full inline-block border border-white/20 shadow-xs"
                style={{ backgroundColor: activePalette?.accent }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full inline-block border border-white/20 shadow-xs -ml-1.5"
                style={{ backgroundColor: activePalette?.primaryBg }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-text-primary leading-none flex items-center gap-1">
                <span className="font-mono text-brand-primary">#{activePalette?.num}</span>
                <span className="truncate max-w-[110px] sm:max-w-[130px]">{activePalette?.name}</span>
              </span>
              <span className="text-[9px] text-text-tertiary font-mono -mt-0.5">
                {activePalette?.tag}
              </span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-text-tertiary" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5 text-text-tertiary" />
            )}
          </button>

          {/* Action Buttons: Prev, Next, Compare All */}
          <div className="flex items-center gap-1">
            <button
              onClick={prevTheme}
              className="p-1.5 rounded-lg bg-bg-subtle hover:bg-border-hover/40 text-text-primary transition-colors border border-border-subtle"
              title="Previous Palette (Press '[')"
              aria-label="Previous Palette"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={nextTheme}
              className="p-1.5 rounded-lg bg-bg-subtle hover:bg-border-hover/40 text-text-primary transition-colors border border-border-subtle"
              title="Next Palette (Press ']')"
              aria-label="Next Palette"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenShowcase}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover flex items-center gap-1 shadow-xs transition-all hover:scale-105 active:scale-95"
              title="Compare all 12 palettes (Press 'P')"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Compare</span>
            </button>

            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 rounded-md text-text-tertiary hover:text-text-primary transition-colors"
              title="Minimize bar"
              aria-label="Minimize bar"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Expanded 1-12 Quick Number Grid */}
        {isExpanded && (
          <div className="pt-2 border-t border-border-subtle/80 flex flex-col gap-1.5 animate-in fade-in duration-150">
            <div className="flex items-center justify-between text-[10px] text-text-tertiary font-mono px-1">
              <span>Quick Pick ({PALETTES.length} Themes)</span>
              <span>'[' and ']' to cycle</span>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {PALETTES.map((p) => {
                const isSelected = theme === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => changeTheme(p.id)}
                    className={`py-1 px-1.5 rounded-lg text-[10px] font-mono font-bold flex flex-col items-center gap-0.5 transition-all ${
                      isSelected
                        ? 'bg-brand-primary text-white shadow-xs scale-105 ring-1 ring-brand-primary'
                        : 'bg-bg-subtle text-text-secondary hover:text-text-primary hover:bg-border-hover/50 border border-border-subtle'
                    }`}
                    title={`${p.num} — ${p.name}`}
                  >
                    <span>{p.num}</span>
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: p.accent }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default PaletteQuickBar;
