import React, { useState, useMemo } from 'react';
import { 
  Workflow, 
  Copy, 
  Check, 
  Cpu, 
  Search, 
  Sparkles, 
  Code2, 
  Server, 
  Database, 
  Wrench,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { BranchedMenu } from '../reactbits/BranchedMenu';

export const SkillsSection = ({ skills = [] }) => {
  const [copiedKeywords, setCopiedKeywords] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allKeywords = useMemo(
    () => skills.flatMap((cat) => cat.items?.map((item) => item.name) || []),
    [skills]
  );

  const allFlatSkills = useMemo(() => {
    return skills.flatMap((cat) => 
      cat.items?.map((item) => ({
        ...item,
        categoryName: cat.category,
        categoryId: cat.id
      })) || []
    );
  }, [skills]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allFlatSkills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.categoryName.toLowerCase().includes(q) ||
        s.projects?.some((p) => p.toLowerCase().includes(q))
    );
  }, [searchQuery, allFlatSkills]);

  const handleCopyKeywords = () => {
    navigator.clipboard.writeText(allKeywords.join(', '));
    setCopiedKeywords(true);
    setTimeout(() => setCopiedKeywords(false), 2500);
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-bg-subtle/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            Branched Architecture & Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
            Interactive Skills Topology
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-3 leading-relaxed">
            Explore the interconnected nodes of my technology stack. Click on any domain branch or leaf node to review verified proficiency, concepts, and project implementations.
          </p>
        </div>

        {/* ATS Keywords & Real-Time Filter Command Bar */}
        <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-bg-surface border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4 shadow-card">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-text-tertiary absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g., React, JWT, MongoDB, Vite)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-bg-subtle border border-border-subtle text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-primary transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-tertiary hover:text-text-primary font-mono"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-text-primary font-mono">
                {allKeywords.length} Verified Stack Skills
              </span>
            </div>

            <button
              onClick={handleCopyKeywords}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-bg-subtle hover:bg-border-hover/60 text-text-primary border border-border-subtle flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              {copiedKeywords ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 font-bold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Copy ATS Keywords</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Filter Search Results Overlay (If user is typing) */}
        {searchQuery.trim() !== '' && (
          <div className="mb-8 p-6 rounded-3xl bg-bg-surface border border-brand-primary/40 shadow-card animate-fadeIn">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-subtle">
              <span className="text-xs font-mono font-bold text-brand-primary">
                Found {searchResults.length} matching skills for "{searchQuery}":
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-text-tertiary hover:text-text-primary"
              >
                Clear Search
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-bg-subtle/70 border border-border-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                          {skill.categoryName}
                        </span>
                        <span className="text-xs font-bold font-mono text-brand-primary">
                          {skill.level}% Proficiency
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-text-primary">{skill.name}</h4>
                      <p className="text-xs text-text-secondary mt-1">{skill.description}</p>
                    </div>

                    {skill.projects && (
                      <div className="mt-3 pt-3 border-t border-border-subtle flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-text-tertiary font-mono">Used In:</span>
                        {skill.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-[10px] px-2 py-0.5 rounded-lg bg-bg-surface text-text-secondary border border-border-subtle"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-text-tertiary text-center py-4">
                No direct matches found. Try searching for "React", "Express", "MongoDB", or "Git".
              </p>
            )}
          </div>
        )}

        {/* Branched Interactive Topology Visualizer */}
        <BranchedMenu skillCategories={skills} />
      </div>
    </section>
  );
};

export default SkillsSection;
