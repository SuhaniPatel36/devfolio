import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import {
  getProfile,
  getProjects,
  getSkills,
  getExperience,
  getEducation,
} from "./services/api";

import { LoadingScreen } from "./components/layout/LoadingScreen";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { RecruiterBar } from "./components/layout/RecruiterBar";
import { PaletteQuickBar } from "./components/layout/PaletteQuickBar";

import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { PaletteCompareSection } from "./components/sections/PaletteCompareSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ContactSection } from "./components/sections/ContactSection";

import { RecruiterViewModal } from "./components/sections/RecruiterViewModal";
import { ProjectCaseStudyModal } from "./components/sections/ProjectCaseStudyModal";
import { PaletteShowcaseModal } from "./components/sections/PaletteShowcaseModal";
import { ResumeModal } from "./components/sections/ResumeModal";

const App = () => {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  // Modals state
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [prof, proj, sk, exp, edu] = await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperience(),
          getEducation(),
        ]);
        setProfile(prof || {});
        setProjects(proj || []);
        setSkills(sk || []);
        setExperience(exp || []);
        setEducation(edu || []);
      } catch (err) {
        console.error("Error fetching portfolio data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider>
      {/* Animated Brand Logo Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoadingScreen && (
          <LoadingScreen
            onLoadingComplete={() => setIsLoadingScreen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-bg-main text-text-primary transition-colors duration-300 relative selection:bg-brand-primary selection:text-white"
      >
        {/* Navigation Header with Active Section Indicator */}
        <Navbar 
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          onOpenPaletteShowcase={() => setIsPaletteModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          <HeroSection
            profile={profile}
            onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          />

          <AboutSection
            profile={profile}
            onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
          />

          <SkillsSection skills={skills} />

          {/* Interactive Project Carousel & Architecture Showcase */}
          <ProjectsSection
            projects={projects}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />

          {/* 32 Complete Themes Comparator with Interactive Carousel */}
          <PaletteCompareSection
            onOpenShowcaseModal={() => setIsPaletteModalOpen(true)}
          />

          <ExperienceSection experience={experience} />

          <EducationSection education={education} />

          <ContactSection profile={profile} />
        </main>

        {/* Footer */}
        <Footer 
          profile={profile} 
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        />

        {/* Floating Recruiter Fast-Track Bar */}
        <RecruiterBar
          onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
        />

        {/* Floating Palette Switcher & Quick Controller */}
        <PaletteQuickBar
          onOpenShowcase={() => setIsPaletteModalOpen(true)}
        />

        {/* Recruiter Modal */}
        <RecruiterViewModal
          isOpen={isRecruiterModalOpen}
          onClose={() => setIsRecruiterModalOpen(false)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          profile={profile}
        />

        {/* Project Technical Case Study Modal */}
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* 32 Palettes Full-Screen Comparison Studio Modal */}
        <PaletteShowcaseModal
          isOpen={isPaletteModalOpen}
          onClose={() => setIsPaletteModalOpen(false)}
        />

        {/* Executive ATS Resume In-App Viewer Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
