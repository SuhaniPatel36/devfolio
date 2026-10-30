import React, { useState } from 'react';
import { 
  ExternalLink, 
  RotateCw, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  ArrowRight
} from 'lucide-react';
import { GithubIcon as Github } from '../ui/BrandIcons';

export const FlipCard = ({ project, onSelectProject }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {
    if (e.target.closest('a') || e.target.closest('.no-flip')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full h-[520px] select-none">
      <div
        onClick={handleCardClick}
        className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-bg-surface border border-border-subtle p-6 flex flex-col justify-between shadow-card hover:shadow-card-hover transition-shadow overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-primary/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20">
                {project.category}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                className="flex items-center gap-1.5 text-xs text-text-tertiary hover:text-brand-primary transition-colors bg-bg-subtle px-2.5 py-1 rounded-full border border-border-subtle"
                title="Flip to view architecture"
              >
                <span>Architecture</span>
                <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            <div className="w-full h-44 rounded-2xl bg-bg-subtle/80 border border-border-subtle overflow-hidden flex items-center justify-center p-3 relative group-hover:scale-[1.01] transition-transform duration-300">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-contain drop-shadow-md"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-text-tertiary flex-col gap-2">
                <Cpu className="w-10 h-10 text-brand-primary" />
                <span className="text-xs font-mono font-medium">{project.title}</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-brand-primary mt-0.5 line-clamp-1">
                {project.subtitle}
              </p>
              <p className="text-sm text-text-secondary mt-2 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-bg-subtle text-text-secondary border border-border-subtle"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-bg-subtle text-text-tertiary">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-text-tertiary">
              <span className="flex items-center gap-1.5 font-medium text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Production Ready
              </span>
              <span className="flex items-center gap-1 group-hover:text-brand-primary transition-colors font-medium">
                Flip card for code & live demo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-bg-surface border-2 border-brand-primary/40 p-6 flex flex-col justify-between shadow-elevation overflow-hidden">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-accent/15 via-transparent to-transparent rounded-tr-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-4 border-b border-border-subtle pb-3">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-primary font-bold">
                  System Architecture & Impact
                </span>
                <h4 className="text-base font-bold text-text-primary line-clamp-1">
                  {project.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="no-flip flex items-center gap-1 text-xs text-text-secondary hover:text-brand-primary transition-colors bg-bg-subtle px-2.5 py-1 rounded-full border border-border-subtle"
                title="Return to preview"
              >
                <span>Back</span>
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <div className="p-3 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                <div className="flex items-center gap-1.5 text-xs text-brand-primary font-semibold mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Metric</span>
                </div>
                <div className="text-sm font-bold text-text-primary">
                  {project.metrics?.efficiencyBoost || 'High Efficiency'}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-brand-accent/10 border border-brand-accent/20">
                <div className="flex items-center gap-1.5 text-xs text-brand-accent font-semibold mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Security</span>
                </div>
                <div className="text-sm font-bold text-text-primary">
                  {project.metrics?.performance || 'Validated Architecture'}
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                Engineering Highlights:
              </p>
              <ul className="space-y-1.5">
                {project.keyHighlights.slice(0, 3).map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="no-flip w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="no-flip w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-bg-subtle text-text-primary hover:bg-border-hover/50 border border-border-subtle flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>GitHub Repo</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>

            {onSelectProject && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project);
                }}
                className="no-flip text-center text-xs text-brand-primary hover:underline font-medium py-1"
              >
                View Full Technical Case Study
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
