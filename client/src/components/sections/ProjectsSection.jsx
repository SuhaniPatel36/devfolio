import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderKanban, 
  Sparkles, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal,
  Layers,
  Monitor,
  ShieldCheck,
  TrendingUp,
  Cpu,
  ArrowUpRight,
  Maximize2,
  Code
} from 'lucide-react';
import { GithubIcon as Github } from '../ui/BrandIcons';
import { FlipCard } from '../reactbits/FlipCard';
import { FolderFloat } from '../reactbits/FolderFloat';

export const ProjectsSection = ({ projects = [], onSelectProject }) => {
  const [activeFolderId, setActiveFolderId] = useState('all');
  const [viewMode, setViewMode] = useState('showcase'); // 'showcase' | 'carousel' | 'grid'
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedShowcaseIndex, setSelectedShowcaseIndex] = useState(0);

  const folders = [
    { id: 'all', label: 'All Deliverables', count: projects.length },
    { 
      id: 'Enterprise MERN', 
      label: 'Enterprise MERN', 
      count: projects.filter((p) => p.category === 'Enterprise MERN').length 
    },
    { 
      id: 'React Apps', 
      label: 'React Apps', 
      count: projects.filter((p) => p.category === 'React Apps').length 
    },
    { 
      id: 'AI & Full-Stack', 
      label: 'AI & Full-Stack', 
      count: projects.filter((p) => p.category === 'AI & Full-Stack').length 
    },
  ];

  const filteredProjects =
    activeFolderId === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFolderId);

  const showcaseProject = filteredProjects[selectedShowcaseIndex] || filteredProjects[0] || projects[0];

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentCarouselProject = filteredProjects[carouselIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            Full-Stack Implementations & Architecture
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight"
          >
            Featured Production Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-text-secondary max-w-2xl mt-3 leading-relaxed"
          >
            Production web platforms built for speed, data security, and verifiable business efficiency gains.
          </motion.p>
        </div>

        {/* Category Switcher & View Mode Toggle Bar */}
        <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <FolderFloat
              folders={folders}
              activeFolderId={activeFolderId}
              onSelectFolder={(id) => {
                setActiveFolderId(id);
                setCarouselIndex(0);
                setSelectedShowcaseIndex(0);
              }}
            />
          </div>

          {/* 3 Distinct View Mode Options */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-bg-surface border border-border-subtle text-xs font-semibold shadow-xs">
            <button
              onClick={() => setViewMode('showcase')}
              className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
                viewMode === 'showcase'
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Studio Showcase</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Bento Grid</span>
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all ${
                viewMode === 'carousel'
                  ? 'bg-brand-primary text-white shadow-xs'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>3D Flip</span>
            </button>
          </div>
        </div>

        {/* 1. STUDIO SHOWCASE VIEW MODE (Flagship Browser View - Highly engaging & non-repetitive) */}
        {viewMode === 'showcase' && showcaseProject && (
          <div className="space-y-6">
            {/* Top Project Selector Ribbon */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {filteredProjects.map((p, idx) => {
                const isSelected = selectedShowcaseIndex === idx;
                return (
                  <button
                    key={p.slug || p.title}
                    onClick={() => setSelectedShowcaseIndex(idx)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                      isSelected
                        ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                        : 'bg-bg-surface text-text-secondary hover:text-text-primary border-border-subtle hover:border-brand-primary/40'
                    }`}
                  >
                    <span>{p.title}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] ${isSelected ? 'bg-white/20 text-white' : 'bg-bg-subtle text-text-tertiary'}`}>
                      {p.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Virtual Browser Window */}
            <AnimatePresence mode="wait">
              <motion.div
                key={showcaseProject.slug || showcaseProject.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-bg-surface border border-border-subtle shadow-card overflow-hidden"
              >
                {/* Browser Top Chrome */}
                <div className="px-5 py-3.5 bg-bg-subtle/80 border-b border-border-subtle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-text-tertiary ml-2 hidden sm:inline">
                      Production App Browser
                    </span>
                  </div>

                  {/* Browser URL Pill */}
                  <div className="px-4 py-1 rounded-full bg-bg-main/80 border border-border-subtle text-xs font-mono text-text-secondary flex items-center gap-2 max-w-sm truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="truncate">{showcaseProject.liveUrl}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProject(showcaseProject)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-bg-surface text-brand-primary border border-brand-primary/30 hover:bg-brand-primary hover:text-white transition-all flex items-center gap-1"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Deep Dive</span>
                    </button>
                  </div>
                </div>

                {/* Main Showcase Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
                  {/* Left Column: Visual Image Preview (6 Cols) */}
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="w-full h-64 sm:h-80 rounded-2xl bg-bg-subtle/70 border border-border-subtle p-6 flex items-center justify-center relative overflow-hidden group shadow-inner">
                      <img
                        src={showcaseProject.imageUrl}
                        alt={showcaseProject.title}
                        className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-text-tertiary flex-col gap-2">
                        <Cpu className="w-12 h-12 text-brand-primary" />
                        <span className="text-xs font-mono font-bold">{showcaseProject.title}</span>
                      </div>

                      {/* Floating Metric Tag */}
                      {showcaseProject.metrics?.efficiencyBoost && (
                        <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-xl bg-bg-surface/90 backdrop-blur-md border border-brand-primary/30 text-xs font-bold text-brand-primary shadow-md flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{showcaseProject.metrics.efficiencyBoost}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Narrative, Architecture, & Actions (6 Cols) */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                          {showcaseProject.category}
                        </span>
                        {showcaseProject.metrics?.performance && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                            {showcaseProject.metrics.performance}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                        {showcaseProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-primary mt-1 mb-3">
                        {showcaseProject.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                        {showcaseProject.description}
                      </p>

                      {/* Key Architecture Bullets */}
                      <div className="space-y-2 mb-6">
                        {showcaseProject.keyHighlights?.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {showcaseProject.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-bg-subtle text-text-primary border border-border-subtle"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-3">
                      <a
                        href={showcaseProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md transition-all flex items-center gap-2"
                      >
                        <span>Launch Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={showcaseProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl text-xs font-bold bg-bg-subtle text-text-primary hover:bg-border-hover/60 border border-border-subtle transition-all flex items-center gap-2"
                      >
                        <Github className="w-4 h-4 text-brand-primary" />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => onSelectProject(showcaseProject)}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold bg-bg-subtle text-text-secondary hover:text-brand-primary border border-border-subtle transition-all flex items-center gap-1.5 ml-auto"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* 2. BENTO GRID VIEW MODE */}
        {viewMode === 'grid' && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.slug || project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FlipCard
                    project={project}
                    onSelectProject={onSelectProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* 3. 3D FLIP CAROUSEL VIEW MODE */}
        {viewMode === 'carousel' && filteredProjects.length > 0 && (
          <div className="relative">
            <div className="max-w-2xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCarouselProject?.slug || carouselIndex}
                  initial={{ opacity: 0, x: 40, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <FlipCard
                    project={currentCarouselProject}
                    onSelectProject={onSelectProject}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows Floating */}
            <div className="flex items-center justify-between max-w-3xl mx-auto mt-6 px-2">
              <button
                onClick={handlePrevCarousel}
                className="p-3 rounded-2xl bg-bg-surface border border-border-subtle text-text-primary hover:text-brand-primary hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-2 group"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-xs font-bold hidden sm:inline">Prev</span>
              </button>

              {/* Slide Dots Pagination */}
              <div className="flex items-center gap-2">
                {filteredProjects.map((p, idx) => (
                  <button
                    key={p.slug || idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      carouselIndex === idx
                        ? 'w-8 bg-brand-primary'
                        : 'w-2 bg-border-hover/60 hover:bg-brand-primary/50'
                    }`}
                    title={`Slide ${idx + 1}: ${p.title}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextCarousel}
                className="p-3 rounded-2xl bg-bg-surface border border-border-subtle text-text-primary hover:text-brand-primary hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-2 group"
                aria-label="Next project"
              >
                <span className="text-xs font-bold hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="text-center mt-3 text-xs font-mono text-text-tertiary">
              Project <span className="text-brand-primary font-bold">{carouselIndex + 1}</span> of{' '}
              <span>{filteredProjects.length}</span>
            </div>
          </div>
        )}

        {/* GitHub Review Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-bg-surface border border-border-subtle shadow-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-text-primary">
                Want to review the complete codebases on GitHub?
              </h4>
              <p className="text-xs sm:text-sm text-text-tertiary mt-0.5">
                Clean git commits, modular component architecture, and comprehensive README documentation.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/SuhaniPatel36"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-xs font-bold bg-bg-subtle text-text-primary hover:bg-border-hover/60 border border-border-subtle flex items-center gap-2 transition-all shrink-0 shadow-sm"
          >
            <Github className="w-4 h-4 text-brand-primary" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-text-tertiary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
