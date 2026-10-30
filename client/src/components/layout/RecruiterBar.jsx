import React, { useState } from 'react';
import { 
  Briefcase, 
  Download, 
  FileCheck, 
  Sparkles, 
  X
} from 'lucide-react';

export const RecruiterBar = ({ onOpenRecruiterModal }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-40 max-w-2xl w-full">
      <div className="glass-dropdown rounded-2xl p-2.5 md:p-3 border border-brand-primary/30 shadow-2xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300">
        <div className="flex items-center gap-3 pl-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent text-white flex items-center justify-center shrink-0 shadow-md">
            <Briefcase className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-text-primary tracking-tight">
                Recruiter Fast-Track
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                <Sparkles className="w-3 h-3" />
                Available Immediately
              </span>
            </div>
            <p className="text-[11px] text-text-secondary line-clamp-1">
              Final Year CSE • 85.6% Efficiency Boost • Infosys ATS Ready
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenRecruiterModal}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm transition-all flex items-center gap-1.5"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">1-Click</span> Profile
          </button>

          <a
            href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
            download
            className="p-2 rounded-xl bg-bg-subtle hover:bg-border-hover/60 text-text-primary border border-border-subtle transition-colors"
            title="Download ATS Resume PDF"
          >
            <Download className="w-4 h-4 text-brand-primary" />
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 rounded-lg text-text-tertiary hover:text-text-primary transition-colors"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterBar;
