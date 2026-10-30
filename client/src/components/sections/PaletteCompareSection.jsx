import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  SlidersHorizontal 
} from 'lucide-react';
import { PALETTES } from '../../data/palettesData';
import { useTheme } from '../../context/ThemeContext';

export const PaletteCompareSection = ({ onOpenShowcaseModal }) => {
  const { theme, changeTheme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [page, setPage] = useState(0);

  const CARDS_PER_PAGE = 3;

  const filteredPalettes = PALETTES.filter((p) => {
    if (filter === 'multi-shade') return p.category === 'multi-shade';
    if (filter === 'botanical') return p.category === 'botanical';
    if (filter === 'luxury') return p.category === 'luxury';
    if (filter === 'classic') return p.category === 'classic';
    if (filter === 'dark') return p.isDark;
    if (filter === 'light') return !p.isDark;
    return true;
  });

  const totalPages = Math.ceil(filteredPalettes.length / CARDS_PER_PAGE);
  const currentPage = Math.min(page, Math.max(0, totalPages - 1));

  const visiblePalettes = viewMode === 'carousel'
    ? filteredPalettes.slice(currentPage * CARDS_PER_PAGE, (currentPage + 1) * CARDS_PER_PAGE)
    : filteredPalettes;

  const handleFilterChange = (id) => {
    setFilter(id);
    setPage(0);
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleCopyPalette = (p, e) => {
    e.stopPropagation();
    const text = `/* Palette ${p.num} — ${p.name} */\nPrimary Background: ${p.primaryBg}\nSecondary Background: ${p.secondaryBg}\nAccent Color: ${p.accent}\nText Color: ${p.textColor}`;
    navigator.clipboard.writeText(text);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="palettes" className="py-20 px-4 relative bg-bg-subtle/30 overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Theme Design Studio • 32 Master Palettes</span>
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight"
          >
            Compare Dynamic Portfolio Themes
          </motion.h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-2 leading-relaxed">
            Slide through consistent developer portfolio previews across 8 multi-shade scales, 6 botanical silk palettes, 12 luxury themes, and 6 classic themes.
          </p>

          {/* Filter Pills and Carousel / Grid Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 max-w-4xl">
            {[
              { id: 'all', label: `All (${PALETTES.length})` },
              { id: 'multi-shade', label: 'Multi-Shade (8)' },
              { id: 'botanical', label: 'Botanical Silk (6)' },
              { id: 'luxury', label: 'Luxury (12)' },
              { id: 'classic', label: 'Classic (6)' },
              { id: 'dark', label: 'Dark' },
              { id: 'light', label: 'Light' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-brand-primary text-white shadow-sm scale-105'
                    : 'bg-bg-surface text-text-secondary hover:text-text-primary border border-border-subtle'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <div className="w-px h-6 bg-border-subtle mx-1 hidden sm:block" />

            {/* View Mode Toggle Button */}
            <div className="inline-flex items-center p-0.5 rounded-xl bg-bg-surface border border-border-subtle shadow-xs">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                title="Interactive Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-brand-primary text-white shadow-xs'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                title="Full Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Toolbar */}
        {viewMode === 'carousel' && totalPages > 1 && (
          <div className="flex items-center justify-between mb-6 px-1">
            <div className="text-xs font-mono text-text-tertiary">
              Showing slide <span className="font-bold text-brand-primary">{currentPage + 1}</span> of <span className="font-bold text-text-primary">{totalPages}</span> ({filteredPalettes.length} palettes)
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-bg-surface text-text-primary hover:text-brand-primary border border-border-subtle hover:border-brand-primary shadow-xs transition-all active:scale-95"
                title="Previous Palettes"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-bg-surface text-text-primary hover:text-brand-primary border border-border-subtle hover:border-brand-primary shadow-xs transition-all active:scale-95"
                title="Next Palettes"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Cards Presentation Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${filter}-${currentPage}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`grid gap-6 ${
              viewMode === 'carousel'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {visiblePalettes.map((p) => {
              const isCurrent = theme === p.id;
              const isAccentDark = ['#182D49', '#25292C', '#344B3D', '#612E3D', '#486779', '#65664B', '#55534E', '#6B4F3A', '#58616D', '#8A6D5A'].includes(p.accent);
              const accentButtonText = isAccentDark ? '#ffffff' : '#111318';

              return (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -4 }}
                  onClick={() => changeTheme(p.id)}
                  className={`group relative rounded-3xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-card hover:shadow-card-hover ${
                    isCurrent
                      ? 'ring-2 ring-brand-primary border-brand-primary shadow-xl scale-[1.01]'
                      : 'border-border-subtle hover:border-brand-primary/50 bg-bg-surface'
                  }`}
                >
                  {/* Header */}
                  <div className="p-4 border-b border-border-subtle flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl bg-bg-subtle text-text-primary font-mono text-xs font-bold flex items-center justify-center border border-border-subtle">
                        {p.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                          {p.name}
                        </h3>
                        <span className="text-[10px] text-text-tertiary font-mono">
                          {p.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCurrent && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-primary text-white flex items-center gap-1 shadow-xs animate-pulse">
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      )}
                      <button
                        onClick={(e) => handleCopyPalette(p, e)}
                        className="p-1.5 rounded-lg bg-bg-subtle text-text-tertiary hover:text-text-primary transition-colors border border-border-subtle"
                        title="Copy palette values"
                      >
                        {copiedId === p.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* CONSISTENT MINI PORTFOLIO PREVIEW MOCKUP */}
                  <div className="p-4">
                    <div
                      className="rounded-2xl p-4 border transition-all shadow-sm overflow-hidden"
                      style={{
                        backgroundColor: p.primaryBg,
                        borderColor: p.secondaryBg,
                        color: p.textColor,
                      }}
                    >
                      {/* Mockup Header */}
                      <div
                        className="flex items-center justify-between pb-2 mb-3 border-b"
                        style={{ borderColor: `${p.textColor}20` }}
                      >
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-4 h-4 rounded-md flex items-center justify-center text-[8px] font-bold"
                            style={{
                              backgroundColor: p.accent,
                              color: accentButtonText,
                            }}
                          >
                            SP
                          </div>
                          <span
                            className="text-[10px] font-bold tracking-tight"
                            style={{ color: p.textColor }}
                          >
                            Suhani Patel
                          </span>
                        </div>
                        <span
                          className="px-2 py-0.5 rounded-full text-[8px] font-mono font-semibold"
                          style={{
                            backgroundColor: p.secondaryBg,
                            color: p.accent,
                          }}
                        >
                          Palette {p.num}
                        </span>
                      </div>

                      {/* Mockup Hero */}
                      <div className="mb-3">
                        <div
                          className="text-xs font-extrabold tracking-tight"
                          style={{ color: p.textColor }}
                        >
                          Hi, I'm <span style={{ color: p.accent }}>Suhani</span>
                        </div>
                        <div
                          className="text-[9px] font-semibold mt-0.5 opacity-90"
                          style={{ color: p.textColor }}
                        >
                          MERN & React Architecture
                        </div>
                      </div>

                      {/* Mockup Buttons */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <div
                          className="px-2.5 py-1 rounded-md text-[8px] font-bold flex items-center gap-1 shadow-xs"
                          style={{
                            backgroundColor: p.accent,
                            color: accentButtonText,
                          }}
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                        <div
                          className="px-2 py-1 rounded-md text-[8px] font-semibold border"
                          style={{
                            backgroundColor: p.secondaryBg,
                            borderColor: `${p.textColor}25`,
                            color: p.textColor,
                          }}
                        >
                          Recruiter View
                        </div>
                      </div>

                      {/* Mockup Project Card */}
                      <div
                        className="rounded-xl p-2.5 border"
                        style={{
                          backgroundColor: p.secondaryBg,
                          borderColor: `${p.textColor}15`,
                        }}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span
                            className="text-[9px] font-bold"
                            style={{ color: p.textColor }}
                          >
                            BizSuite ERP
                          </span>
                          <span
                            className="text-[8px] font-mono px-1 rounded font-bold"
                            style={{
                              backgroundColor: `${p.accent}25`,
                              color: p.accent,
                            }}
                          >
                            +85.6%
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {['React 19', 'Tailwind', 'Node'].map((tech) => (
                            <span
                              key={tech}
                              className="text-[7px] px-1 py-0.5 rounded"
                              style={{
                                backgroundColor: p.primaryBg,
                                color: p.textColor,
                                opacity: 0.85,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 4 Swatches Data Grid */}
                    <div className="mt-3 pt-3 border-t border-border-subtle grid grid-cols-4 gap-1 text-center">
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.primaryBg }}
                          title={`Primary Bg: ${p.primaryBg}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Main</span>
                        <span className="text-[8px] font-mono text-text-secondary truncate w-full">{p.primaryBg}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.secondaryBg }}
                          title={`Secondary Bg: ${p.secondaryBg}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Surface</span>
                        <span className="text-[8px] font-mono text-text-secondary truncate w-full">{p.secondaryBg}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.accent }}
                          title={`Accent: ${p.accent}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Accent</span>
                        <span className="text-[8px] font-mono text-text-secondary truncate w-full">{p.accent}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.textColor }}
                          title={`Text: ${p.textColor}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Text</span>
                        <span className="text-[8px] font-mono text-text-secondary truncate w-full">{p.textColor}</span>
                      </div>
                    </div>

                    {/* Scale Array Preview */}
                    {p.scale && (
                      <div className="mt-2.5 pt-2 border-t border-border-subtle/60">
                        <div className="flex items-center justify-between text-[8px] font-mono text-text-tertiary mb-1">
                          <span>Complete Tone Scale</span>
                          <span>01 → {p.scale.length}</span>
                        </div>
                        <div 
                          className="grid gap-0.5 rounded-md overflow-hidden border border-black/10"
                          style={{ gridTemplateColumns: `repeat(${p.scale.length}, minmax(0, 1fr))` }}
                        >
                          {p.scale.map((s) => (
                            <div
                              key={s.num}
                              className="h-3.5 flex items-center justify-center transition-transform hover:scale-125"
                              style={{ backgroundColor: s.hex }}
                              title={`${s.num} ${s.name}: ${s.hex}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer action */}
                  <div className="p-3 bg-bg-subtle/50 border-t border-border-subtle flex items-center justify-between gap-2">
                    <p className="text-[10px] text-text-tertiary line-clamp-1">
                      {p.bestFor}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        changeTheme(p.id);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                        isCurrent
                          ? 'bg-brand-primary text-white shadow-xs'
                          : 'bg-bg-surface text-text-primary hover:bg-brand-primary hover:text-white border border-border-subtle'
                      }`}
                    >
                      {isCurrent ? 'Selected' : 'Apply Theme'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Bullets */}
        {viewMode === 'carousel' && totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`transition-all rounded-full ${
                  currentPage === idx
                    ? 'w-6 h-2 bg-brand-primary'
                    : 'w-2 h-2 bg-border-subtle hover:bg-text-tertiary'
                }`}
                title={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-bg-surface border border-border-subtle shadow-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-primary">
                Full Comparison Studio & Export Tokens
              </h4>
              <p className="text-xs text-text-tertiary">
                Compare contrast scores, test side-by-side previews, and export all 32 themes to CSS/Tailwind variables.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenShowcaseModal}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm transition-all shrink-0"
          >
            Open Full Comparison Studio
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaletteCompareSection;
