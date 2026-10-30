import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check,  
  MessageSquare,
  Sparkles,
  Loader2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/BrandIcons';
import { sendContactMessage } from '../../services/api';

export const ContactSection = ({ profile = {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const quickTemplates = [
    {
      label: '🚀 Full-Time MERN Role',
      subject: 'Interview Invitation: Full-Time Software Engineer Role',
      message: 'Hi Suhani, we reviewed your MERN stack portfolio and would love to discuss a full-time software engineering opportunity with our engineering team.'
    },
    {
      label: '💼 Campus Placement',
      subject: 'Corporate Campus Placement Inquiry',
      message: 'Hello Suhani, we are interested in connecting regarding upcoming 2026 graduate recruitment drives and role placement.'
    },
    {
      label: '🤝 Technical Collaboration',
      subject: 'Collaboration / Open Source Project Discussion',
      message: 'Hi Suhani, I noticed your work on BizSuite ERP and would love to connect to discuss technical architecture and collaboration.'
    },
    {
      label: '💬 Quick Technical Chat',
      subject: 'Quick Coffee Chat / Professional Networking',
      message: 'Hi Suhani, great portfolio! I would like to schedule a brief 15-minute chat to discuss your experience at Keen Solution.'
    }
  ];

  const handleSelectTemplate = (tmpl) => {
    setFormData((prev) => ({
      ...prev,
      subject: tmpl.subject,
      message: tmpl.message
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await sendContactMessage(formData);
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been received. Suhani will get back to you shortly.',
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#0d9488', '#38bdf8', '#818cf8'],
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setIsSubmitting(false);
      setStatus({
        type: 'error',
        message:
          err.response?.data?.message ||
          'Failed to send message. Please feel free to email directly at shuwanipatel@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-bg-subtle/30 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Build Something Exceptional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight">
            Direct Contact & Hiring Portal
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mt-3 leading-relaxed">
            Interested in hiring for a React.js or MERN Stack software engineer role, campus placement, or exploring technical collaboration? Send a note or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Hub (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-bg-surface border border-border-subtle shadow-card">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border-subtle">
                <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  Verified Channels
                </h3>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Response
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-bg-subtle flex items-center justify-between border border-border-subtle hover:border-brand-primary/30 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-mono text-text-tertiary block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${profile.email || 'shuwanipatel@gmail.com'}`}
                        className="text-xs sm:text-sm font-bold text-text-primary hover:text-brand-primary transition-colors block truncate"
                      >
                        {profile.email || 'shuwanipatel@gmail.com'}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(profile.email || 'shuwanipatel@gmail.com', 'email')
                    }
                    className="p-2.5 rounded-xl bg-bg-surface text-text-tertiary hover:text-brand-primary border border-border-subtle transition-all shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-2xl bg-bg-subtle flex items-center justify-between border border-border-subtle hover:border-brand-primary/30 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-mono text-text-tertiary block">
                        Mobile & WhatsApp
                      </span>
                      <a
                        href={`tel:${profile.phone || '+919009212605'}`}
                        className="text-xs sm:text-sm font-bold text-text-primary hover:text-brand-primary transition-colors block truncate"
                      >
                        {profile.phone || '+91 9009212605'}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      handleCopy(profile.phone || '+91 9009212605', 'phone')
                    }
                    className="p-2.5 rounded-xl bg-bg-surface text-text-tertiary hover:text-brand-primary border border-border-subtle transition-all shrink-0 ml-2"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-bg-subtle flex items-center gap-3 border border-border-subtle">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-text-tertiary block">
                      Location & Mobility
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-text-primary block">
                      {profile.location || 'Indore, Madhya Pradesh, India'}
                    </span>
                    <span className="text-[11px] text-text-tertiary">
                      Open to relocation & hybrid models
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-5 border-t border-border-subtle flex items-center gap-3">
                <a
                  href={profile.linkedIn || 'https://linkedin.com/in/Suhani-Patel-WebDev'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 rounded-2xl bg-bg-subtle text-text-primary border border-border-subtle text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0a66c2] hover:text-white transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={profile.github || 'https://github.com/SuhaniPatel36'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 rounded-2xl bg-bg-subtle text-text-primary border border-border-subtle text-xs font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>

            {/* Recruiter Response SLA SLA Box */}
            <div className="p-5 rounded-3xl bg-gradient-to-tr from-brand-primary/10 via-bg-surface to-bg-surface border border-brand-primary/20 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-text-primary block">
                  Quick Turnaround Guaranteed
                </span>
                <p className="text-[11px] text-text-tertiary mt-0.5">
                  I typically respond to recruiter messages within 2–4 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Template Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-bg-surface border border-border-subtle shadow-card">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-text-primary">
                    Send a Direct Message
                  </h3>
                  <span className="text-[11px] font-mono text-brand-primary font-semibold">
                    Live API Connected
                  </span>
                </div>
                <p className="text-xs text-text-tertiary">
                  Click a quick template below to auto-fill the message or write a custom note:
                </p>

                {/* Quick 1-Click Inquiry Templates */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {quickTemplates.map((tmpl) => (
                    <button
                      key={tmpl.label}
                      type="button"
                      onClick={() => handleSelectTemplate(tmpl)}
                      className="px-3 py-1.5 rounded-xl bg-bg-subtle text-text-secondary hover:text-brand-primary hover:border-brand-primary/40 border border-border-subtle text-[11px] font-medium transition-all flex items-center gap-1.5"
                    >
                      <Zap className="w-3 h-3 text-brand-primary" />
                      <span>{tmpl.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm font-medium flex items-center gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30'
                      : 'bg-red-500/10 text-red-600 border border-red-500/30'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-1.5">
                      Your Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / HR Manager"
                      className="w-full px-4 py-3 rounded-2xl bg-bg-subtle border border-border-subtle text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-text-primary mb-1.5">
                      Your Email <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-bg-subtle border border-border-subtle text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Technical Interview / Project Inquiry"
                    className="w-full px-4 py-3 rounded-2xl bg-bg-subtle border border-border-subtle text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-primary mb-1.5">
                    Message <span className="text-brand-primary">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about the role, technical challenge, or timeline..."
                    className="w-full px-4 py-3 rounded-2xl bg-bg-subtle border border-border-subtle text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-primary transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-2xl bg-brand-primary text-white font-bold text-xs sm:text-sm hover:bg-brand-primary-hover transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
