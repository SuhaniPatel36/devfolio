import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Download, 
  Briefcase, 
  Palette, 
  Check, 
  LayoutGrid, 
  ChevronRight, 
  Sparkles,
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { DecryptedText } from '../reactbits/DecryptedText';
import { BrandLogo } from '../ui/BrandLogo';

export const Navbar = ({ onOpenRecruiterModal, onOpenPaletteShowcase }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, changeTheme, themes, activePalette } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setIsScrolled(currentScroll > 24);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sections = ['about', 'skills', 'projects', 'palettes', 'experience', 'contact'];
      const scrollPosition = currentScroll + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Themes', href: '#palettes', id: 'palettes' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Precision Scroll Progress Line across the very top */}
      <div className="fixed top-0 inset-x-0 h-[2.5px] z-50 bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary origin-left shadow-[0_0_8px_var(--brand-glow)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 inset-x-0 z-40 px-3 sm:px-6 py-2.5 transition-all duration-300 pointer-events-none ${
          isScrolled ? 'backdrop-blur-md bg-bg-main/75 border-b border-border-subtle shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Brand Logo & Dynamic Theme-Adaptive Monogram */}
          <a
            href="#"
            className="flex items-center px-2.5 sm:px-3 py-1.5 rounded-2xl glass-panel text-text-primary shadow-xs hover:shadow-card transition-all group border border-border-subtle"
            title="Suhani Patel Portfolio Home"
          >
            <BrandLogo size="md" showTagline={true} />
          </a>

          {/* Elevated Desktop Navigation Pill Bar */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass-panel shadow-sm border border-border-subtle relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full bg-brand-primary shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Controls & Interactive Theme Trigger */}
          <div className="flex items-center gap-2">
            {/* Theme Dropdown Trigger Pill */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="px-3 py-1.5 rounded-xl glass-panel text-text-primary hover:text-brand-primary transition-all shadow-xs flex items-center gap-2 border border-border-subtle group"
                title="Change theme palette"
                aria-label="Change theme palette"
              >
                <div className="flex items-center -space-x-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: activePalette?.accent }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: activePalette?.secondaryBg }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                    style={{ backgroundColor: activePalette?.primaryBg }}
                  />
                </div>
                <span className="text-xs font-mono font-bold hidden sm:inline text-text-primary">
                  #{activePalette?.num}
                </span>
                <Palette className="w-3.5 h-3.5 text-text-tertiary group-hover:text-brand-primary transition-colors" />
              </button>

              {/* Theme Dropdown Menu */}
              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-72 max-h-[75vh] overflow-y-auto rounded-2xl glass-dropdown p-2.5 shadow-elevation z-50 border border-border-subtle"
                  >
                    <button
                      onClick={() => {
                        setThemeDropdownOpen(false);
                        onOpenPaletteShowcase();
                      }}
                      className="w-full mb-2 p-2 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover flex items-center justify-between shadow-xs transition-all"
                    >
                      <span className="flex items-center gap-1.5">
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>Compare All 32 Themes</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-between px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-text-tertiary">
                      <span>{themes.length} Complete Themes</span>
                      <span>Press P</span>
                    </div>

                    <div className="space-y-1 mt-1">
                      {themes.map((t) => {
                        const isSelected = theme === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              changeTheme(t.id);
                              setThemeDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                              isSelected
                                ? 'bg-brand-primary text-white shadow-xs font-bold'
                                : 'text-text-primary hover:bg-bg-subtle'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`w-5 h-5 rounded-md font-mono text-[10px] font-bold flex items-center justify-center shrink-0 ${
                                  isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-bg-subtle text-text-secondary border border-border-subtle'
                                }`}
                              >
                                {t.num}
                              </span>
                              <div className="text-left">
                                <div className="truncate max-w-[130px] leading-tight">
                                  {t.name}
                                </div>
                                <div className="flex items-center gap-1 mt-0.5">
                                  <span
                                    className="w-2 h-2 rounded-full border border-black/10"
                                    style={{ backgroundColor: t.primaryBg }}
                                  />
                                  <span
                                    className="w-2 h-2 rounded-full border border-black/10"
                                    style={{ backgroundColor: t.secondaryBg }}
                                  />
                                  <span
                                    className="w-2 h-2 rounded-full border border-black/10"
                                    style={{ backgroundColor: t.accent }}
                                  />
                                </div>
                              </div>
                            </div>

                            {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Recruiter Fast-Track Button */}
            <button
              onClick={onOpenRecruiterModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Recruiter Portal</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl glass-panel text-text-primary border border-border-subtle"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl glass-dropdown p-4 border border-border-subtle shadow-elevation pointer-events-auto"
            >
              <nav className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      activeSection === link.id
                        ? 'bg-brand-primary text-white font-bold'
                        : 'text-text-primary hover:bg-bg-subtle'
                    }`}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && <Sparkles className="w-3.5 h-3.5" />}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPaletteShowcase();
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-brand-primary hover:bg-brand-primary/10 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span>Compare All Themes ({themes.length})</span>
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </nav>

              <div className="pt-3 border-t border-border-subtle flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRecruiterModal();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-brand-primary text-white flex items-center justify-center gap-2 shadow-xs"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Open Recruiter Fast-Track Portal</span>
                </button>
                <a
                  href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
                  download
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-bg-subtle text-text-primary flex items-center justify-center gap-2 border border-border-subtle"
                >
                  <Download className="w-4 h-4" />
                  <span>Download ATS Resume (PDF)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
