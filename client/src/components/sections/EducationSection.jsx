import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Binary, 
  Network, 
  Database, 
  Cpu, 
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const EducationSection = ({ education = [] }) => {
  const [selectedTopic, setSelectedTopic] = useState('dsa');

  const btech = education.find((e) => e.degree.includes('Bachelor')) || education[0] || {};
  const secondaryDegrees = education.filter((e) => !e.degree.includes('Bachelor'));

  const csCompetencies = [
    {
      id: 'dsa',
      icon: <Binary className="w-4 h-4 text-sky-400" />,
      title: 'Data Structures & Algorithms',
      grade: 'Advanced',
      description: 'Arrays, Hash Maps, Trees, Dynamic Programming, Big-O Time & Space Complexity analysis.',
      productionTieIn: 'Implemented optimized memoization reducing React re-render cycles by 80%.'
    },
    {
      id: 'dbms',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      title: 'Database Management Systems',
      grade: 'Mastery',
      description: 'Relational schema normalization, ACID transactions, MongoDB document indexing & Atlas clusters.',
      productionTieIn: 'Architected multi-tenant schemas for BizSuite ERP with 85.6% workflow speed gain.'
    },
    {
      id: 'networks',
      icon: <Network className="w-4 h-4 text-amber-400" />,
      title: 'Computer Networks & Security',
      grade: 'Proficient',
      description: 'TCP/IP, HTTP/1.1 & HTTP/2, REST contracts, CORS policies, JWT auth and cookie transport.',
      productionTieIn: 'Engineered secure JWT token rotation and role-based access control across all endpoints.'
    },
    {
      id: 'os',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      title: 'Operating Systems & Concurrency',
      grade: 'Proficient',
      description: 'Process scheduling, multi-threading, asynchronous event loop, file I/O streams and memory caching.',
      productionTieIn: 'Leveraged Node.js non-blocking I/O and PDFKit streaming for automated certificate generation.'
    }
  ];

  const activeCompetency = csCompetencies.find((c) => c.id === selectedTopic) || csCompetencies[0];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations & CS Rigor
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            Academic Credentials & Theoretical Mastery
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-text-secondary max-w-2xl mt-3 leading-relaxed"
          >
            Rooted in formal computer science engineering principles: algorithmic complexity, deterministic distributed networks, and database reliability.
          </motion.p>
        </div>

        {/* 1. ASYMMETRIC MAIN DEGREE SHOWCASE (Not uniform cards!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Main B.Tech Degree Hero Card (8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-bg-surface border border-brand-primary/30 shadow-card relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Badge & Period Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-primary text-white shadow-sm flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Degree of Distinction</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Pursuing (Final Year)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-xl border border-brand-primary/20 font-bold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{btech.period || '2022 – 2026'}</span>
                </div>
              </div>

              {/* Title & University */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-1">
                {btech.degree || 'Bachelor of Technology (B.Tech)'}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-brand-primary mb-3">
                {btech.major || 'Computer Science & Engineering'}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-text-secondary mb-6 pb-6 border-b border-border-subtle">
                <span className="font-semibold text-text-primary flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-brand-primary" />
                  {btech.institution || 'Malwa Institute of Science & Technology'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-text-tertiary">
                  <MapPin className="w-3.5 h-3.5" />
                  {btech.location || 'Indore, Madhya Pradesh'}
                </span>
              </div>

              {/* Academic Highlights & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-bg-subtle/70 border border-border-subtle">
                  <span className="text-[10px] font-mono uppercase text-text-tertiary block">Cumulative Grade</span>
                  <span className="text-2xl font-extrabold text-brand-primary font-mono block mt-0.5">7.9+ CGPA</span>
                  <span className="text-xs text-text-secondary mt-1 block">Consistent top-tier academic performance</span>
                </div>
                <div className="p-4 rounded-2xl bg-bg-subtle/70 border border-border-subtle">
                  <span className="text-[10px] font-mono uppercase text-text-tertiary block">Practical Specialization</span>
                  <span className="text-sm font-bold text-text-primary block mt-1">Full-Stack MERN Architecture</span>
                  <span className="text-xs text-text-secondary mt-1 block">Enterprise dashboards & cloud systems</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                {btech.details || 'Rigorous theoretical study encompassing Data Structures, Relational Database Management Systems, Computer Networks, Operating Systems, and Distributed Software Engineering.'}
              </p>
            </div>

            {/* University Verification Seal */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs text-text-tertiary">
              <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
                RGPV Affiliated & AICTE Approved Curriculum
              </span>
              <span className="font-mono text-[11px] bg-bg-subtle px-2.5 py-1 rounded-lg border border-border-subtle">
                Roll/Reg: Verified Student Record
              </span>
            </div>
          </div>

          {/* Secondary Credentials Side Stack (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {secondaryDegrees.map((edu, idx) => (
              <div
                key={edu.degree}
                className="p-5 rounded-3xl bg-bg-surface border border-border-subtle shadow-card flex flex-col justify-between flex-1 hover:border-brand-primary/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-bg-subtle text-text-secondary border border-border-subtle">
                      {edu.period}
                    </span>
                    <span className="text-[10px] font-bold text-brand-primary uppercase">
                      {edu.status?.includes('Distinction') ? '★ Distinction' : 'Completed'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-text-primary mb-0.5">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-brand-primary mb-2">
                    {edu.major}
                  </p>

                  <p className="text-xs text-text-tertiary mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.institution}
                  </p>

                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {edu.details}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-tertiary">
                  <span>{edu.status}</span>
                  <Award className="w-3.5 h-3.5 text-brand-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. INTERACTIVE "THEORY TO PRODUCTION" BRIDGE (Completely novel & engaging!) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-bg-surface/90 border border-border-subtle shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border-subtle">
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-brand-primary tracking-wider flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                The CS Engineering Edge
              </span>
              <h3 className="text-xl font-bold text-text-primary">
                Connecting University Theory to Enterprise Production Code
              </h3>
            </div>
            <span className="text-xs text-text-tertiary">
              Click any foundational subject to inspect how it powers my live apps:
            </span>
          </div>

          {/* Subject Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {csCompetencies.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setSelectedTopic(comp.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                  selectedTopic === comp.id
                    ? 'bg-bg-subtle border-brand-primary shadow-sm'
                    : 'bg-bg-surface border-border-subtle hover:border-brand-primary/40'
                }`}
              >
                <div className="p-2 rounded-xl bg-bg-main border border-border-subtle shrink-0">
                  {comp.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-text-primary block truncate">
                    {comp.title}
                  </span>
                  <span className="text-[10px] text-brand-primary font-mono font-semibold">
                    {comp.grade}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Subject Breakdown */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompetency.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-bg-main border border-border-subtle grid grid-cols-1 md:grid-cols-2 gap-4 items-center"
            >
              <div>
                <span className="text-[10px] uppercase font-mono text-text-tertiary block mb-1">
                  Theoretical Foundation
                </span>
                <h4 className="text-base font-bold text-text-primary mb-1">
                  {activeCompetency.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {activeCompetency.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-surface border border-brand-primary/30">
                <span className="text-[10px] uppercase font-mono text-brand-primary font-bold flex items-center gap-1.5 mb-1">
                  <ArrowRight className="w-3 h-3" />
                  Applied in Production
                </span>
                <p className="text-xs font-medium text-text-primary leading-relaxed">
                  "{activeCompetency.productionTieIn}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
