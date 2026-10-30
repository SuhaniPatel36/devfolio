import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  Sparkles, 
  Eye, 
  Palette, 
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Code2,
  TrendingUp,
  Download,
  Layers
} from 'lucide-react';
import { PALETTES } from '../../data/palettesData';
import { useTheme } from '../../context/ThemeContext';

export const PaletteShowcaseModal = ({ isOpen, onClose }) => {
  const { theme, changeTheme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const filteredPalettes = PALETTES.filter((p) => {
    if (filter === 'multi-shade') return p.category === 'multi-shade';
    if (filter === 'botanical') return p.category === 'botanical';
    if (filter === 'luxury') return p.category === 'luxury';
    if (filter === 'classic') return p.category === 'classic';
    if (filter === 'dark') return p.isDark;
    if (filter === 'light') return !p.isDark;
    return true;
  });

  const handleCopyPalette = (p, e) => {
    e.stopPropagation();
    const text = `/* Palette ${p.num} — ${p.name} */\nPrimary Background: ${p.primaryBg}\nSecondary Background: ${p.secondaryBg}\nAccent Color: ${p.accent}\nText Color: ${p.textColor}`;
    navigator.clipboard.writeText(text);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const json = JSON.stringify(PALETTES, null, 2);
    navigator.clipboard.writeText(json);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl bg-bg-surface border border-border-subtle shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-border-subtle bg-bg-surface/90 backdrop-blur-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                <Palette className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary">
                12 Luxury Theme Comparator
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                Live Interactive Studio
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
              Compare & Select Your Portfolio Color Theme
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Each card renders an identical developer portfolio preview. Click any palette to apply it live to the entire website.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <button
              onClick={handleCopyAll}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-bg-subtle text-text-secondary hover:text-text-primary border border-border-subtle flex items-center gap-1.5 transition-colors"
              title="Copy all 12 palettes as JSON"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? 'All Copied!' : 'Export All'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-bg-subtle text-text-secondary hover:text-text-primary hover:bg-border-hover/40 border border-border-subtle transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Filter Tabs */}
        <div className="px-5 sm:px-6 py-3 border-b border-border-subtle bg-bg-main/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: `All Themes (${PALETTES.length})` },
              { id: 'multi-shade', label: 'Multi-Shade (8)' },
              { id: 'botanical', label: 'Botanical Silk (6)' },
              { id: 'luxury', label: '12 Luxury Palettes' },
              { id: 'classic', label: 'Classic Themes (6)' },
              { id: 'dark', label: 'Dark Modes' },
              { id: 'light', label: 'Light Modes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-brand-primary text-white shadow-sm font-bold'
                    : 'bg-bg-surface text-text-secondary hover:text-text-primary border border-border-subtle'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-text-tertiary font-mono hidden sm:block">
            Active: <span className="font-bold text-brand-primary">{theme}</span>
          </div>
        </div>

        {/* Palette Previews Grid */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPalettes.map((p) => {
              const isCurrent = theme === p.id;
              // Determine button text color on accent
              const isAccentDark = ['#182D49', '#25292C', '#344B3D', '#612E3D', '#486779', '#65664B', '#55534E', '#6B4F3A', '#58616D', '#8A6D5A'].includes(p.accent);
              const accentButtonText = isAccentDark ? '#ffffff' : '#111318';

              return (
                <div
                  key={p.id}
                  onClick={() => changeTheme(p.id)}
                  className={`group relative rounded-2xl border transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl ${
                    isCurrent
                      ? 'ring-2 ring-brand-primary border-brand-primary shadow-lg scale-[1.01]'
                      : 'border-border-subtle hover:border-border-hover bg-bg-surface'
                  }`}
                  style={{
                    backgroundColor: isCurrent ? 'var(--bg-surface)' : undefined,
                  }}
                >
                  {/* Card Header */}
                  <div className="p-4 border-b border-border-subtle/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-bg-subtle text-text-primary font-mono text-xs font-bold flex items-center justify-center border border-border-subtle">
                        {p.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-text-primary leading-tight">
                          {p.name}
                        </h3>
                        <span className="text-[10px] text-text-tertiary font-mono">
                          {p.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-primary text-white flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      )}
                      <button
                        onClick={(e) => handleCopyPalette(p, e)}
                        className="p-1.5 rounded-lg bg-bg-subtle text-text-tertiary hover:text-text-primary transition-colors border border-border-subtle"
                        title="Copy color hex codes"
                      >
                        {copiedId === p.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* MINI PORTFOLIO PREVIEW MOCKUP (Using Exact 4 Palette Colors) */}
                  <div className="p-4">
                    <div
                      className="rounded-xl p-3.5 border transition-all shadow-inner overflow-hidden"
                      style={{
                        backgroundColor: p.primaryBg,
                        borderColor: p.secondaryBg,
                        color: p.textColor,
                      }}
                    >
                      {/* Mini Navbar */}
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
                        <div
                          className="px-2 py-0.5 rounded-full text-[8px] font-semibold"
                          style={{
                            backgroundColor: p.secondaryBg,
                            color: p.accent,
                          }}
                        >
                          MERN Architect
                        </div>
                      </div>

                      {/* Mini Hero */}
                      <div className="mb-3">
                        <div
                          className="text-[11px] font-extrabold tracking-tight leading-snug"
                          style={{ color: p.textColor }}
                        >
                          Hi, I'm{' '}
                          <span style={{ color: p.accent }}>Suhani</span>
                        </div>
                        <p
                          className="text-[9px] mt-0.5 line-clamp-2 leading-tight opacity-80"
                          style={{ color: p.textColor }}
                        >
                          Engineering enterprise dashboards & full-stack React architectures with verified efficiency gains.
                        </p>
                      </div>

                      {/* Mini Buttons */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <div
                          className="px-2.5 py-1 rounded-md text-[8px] font-bold flex items-center gap-1 shadow-sm"
                          style={{
                            backgroundColor: p.accent,
                            color: accentButtonText,
                          }}
                        >
                          <span>Projects</span>
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

                      {/* Mini Project Card */}
                      <div
                        className="rounded-lg p-2.5 border"
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
                            BizSuite — ERP Platform
                          </span>
                          <span
                            className="text-[8px] font-mono px-1 rounded"
                            style={{
                              backgroundColor: `${p.accent}25`,
                              color: p.accent,
                            }}
                          >
                            +85.6%
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {['React', 'Node.js', 'MongoDB'].map((tech) => (
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

                    {/* Color Swatches Grid */}
                    <div className="mt-3 pt-3 border-t border-border-subtle/80 grid grid-cols-4 gap-1.5 text-center">
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.primaryBg }}
                          title={`Primary Bg: ${p.primaryBg}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Main</span>
                        <span className="text-[8px] font-mono text-text-secondary">{p.primaryBg}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.secondaryBg }}
                          title={`Secondary Bg: ${p.secondaryBg}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Surface</span>
                        <span className="text-[8px] font-mono text-text-secondary">{p.secondaryBg}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.accent }}
                          title={`Accent: ${p.accent}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Accent</span>
                        <span className="text-[8px] font-mono text-text-secondary">{p.accent}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span
                          className="w-5 h-5 rounded-full border border-black/10 shadow-xs mb-1"
                          style={{ backgroundColor: p.textColor }}
                          title={`Text: ${p.textColor}`}
                        />
                        <span className="text-[9px] font-mono text-text-tertiary">Text</span>
                        <span className="text-[8px] font-mono text-text-secondary">{p.textColor}</span>
                      </div>
                    </div>

                    {/* 10-Tone Botanical Scale (when available) */}
                    {p.scale && (
                      <div className="mt-2.5 pt-2 border-t border-border-subtle/60">
                        <div className="flex items-center justify-between text-[8px] font-mono text-text-tertiary mb-1">
                          <span>10-Tone Botanical Scale</span>
                          <span>01 → 10</span>
                        </div>
                        <div className="grid grid-cols-10 gap-0.5 rounded-md overflow-hidden border border-black/10">
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

                  {/* Card Bottom CTA */}
                  <div className="p-3 bg-bg-subtle/50 border-t border-border-subtle/70 flex items-center justify-between gap-2">
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
                          ? 'bg-brand-primary text-white'
                          : 'bg-bg-surface text-text-primary hover:bg-brand-primary hover:text-white border border-border-subtle'
                      }`}
                    >
                      {isCurrent ? 'Active' : 'Apply'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-border-subtle bg-bg-surface/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Theme auto-saves to your browser and syncs instantly across all pages and modals.</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm transition-all"
          >
            Close & Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaletteShowcaseModal;
