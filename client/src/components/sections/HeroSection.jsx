import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Briefcase, 
  MapPin,  
  Mail,
  TrendingUp,
  Code2
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/BrandIcons';
import { GradientWaves } from '../reactbits/GradientWaves';
import { DecryptedText } from '../reactbits/DecryptedText';
import { MagneticButton } from '../reactbits/MagneticButton';
import { AuroraGlow } from '../reactbits/AuroraGlow';

export const HeroSection = ({ profile = {}, onOpenRecruiterModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      <GradientWaves className="opacity-90" />
      <AuroraGlow />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-surface/80 backdrop-blur-md border border-brand-primary/30 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-text-primary">
                Available for Full-Time Roles
              </span>
              <span className="text-text-tertiary">•</span>
              <span className="text-xs text-brand-primary font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Indore, India / Remote
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1] mb-4"
            >
              Hi, I'm <span className="text-brand-primary">Suhani Patel</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-secondary block mt-2">
                <DecryptedText
                  text="MERN Stack & React.js Engineer"
                  animateOn="view"
                  speed={35}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary max-w-xl mb-8 leading-relaxed"
            >
              Engineering production-grade enterprise dashboards, full-stack workflow platforms, and high-performance React architectures. Demonstrated <span className="font-semibold text-brand-primary">+85.6% operational efficiency</span> and <span className="font-semibold text-brand-primary">80% memoized render acceleration</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <MagneticButton
                onClick={() => {
                  const el = document.getElementById('projects');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-2xl bg-brand-primary text-white font-bold text-sm shadow-lg hover:bg-brand-primary-hover transition-all flex items-center gap-2 hover:shadow-brand-primary/30"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenRecruiterModal}
                className="px-6 py-3.5 rounded-2xl bg-bg-surface text-text-primary font-bold text-sm border border-brand-primary/30 hover:border-brand-primary hover:bg-bg-subtle shadow-card transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-brand-primary" />
                <span>Recruiter View</span>
              </MagneticButton>

              <a
                href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
                download
                className="px-4 py-3.5 rounded-2xl bg-bg-surface/70 hover:bg-bg-subtle text-text-secondary hover:text-text-primary font-semibold text-sm border border-border-subtle transition-all flex items-center gap-2"
                title="Download ATS-Friendly Resume"
              >
                <Download className="w-4 h-4 text-brand-primary" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex items-center gap-4 text-xs text-text-tertiary"
            >
              <span>Connect directly:</span>
              <a
                href={profile.github || 'https://github.com/SuhaniPatel36'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors flex items-center gap-1 font-medium"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span>•</span>
              <a
                href={profile.linkedIn || 'https://linkedin.com/in/Suhani-Patel-WebDev'}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors flex items-center gap-1 font-medium"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={`mailto:${profile.email || 'shuwanipatel@gmail.com'}`}
                className="hover:text-brand-primary transition-colors flex items-center gap-1 font-medium"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual, Avatar, & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-primary/40 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-4 rounded-full border border-brand-accent/20 animate-pulse" />

              <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-brand-primary/20 via-brand-accent/15 to-transparent p-2 backdrop-blur-md border border-brand-primary/30 shadow-2xl relative overflow-hidden flex items-center justify-center">
                <img
                  src="/images/profile1.png"
                  alt="Suhani Patel"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full rounded-full bg-bg-surface items-center justify-center flex-col text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-2xl shadow-lg mb-2">
                    SP
                  </div>
                  <span className="font-bold text-sm text-text-primary">Suhani Patel</span>
                  <span className="text-[11px] text-brand-primary font-mono">React / MERN</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl glass-panel shadow-lg border border-brand-primary/30 flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-text-tertiary block font-mono">Frontend</span>
                  <span className="text-xs font-bold text-text-primary">React 19 & Tailwind</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-4 px-3.5 py-2 rounded-2xl glass-panel shadow-lg border border-emerald-500/30 flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-emerald-600 block font-mono font-bold">+85.6%</span>
                  <span className="text-xs font-bold text-text-primary">ERP Efficiency</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -bottom-2 -right-4 px-3 py-1.5 rounded-xl glass-panel shadow-md border border-amber-500/30 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-[11px] font-bold text-text-primary">Node • Express • MongoDB</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Key Metric Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-2xl bg-bg-surface/80 backdrop-blur-md border border-border-subtle shadow-card text-center hover:border-brand-primary/40 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-brand-primary font-mono tracking-tight">
              85.6%
            </div>
            <div className="text-xs font-semibold text-text-primary mt-1">
              Operational Gain
            </div>
            <div className="text-[11px] text-text-tertiary">
              In ERP tracking platform
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-bg-surface/80 backdrop-blur-md border border-border-subtle shadow-card text-center hover:border-brand-primary/40 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono tracking-tight">
              80%
            </div>
            <div className="text-xs font-semibold text-text-primary mt-1">
              Render Optimization
            </div>
            <div className="text-[11px] text-text-tertiary">
              Via memoization & hooks
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-bg-surface/80 backdrop-blur-md border border-border-subtle shadow-card text-center hover:border-brand-primary/40 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-amber-500 font-mono tracking-tight">
              60%
            </div>
            <div className="text-xs font-semibold text-text-primary mt-1">
              Admin Time Saved
            </div>
            <div className="text-[11px] text-text-tertiary">
              Automated academy workflow
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-bg-surface/80 backdrop-blur-md border border-border-subtle shadow-card text-center hover:border-brand-primary/40 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-purple-500 font-mono tracking-tight">
              4+
            </div>
            <div className="text-xs font-semibold text-text-primary mt-1">
              Full-Stack Apps
            </div>
            <div className="text-[11px] text-text-tertiary">
              Production ready with code
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
