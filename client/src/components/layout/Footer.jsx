import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowUp, 
  Code2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Download, 
  Briefcase, 
  MapPin, 
  ArrowUpRight,
  Heart
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/BrandIcons';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer = ({ profile = {}, onOpenRecruiterModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = profile.email || 'shuwanipatel@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Experience', href: '#about' },
    { label: 'Technical Arsenal & Skills', href: '#skills' },
    { label: 'Featured Project Showcase', href: '#projects' },
    { label: '32-Theme Design Studio', href: '#palettes' },
    { label: 'Employment History', href: '#experience' },
    { label: 'Direct Communication', href: '#contact' },
  ];

  const techBadges = [
    'React 19',
    'JavaScript (ES6+)',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Redux Toolkit',
    'Framer Motion',
    'REST APIs',
    'Vite Build Tool',
  ];

  return (
    <footer className="w-full bg-bg-surface border-t border-border-subtle pt-16 pb-12 px-4 transition-colors relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Background Monogram Typography Watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[12vw] font-black uppercase text-text-primary/[0.02] tracking-widest select-none pointer-events-none whitespace-nowrap">
        SUHANI PATEL
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Pre-Footer Action Banner: Call to Collaborate */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-bg-subtle via-bg-surface to-bg-subtle border border-border-subtle shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Immediate Onboarding • 0-Day Notice
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              Ready to engineer exceptional software together?
            </h3>
            <p className="text-sm text-text-secondary mt-2 leading-relaxed">
              Open for Full-Stack, Frontend React.js, and MERN Architect roles. Let's discuss how my full-stack expertise can drive tangible business metrics.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-2xl bg-bg-surface hover:bg-bg-subtle text-text-primary text-xs font-bold border border-border-subtle shadow-xs flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 font-bold">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-brand-primary" />
                  <span>{email}</span>
                </>
              )}
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-md hover:shadow-brand-primary/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Initiate Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4-Column Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          {/* Col 1: Identity & Brand Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="mb-4 block">
              <BrandLogo size="md" showTagline={true} />
            </a>

            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              Building robust, accessible, and high-performance React web applications and MERN enterprise solutions. Driven by architectural elegance, sub-second renders, and verified business outcomes.
            </p>

            <div className="flex items-center gap-2 text-xs text-text-tertiary">
              <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
              <span>Indore, Madhya Pradesh, India • Remote & Hybrid</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Architecture Map</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-brand-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-border-hover group-hover:bg-brand-primary transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Technology Stack Badges (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-brand-primary" />
              <span>Technical Arsenal</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-bg-subtle text-text-secondary border border-border-subtle hover:border-brand-primary/40 hover:text-text-primary transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Channels & Socials (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4">
              Direct Channels
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <a
                href={profile.github || 'https://github.com/SuhaniPatel36'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-bg-subtle hover:bg-brand-primary hover:text-white text-text-secondary flex items-center justify-center border border-border-subtle transition-all hover:scale-105"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedIn || 'https://linkedin.com/in/Suhani-Patel-WebDev'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-bg-subtle hover:bg-[#0a66c2] hover:text-white text-text-secondary flex items-center justify-center border border-border-subtle transition-all hover:scale-105"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${email}`}
                className="w-9 h-9 rounded-xl bg-bg-subtle hover:bg-emerald-500 hover:text-white text-text-secondary flex items-center justify-center border border-border-subtle transition-all hover:scale-105"
                title="Direct Email"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
              download
              className="w-full px-3 py-2 rounded-xl text-xs font-semibold bg-bg-subtle hover:bg-brand-primary hover:text-white text-text-primary border border-border-subtle flex items-center justify-center gap-1.5 transition-all text-center"
              title="Download ATS-Optimized Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ATS Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-tertiary gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Suhani Patel. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Crafted with React 19 & Framer Motion</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-bg-subtle hover:bg-brand-primary hover:text-white text-text-secondary border border-border-subtle transition-all hover:scale-105 active:scale-95 shadow-xs group"
            title="Scroll to top of page"
          >
            <span className="text-xs font-semibold">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
