import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Users, 
  CheckCircle, 
  Download, 
  Laptop,
  Zap,
  ShieldCheck,
  TrendingUp,
  Terminal,
  Activity,
  Layers,
  Award,
  ArrowUpRight
} from 'lucide-react';

export const AboutSection = ({ profile = {}, onOpenRecruiterModal }) => {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'performance' | 'leadership'

  const tabContents = {
    architecture: {
      badge: 'Full-Stack Discipline',
      title: 'Deterministic APIs & Scalable Component Architecture',
      description:
        'Specializing in modular React architectures and hardened Express/MongoDB micro-layers. Every component is engineered with single-responsibility principles, explicit TypeScript/PropTypes contracts, and deterministic state flows.',
      codeSnippet: `// Role-Based Auth Guard & Middleware Pipeline
export const requireRole = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access Denied: Insufficient Privileges" });
    }
    next();
  };
};`,
      tags: ['Express RBAC', 'Mongoose Schemas', 'Atomic UI', 'Protected Routes']
    },
    performance: {
      badge: 'Speed & Optimization',
      title: 'Client-Side Memoization & Zero Layout Shift',
      description:
        'Obsessed with runtime performance: leveraging React.memo, useMemo, and useCallback to eliminate expensive reconciliations. Realized 80% render speedups and cut ERP administrative latency by 85.6%.',
      codeSnippet: `// High-Frequency Data Grid Memoization
const MemoizedMetricRow = React.memo(({ metric, onInspect }) => {
  const formattedScore = useMemo(() => calculateKPI(metric), [metric.id]);
  return <div onClick={() => onInspect(metric.id)}>{formattedScore}</div>;
}, (prev, next) => prev.metric.updatedAt === next.metric.updatedAt);`,
      tags: ['React.memo', 'Virtual DOM', 'Lighthouse 95+', 'CLS 0.00']
    },
    leadership: {
      badge: 'Impact & Culture',
      title: 'Placement Coordination & Engineering Leadership',
      description:
        'Spearheaded corporate liaison operations at Malwa Institute of Science & Technology for 20+ tech employers, coordinating placement challenges and student mentorship drives achieving an 80% placement rate.',
      codeSnippet: `// Campus Placement Pipeline Analytics
const placementMetrics = {
  cohort: "2022-2026 B.Tech CSE",
  companiesCoordinated: 20,
  verifiedPlacementRate: "80%",
  workshopsOrganized: ["MERN Architecture", "DSA Interview Prep"]
};`,
      tags: ['20+ Tech Employers', '80% Placement Rate', 'Technical Mentorship', 'Cross-Team Sync']
    }
  };

  const currentContent = tabContents[activeTab];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Profile & Core Principles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            Engineering With Precision & Purpose
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-text-secondary max-w-2xl mt-3 leading-relaxed"
          >
            Computer Science engineer bridging front-end speed with enterprise-grade backend reliability. Transforming manual operational chaos into fast, deterministic web architectures.
          </motion.p>
        </div>

        {/* 1. TOP INTERACTIVE BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          
          {/* Main Story & Interactive Architecture Terminal (8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-bg-surface border border-border-subtle shadow-card flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-bl-full pointer-events-none" />

            <div>
              {/* Interactive Tab Switcher */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-bg-subtle rounded-2xl border border-border-subtle mb-6 w-fit">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'architecture'
                      ? 'bg-bg-surface text-brand-primary shadow-sm border border-brand-primary/20'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'performance'
                      ? 'bg-bg-surface text-brand-primary shadow-sm border border-brand-primary/20'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Performance</span>
                </button>
                <button
                  onClick={() => setActiveTab('leadership')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    activeTab === 'leadership'
                      ? 'bg-bg-surface text-brand-primary shadow-sm border border-brand-primary/20'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Users className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Leadership</span>
                </button>
              </div>

              {/* Dynamic Content Pane with Smooth Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-xs font-mono font-semibold uppercase text-brand-primary tracking-wider flex items-center gap-1.5 mb-2">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    {currentContent.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                    {currentContent.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {currentContent.description}
                  </p>

                  {/* Interactive Code / Metric Console */}
                  <div className="rounded-2xl bg-bg-main border border-border-subtle p-4 font-mono text-xs overflow-x-auto shadow-inner mb-4">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-subtle text-[11px] text-text-tertiary">
                      <span className="flex items-center gap-1.5 text-brand-primary">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>suhani-patel@production:~/{activeTab}.ts</span>
                      </span>
                      <span className="text-emerald-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Verified
                      </span>
                    </div>
                    <pre className="text-text-secondary leading-relaxed text-[11px] sm:text-xs">
                      {currentContent.codeSnippet}
                    </pre>
                  </div>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-2">
                    {currentContent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-subtle text-text-primary border border-border-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Academic & Current Role Footer Strip */}
            <div className="pt-6 mt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 rounded-2xl bg-bg-subtle/60 border border-border-subtle">
                <span className="text-[10px] text-text-tertiary block font-mono uppercase tracking-wider">Active Engagement</span>
                <span className="text-xs sm:text-sm font-bold text-text-primary block mt-0.5">MERN Developer Intern</span>
                <span className="text-xs text-brand-primary font-medium">@ Keen Solution (Jan 2025 – Present)</span>
              </div>
              <div className="p-3 rounded-2xl bg-bg-subtle/60 border border-border-subtle">
                <span className="text-[10px] text-text-tertiary block font-mono uppercase tracking-wider">Academic Standing</span>
                <span className="text-xs sm:text-sm font-bold text-text-primary block mt-0.5">B.Tech Computer Science</span>
                <span className="text-xs text-brand-primary font-medium">Malwa Institute (7.9+ CGPA • 2026)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Recruiter Status & Highlights (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Live Availability Radar Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-brand-primary/10 via-bg-surface to-bg-surface border border-brand-primary/30 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Immediate 2026 Joining
                  </span>
                  <span className="text-xs font-mono text-text-tertiary">Indore / Remote</span>
                </div>

                <h4 className="text-lg font-bold text-text-primary mb-2">
                  Ready for Product & Enterprise Impact
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">
                  Available for full-time Software Engineer (Frontend / MERN) positions. Experienced in fast Agile sprints, code reviews, and enterprise delivery.
                </p>

                <div className="space-y-2.5 mb-6">
                  {profile.highlights?.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-col gap-2.5">
                <button
                  onClick={onOpenRecruiterModal}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Launch Recruiter Fast-Track</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <a
                  href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
                  download
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-bg-subtle text-text-primary hover:bg-border-hover/60 border border-border-subtle transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Download ATS Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="p-5 rounded-3xl bg-bg-surface border border-border-subtle shadow-card flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-text-primary">Campus Leadership</h5>
                  <p className="text-[11px] text-text-tertiary">Placement Cell Coordinator</p>
                </div>
              </div>
              <span className="text-base font-extrabold text-brand-primary font-mono">
                80% Placed
              </span>
            </div>
          </div>
        </div>

        {/* 2. DYNAMIC METRIC PODS (4 High-Visual Asymmetric Highlights) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-3xl bg-bg-surface border border-brand-primary/20 shadow-card hover:border-brand-primary/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-text-tertiary uppercase">ERP Efficiency</span>
              <TrendingUp className="w-4 h-4 text-brand-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-primary font-mono tracking-tight">
              +85.6%
            </div>
            <p className="text-xs text-text-secondary mt-1">
              Workflow automation gain on BizSuite platform
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-bg-surface border border-emerald-500/20 shadow-card hover:border-emerald-500/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-text-tertiary uppercase">Render Speed</span>
              <Zap className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 font-mono tracking-tight">
              80% Faster
            </div>
            <p className="text-xs text-text-secondary mt-1">
              Via React memoization & component decoupling
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-bg-surface border border-sky-500/20 shadow-card hover:border-sky-500/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-text-tertiary uppercase">Admin Overhead</span>
              <ShieldCheck className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono tracking-tight">
              -60%
            </div>
            <p className="text-xs text-text-secondary mt-1">
              Automated certification & fee cycles (Urban Taal)
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-bg-surface border border-purple-500/20 shadow-card hover:border-purple-500/50 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-text-tertiary uppercase">Live Systems</span>
              <Layers className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tracking-tight">
              5+ Full-Stack
            </div>
            <p className="text-xs text-text-secondary mt-1">
              Production web applications deployed
            </p>
          </div>
        </div>

        {/* 3. ARCHITECTURAL TENETS RIBBON */}
        <div className="p-4 sm:p-5 rounded-2xl bg-bg-surface/60 border border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-text-primary font-bold">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span>Core Engineering Tenets:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              'Zero Layout Shift (CLS 0.00)',
              'Idempotent REST APIs',
              'Role-Based Access Control',
              'Atomic Component Reusability',
              'Scalable MongoDB Indexing',
              'Predictable State Trees'
            ].map((tenet) => (
              <span
                key={tenet}
                className="px-3 py-1 rounded-full bg-bg-subtle text-text-secondary hover:text-brand-primary hover:border-brand-primary/40 border border-border-subtle font-mono text-[11px] transition-colors"
              >
                {tenet}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
