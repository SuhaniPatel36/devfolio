import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Mail, 
  Copy, 
  Check 
} from 'lucide-react';

export const RecruiterViewModal = ({ isOpen, onClose, onOpenResumeModal, profile = {} }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shuwanipatel@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-bg-surface rounded-3xl border border-brand-primary/40 shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-purple-500" />

        <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-text-primary">
                  Recruiter Fast-Track Portal
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  Ready to Interview
                </span>
              </div>
              <p className="text-xs text-text-tertiary">
                Target Role: React.js Developer / Full-Stack MERN Software Engineer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-bg-subtle transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-bg-subtle border border-border-subtle text-center">
            <span className="text-[10px] font-mono text-text-tertiary block">Availability</span>
            <span className="text-xs font-bold text-emerald-600">Immediate</span>
          </div>
          <div className="p-3 rounded-2xl bg-bg-subtle border border-border-subtle text-center">
            <span className="text-[10px] font-mono text-text-tertiary block">Degree</span>
            <span className="text-xs font-bold text-text-primary">B.Tech CSE '26</span>
          </div>
          <div className="p-3 rounded-2xl bg-bg-subtle border border-border-subtle text-center">
            <span className="text-[10px] font-mono text-text-tertiary block">Internship</span>
            <span className="text-xs font-bold text-brand-primary">Keen Solution</span>
          </div>
          <div className="p-3 rounded-2xl bg-bg-subtle border border-border-subtle text-center">
            <span className="text-[10px] font-mono text-text-tertiary block">Efficiency Gain</span>
            <span className="text-xs font-bold text-text-primary">+85.6%</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-brand-primary font-bold mb-3 flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            Verified ATS Resumes for Download
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <a
              href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
              download
              className="p-4 rounded-2xl bg-bg-subtle/80 hover:bg-brand-primary/10 border border-brand-primary/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                    Infosys ATS Resume (PDF)
                  </span>
                  <Download className="w-4 h-4 text-brand-primary group-hover:translate-y-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-text-secondary leading-normal">
                  Standardized single-column ATS parser format for campus and corporate recruitment.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-brand-primary font-semibold">
                Download PDF (Verified Format) ↓
              </span>
            </a>

            <a
              href="/resumes/Suhani_Patel_Web_Dev_Resume.pdf"
              download
              className="p-4 rounded-2xl bg-bg-subtle/80 hover:bg-brand-accent/10 border border-border-subtle hover:border-brand-accent/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-text-primary group-hover:text-brand-accent transition-colors">
                    Web Developer Resume (PDF)
                  </span>
                  <Download className="w-4 h-4 text-brand-accent group-hover:translate-y-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-text-secondary leading-normal">
                  Detailed developer breakdown with full project architecture and academic coursework.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-brand-accent font-semibold">
                Download PDF (Full Profile) ↓
              </span>
            </a>
          </div>

          {onOpenResumeModal && (
            <button
              onClick={() => {
                onClose();
                onOpenResumeModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-bg-subtle hover:bg-brand-primary/10 text-brand-primary border border-brand-primary/40 flex items-center justify-center gap-2 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Launch In-Browser Interactive Resume Viewer & ATS Text</span>
            </button>
          )}
        </div>

        <div className="mb-6 p-4 rounded-2xl bg-bg-subtle border border-border-subtle">
          <h4 className="text-xs font-bold text-text-primary mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            Key Qualifications Checklist
          </h4>
          <ul className="space-y-1.5 text-xs text-text-secondary">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>React 19, ES6+, Tailwind CSS, Context API & State Flow</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Node.js, Express.js REST APIs with JWT & RBAC security</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>MongoDB schema modeling, Mongoose ODM, and cloud hosting</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Proven leadership coordinating placement drives with 80% outcome</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="mailto:shuwanipatel@gmail.com?subject=Interview%20Invitation%20-%20React%20Developer%20Role"
            className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Send Interview Invitation</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-semibold bg-bg-subtle text-text-primary border border-border-subtle hover:bg-border-hover/50 flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterViewModal;
