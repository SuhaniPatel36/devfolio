import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon as Github } from '../ui/BrandIcons';

export const ProjectCaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-bg-surface rounded-3xl border border-brand-primary/40 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-purple-500" />

        <div className="flex items-start justify-between gap-4 border-b border-border-subtle pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                {project.category}
              </span>
              <span className="text-xs text-text-tertiary font-mono">Case Study</span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-brand-primary font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-bg-subtle transition-colors shrink-0"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="w-full h-56 rounded-2xl bg-bg-subtle border border-border-subtle overflow-hidden flex items-center justify-center p-4 mb-6 relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-bg-subtle border border-border-subtle">
            <span className="text-[10px] font-mono text-text-tertiary block mb-1">Impact Metric</span>
            <span className="text-sm font-bold text-brand-primary">
              {project.metrics?.efficiencyBoost || 'High Efficiency'}
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-bg-subtle border border-border-subtle">
            <span className="text-[10px] font-mono text-text-tertiary block mb-1">Architecture</span>
            <span className="text-sm font-bold text-text-primary">
              {project.metrics?.performance || 'MERN Stack'}
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-bg-subtle border border-border-subtle col-span-2 sm:col-span-1">
            <span className="text-[10px] font-mono text-text-tertiary block mb-1">Deployment</span>
            <span className="text-sm font-bold text-emerald-600">Production Live</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary font-bold mb-1">
              Project Architecture Overview
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary font-bold mb-2">
              Engineering Accomplishments & Solutions
            </h4>
            <ul className="space-y-2">
              {(project.keyHighlights || []).map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-8 pt-4 border-t border-border-subtle">
          <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary font-semibold mb-2.5">
            Integrated Technologies & Libraries:
          </h4>
          <div className="flex flex-wrap gap-2">
            {(project.technologies || []).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl text-xs font-medium bg-bg-subtle text-text-primary border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border-subtle">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Launch Live Demo Application</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-4 rounded-xl text-xs font-bold bg-bg-subtle text-text-primary hover:bg-border-hover/60 border border-border-subtle flex items-center justify-center gap-2 transition-all"
          >
            <Github className="w-4 h-4 text-brand-primary" />
            <span>View Source Repository on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudyModal;
