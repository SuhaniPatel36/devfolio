import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  TrendingUp,
  Award,
  Zap,
  Users,
  Layers,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const ExperienceSection = ({ experience = [] }) => {
  const [selectedExpIndex, setSelectedExpIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('impact'); // 'impact' | 'deliverables' | 'stack'

  const activeExp = experience[selectedExpIndex] || experience[0] || {};

  return (
    <section id="experience" className="py-24 px-4 relative bg-bg-subtle/30 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Industry Track Record & Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            Professional Experience & Milestones
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-text-secondary max-w-2xl mt-3 leading-relaxed"
          >
            Real-world enterprise application engineering at Keen Solution and university-level corporate placement coordination.
          </motion.p>
        </div>

        {/* 1. EXECUTIVE CAREER COMMAND CENTER (Interactive Master-Detail Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Milestone Navigator (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase text-text-tertiary tracking-wider font-semibold px-2 mb-1">
              Select Career Phase:
            </span>

            {experience.map((exp, idx) => {
              const isSelected = selectedExpIndex === idx;
              const isCurrent = exp.period?.includes('Present');

              return (
                <button
                  key={exp.role + exp.company}
                  onClick={() => {
                    setSelectedExpIndex(idx);
                    setActiveTab('impact');
                  }}
                  className={`p-5 rounded-3xl text-left transition-all border relative overflow-hidden group ${
                    isSelected
                      ? 'bg-bg-surface border-brand-primary shadow-card ring-1 ring-brand-primary/30'
                      : 'bg-bg-surface/60 border-border-subtle hover:border-brand-primary/40 hover:bg-bg-surface'
                  }`}
                >
                  {/* Active Indicator Bar on Left */}
                  {isSelected && (
                    <motion.div
                      layoutId="expActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-primary rounded-r"
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                      {exp.type}
                    </span>

                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>

                  <h3 className={`text-base font-bold transition-colors ${isSelected ? 'text-brand-primary' : 'text-text-primary group-hover:text-brand-primary'}`}>
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-text-secondary mt-1">
                    <Building2 className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-subtle text-[11px] text-text-tertiary font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-brand-primary' : ''}`} />
                  </div>
                </button>
              );
            })}

            {/* Quick Verification Callout Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-brand-primary/10 via-bg-surface to-bg-surface border border-brand-primary/20 mt-2">
              <span className="text-[10px] font-mono uppercase font-bold text-brand-primary block mb-1">
                Verified Verification Ready
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Offer letter, supervisor contacts, and recommendation documents verified for corporate background checks.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Interactive Experience Studio (8 Cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.role + activeExp.company}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-bg-surface border border-border-subtle shadow-card relative overflow-hidden"
              >
                {/* Header Strip */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-primary text-white shadow-xs">
                        {activeExp.type}
                      </span>
                      <span className="text-xs font-mono text-text-tertiary flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                        {activeExp.location}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                      {activeExp.role}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-brand-primary mt-0.5">
                      @ {activeExp.company}
                    </p>
                  </div>

                  <div className="px-4 py-2 rounded-2xl bg-bg-subtle text-xs font-mono font-bold text-text-primary border border-border-subtle flex items-center gap-2 self-start sm:self-auto">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span>{activeExp.period}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {activeExp.description}
                </p>

                {/* Interactive Inner Tab Controller */}
                <div className="flex items-center gap-2 p-1.5 bg-bg-subtle rounded-2xl border border-border-subtle mb-6 w-fit">
                  <button
                    onClick={() => setActiveTab('impact')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeTab === 'impact'
                        ? 'bg-bg-surface text-brand-primary shadow-xs border border-brand-primary/20'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Impact & Deliverables</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeTab === 'stack'
                        ? 'bg-bg-surface text-brand-primary shadow-xs border border-brand-primary/20'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Tech Stack Applied</span>
                  </button>
                </div>

                {/* TAB 1: IMPACT & DELIVERABLES */}
                {activeTab === 'impact' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {activeExp.achievements?.map((achieve, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-bg-subtle/60 border border-border-subtle flex items-start gap-3 hover:border-brand-primary/30 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                          {achieve}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* TAB 2: TECH STACK APPLIED */}
                {activeTab === 'stack' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                      {activeExp.technologies?.map((tech) => (
                        <div
                          key={tech}
                          className="p-3 rounded-2xl bg-bg-subtle border border-border-subtle flex items-center gap-2.5 shadow-xs"
                        >
                          <div className="w-2 h-2 rounded-full bg-brand-primary" />
                          <span className="text-xs font-bold text-text-primary">{tech}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-text-tertiary">
                      All technologies utilized under production workflows with Git peer reviews and automated deployments.
                    </p>
                  </motion.div>
                )}

                {/* Bottom Quantified Highlight Strip */}
                <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
                  {selectedExpIndex === 0 ? (
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-text-tertiary">Efficiency:</span>
                        <span className="text-sm font-extrabold text-brand-primary font-mono">+85.6%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-text-tertiary">UI Speed:</span>
                        <span className="text-sm font-extrabold text-emerald-500 font-mono">+60%</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-text-tertiary">Placement Rate:</span>
                        <span className="text-sm font-extrabold text-brand-primary font-mono">80% Success</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-text-tertiary">Companies:</span>
                        <span className="text-sm font-extrabold text-sky-400 font-mono">20+ Coordinated</span>
                      </div>
                    </div>
                  )}

                  <span className="text-[11px] font-mono text-text-tertiary">
                    Verified Industry Deliverable
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
