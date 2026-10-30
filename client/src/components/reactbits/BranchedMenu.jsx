import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  Layers,
  Cpu,
  Workflow
} from 'lucide-react';

export const BranchedMenu = ({ skillCategories = [] }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('frontend');
  const [activeSkill, setActiveSkill] = useState(null);
  const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'matrix'

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeCategoryId) || skillCategories[0] || {};

  const currentSkill =
    activeSkill || (activeCategory?.items ? activeCategory.items[0] : null);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <div className="w-full bg-bg-surface/80 backdrop-blur-md rounded-3xl border border-border-subtle p-6 md:p-8 shadow-card-hover relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls & Mode Switch */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-border-subtle pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
              <Workflow className="w-3.5 h-3.5" />
              Interactive Skill Topology
            </span>
            <span className="text-xs text-text-tertiary">
              Click any branch to inspect architecture & projects
            </span>
          </div>
          <h3 className="text-2xl font-bold text-text-primary tracking-tight">
            Technical Competencies & Branched Stack
          </h3>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 bg-bg-subtle rounded-xl border border-border-subtle">
          <button
            onClick={() => setViewMode('tree')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'tree'
                ? 'bg-bg-surface text-brand-primary shadow-sm font-semibold'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Branched Tree
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'matrix'
                ? 'bg-bg-surface text-brand-primary shadow-sm font-semibold'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Full Matrix
          </button>
        </div>
      </div>

      {viewMode === 'tree' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Root and Main Branches */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-primary/15 via-brand-accent/10 to-transparent border border-brand-primary/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-md">
                <Cpu className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-brand-primary font-semibold">
                  Root Ecosystem Node
                </p>
                <h4 className="text-base font-bold text-text-primary">
                  Suhani Patel • MERN Stack
                </h4>
              </div>
            </div>

            {/* Branch Selector Nodes */}
            <div className="space-y-3 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border-subtle -z-0" />

              {skillCategories.map((category) => {
                const isSelected = category.id === activeCategoryId;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveCategoryId(category.id);
                      if (category.items && category.items.length > 0) {
                        setActiveSkill(category.items[0]);
                      }
                    }}
                    className={`relative z-10 w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-bg-surface border-brand-primary shadow-lg ring-1 ring-brand-primary/30'
                        : 'bg-bg-surface/50 border-border-subtle hover:border-border-hover'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-brand-primary text-white shadow-sm'
                            : 'bg-bg-subtle text-text-secondary'
                        }`}
                      >
                        {getCategoryIcon(category.id)}
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-semibold transition-colors ${
                            isSelected ? 'text-brand-primary' : 'text-text-primary'
                          }`}
                        >
                          {category.category}
                        </h4>
                        <p className="text-xs text-text-tertiary line-clamp-1">
                          {category.items?.length || 0} production skills
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'rotate-90 text-brand-primary' : 'text-text-tertiary'
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Branch Leaf Nodes & Active Node Details */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-bg-subtle/70 border border-border-subtle">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase text-brand-primary">
                    Branch: {activeCategory?.category}
                  </span>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {activeCategory?.description}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-medium">
                  {activeCategory?.items?.length} Key Skills
                </span>
              </div>

              {/* Sub-skill interactive pill nodes */}
              <div className="flex flex-wrap gap-2.5">
                {activeCategory?.items?.map((item) => {
                  const isCurrent = currentSkill?.name === item.name;
                  return (
                    <motion.button
                      key={item.name}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setActiveSkill(item)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-2 border transition-all ${
                        isCurrent
                          ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                          : 'bg-bg-surface text-text-primary border-border-subtle hover:border-brand-primary/40'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isCurrent
                            ? 'bg-white/20 text-white'
                            : 'bg-bg-subtle text-text-tertiary'
                        }`}
                      >
                        {item.level}%
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Focused Skill Detail Inspection Panel */}
            <AnimatePresence mode="wait">
              {currentSkill && (
                <motion.div
                  key={currentSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-bg-surface border border-brand-primary/20 shadow-elevation relative overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-subtle pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                          {currentSkill.badge}
                        </span>
                        <span className="text-xs text-text-tertiary">
                          Production Ready & Tested
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-text-primary">
                        {currentSkill.name}
                      </h4>
                    </div>

                    {/* Proficiency Metric Bar */}
                    <div className="flex items-center gap-3 min-w-[180px]">
                      <div className="flex-1">
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-text-secondary">Proficiency</span>
                          <span className="font-bold text-brand-primary">
                            {currentSkill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-bg-subtle rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${currentSkill.level}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {currentSkill.description}
                  </p>

                  {/* Real World Applications / Projects */}
                  {currentSkill.projects && currentSkill.projects.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-subtle">
                      <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                        Applied in Projects:
                      </span>
                      {currentSkill.projects.map((proj) => (
                        <span
                          key={proj}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-subtle text-text-primary border border-border-subtle flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                          {proj}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-brand-primary/30 transition-all hover:shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-primary">
                    {category.category}
                  </h4>
                  <p className="text-xs text-text-tertiary">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {category.items?.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-bg-subtle/60 border border-border-subtle/70 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-primary">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-brand-primary">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-bg-surface rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-primary rounded-full"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-text-secondary line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BranchedMenu;
