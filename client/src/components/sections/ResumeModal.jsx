import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  Award, 
  Layers, 
  FileText 
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/BrandIcons';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullResumeText = `SUHANI PATEL
React.js Developer & Full-Stack MERN Software Engineer
Indore, Madhya Pradesh, India | +91 9009212605 | shuwanipatel@gmail.com
LinkedIn: https://linkedin.com/in/Suhani-Patel-WebDev | GitHub: https://github.com/SuhaniPatel36

==================================================
PROFESSIONAL SUMMARY
==================================================
Computer Science Engineering undergraduate and Full-Stack MERN Developer with production internship experience architecting enterprise management platforms, scalable REST APIs, and high-performance React architectures. Demonstrated track record in accelerating operational efficiency by +85.6% and boosting client-side rendering speed by 80% through memoization, modular component design, and optimized database aggregation. Proficient in React 19, JavaScript (ES6+), Node.js, Express.js, MongoDB, and Tailwind CSS.

==================================================
TECHNICAL SKILLS
==================================================
• Languages: JavaScript (ES6+), Core Java, HTML5 Semantic, CSS3 / Modern Flexbox & Grid
• Frontend Technologies: React.js (v18 & v19), Context API, Redux Toolkit, Tailwind CSS, React Router, Vite, Framer Motion
• Backend & APIs: Node.js, Express.js, RESTful Architecture, JWT Authentication, Role-Based Access Control (RBAC), Axios Interceptors
• Databases: MongoDB, Mongoose ODM, MongoDB Atlas Cloud
• Tools & Methodologies: Git, GitHub, Postman API Testing, Vercel, Render, Clean Architecture, Performance Optimization, Agile/Scrum

==================================================
PROFESSIONAL WORK EXPERIENCE
==================================================
MERN Stack Developer Intern | Keen Solution, Indore, India
January 2025 – Present
• Architected responsive enterprise dashboard interfaces using React.js and Tailwind CSS, reducing client-side re-render latency by 80% via custom hooks and React memoization.
• Engineered and secured 15+ RESTful endpoints utilizing Node.js, Express.js, and JWT-based authentication with role-based access control (RBAC).
• Automated cross-departmental business workflows within the enterprise management suite, generating an 85.6% boost in operational processing efficiency.
• Designed MongoDB Atlas aggregation pipelines and normalized schemas, reducing query turnaround times by 45%.
• Collaborated in cross-functional Agile sprints, performing code reviews, API payload optimization, and ensuring 100% responsive cross-browser compatibility.

Placement Cell Student Coordinator | Malwa Institute of Science & Technology, Indore, India
2023 – 2025
• Managed end-to-end recruitment pipelines, communication, and technical interview logistics for 20+ visiting corporate tech recruiters, driving an 80% campus placement rate.
• Conducted technical screening, resume review sessions, and mock coding workshops in JavaScript and data structures for 150+ undergraduate peers.

==================================================
FEATURED SOFTWARE PROJECTS
==================================================
BizSuite — Enterprise Resource Planning (ERP) Platform
Technologies: React.js, Node.js, Express.js, MongoDB, Mongoose, Tailwind CSS
• Built an end-to-end ERP platform centralizing inventory tracking, employee management, and department workflows with RBAC security.
• Created real-time graphical analytics dashboards, accelerating business operational efficiency by 85.6%.
• Repository: https://github.com/SuhaniPatel36/bizsuite-erp

Urban Taal — Dance Academy & Certification Automation System
Technologies: React.js, Express.js, Node.js, MongoDB, PDFKit, Context API
• Digitized full-cycle academy operations (student enrollments, recurring fee schedules, automated attendance), saving 60% administrative overhead.
• Built an automated server-side PDF generation engine creating tamper-proof dynamic student certificates and printable salary invoices.
• Repository: https://github.com/SuhaniPatel36/urban-taal-management

Full-Stack Scalable E-Commerce Web Application
Technologies: React 19, Node.js, Express.js, MongoDB, JWT, Tailwind CSS
• Developed a production-grade e-commerce application with secure JWT authentication in HTTP-only cookies and protected routes.
• Boosted frontend rendering responsiveness by 80% utilizing memoized components (useMemo, React.memo, useCallback) and optimistic cart updates.
• Repository: https://github.com/SuhaniPatel36/mern-ecommerce-platform

NeuroLearn — AI-Assisted Adaptive Learning Platform
Technologies: React.js, Node.js, Express.js, MongoDB, Python Flask Microservice
• Architected a dual-backend architecture interfacing an Express REST API with a Python Flask machine learning microservice for student risk scoring.
• Delivered instructor and student role-based dashboards featuring dynamic chart visualizations and automated assessment workflows.
• Repository: https://github.com/SuhaniPatel36/neurolearn-ai-platform

==================================================
EDUCATION
==================================================
Bachelor of Technology (B.Tech) in Computer Science & Engineering
Malwa Institute of Science & Technology, Indore, Madhya Pradesh (2022 – 2026)
• Status: Final Year Undergraduate | CGPA: 7.9+ / 10.0
• Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering

Diploma in Computer Applications (DCA)
Makhanlal Chaturvedi National University, Indore, Madhya Pradesh (2022 – 2023)
• Status: Completed with Distinction (Top Percentile)
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-bg-surface rounded-3xl border border-brand-primary/40 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-bg-subtle border-b border-border-subtle flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
                <span>Executive ATS-Optimized Resume</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  ATS Score: 98%
                </span>
              </h3>
              <p className="text-[11px] text-text-tertiary">
                Suhani Patel • React.js Developer & Full-Stack MERN Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-bg-surface hover:bg-border-hover/50 text-text-primary border border-border-subtle flex items-center gap-1.5 transition-all shadow-xs"
              title="Copy plain text formatted for job application portals"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 font-bold">Copied ATS Text!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-bg-surface hover:bg-border-hover/50 text-text-primary border border-border-subtle flex items-center gap-1.5 transition-all shadow-xs hidden sm:flex"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-text-secondary" />
              <span>Print</span>
            </button>

            <a
              href="/resumes/Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf"
              download
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-brand-primary hover:bg-brand-primary-hover text-white flex items-center gap-1.5 transition-all shadow-sm"
              title="Download verified PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-bg-subtle transition-colors ml-1"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Paper Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-neutral-900/40">
          <div className="max-w-3xl mx-auto bg-white text-neutral-900 rounded-2xl shadow-xl p-6 sm:p-10 font-sans border border-neutral-200 print:m-0 print:p-0 print:border-none print:shadow-none">
            
            {/* Header */}
            <div className="border-b-2 border-neutral-900 pb-5 mb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
                  Suhani Patel
                </h1>
                <p className="text-sm font-bold text-neutral-700 tracking-wide mt-1">
                  React.js Developer & Full-Stack MERN Software Engineer
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-neutral-600 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    Indore, Madhya Pradesh, India
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-neutral-500" />
                    +91 9009212605
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-semibold text-neutral-800">
                    <Mail className="w-3 h-3 text-neutral-500" />
                    shuwanipatel@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-center gap-2 text-xs font-medium text-neutral-700">
                <a 
                  href="https://linkedin.com/in/Suhani-Patel-WebDev" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-blue-600 flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/Suhani-Patel-WebDev</span>
                </a>
                <a 
                  href="https://github.com/SuhaniPatel36" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-neutral-900 flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/SuhaniPatel36</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs text-neutral-700 leading-relaxed text-justify">
                Computer Science Engineering undergraduate and Full-Stack MERN Developer with production internship experience architecting scalable enterprise management systems, high-speed React dashboards, and secure REST APIs. Proven track record in boosting operational workflow efficiency by <strong>85.6%</strong> and accelerating client-side rendering speed by <strong>80%</strong> through memoization, modular component decoupling, and database index tuning. Proficient in React 19, JavaScript (ES6+), Node.js, Express.js, MongoDB, and modern Tailwind CSS.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="text-xs text-neutral-700 space-y-1.5">
                <div>
                  <strong className="text-neutral-900 font-bold">Languages & Core:</strong> JavaScript (ES6+), Core Java, HTML5 Semantic, CSS3 / Modern Flexbox & Grid, SQL
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Frontend Technologies:</strong> React.js (v18 & v19), Context API, Redux Toolkit, Tailwind CSS, React Router, Vite, Framer Motion
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Backend & APIs:</strong> Node.js, Express.js, RESTful API Architecture, JWT Authentication, Role-Based Access Control (RBAC), Axios
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Databases:</strong> MongoDB, Mongoose ODM, MongoDB Atlas Cloud Cluster
                </div>
                <div>
                  <strong className="text-neutral-900 font-bold">Tools & Methodologies:</strong> Git, GitHub, Postman API Testing, Vercel, Render, Clean Architecture, Performance Optimization, Agile/Scrum
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Professional Work Experience
              </h2>

              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                  <div>
                    <span className="font-bold text-neutral-900 text-sm">MERN Stack Developer Intern</span>
                    <span className="text-neutral-600"> — Keen Solution</span>
                  </div>
                  <div className="font-semibold text-neutral-600 italic">
                    Indore, India | Jan 2025 – Present
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 space-y-1 leading-relaxed">
                  <li>
                    Architected modular, reusable UI components using <strong>React.js</strong> and <strong>Tailwind CSS</strong>, reducing render latency by <strong>80%</strong> using React memoization hooks (<code className="text-[11px] bg-neutral-100 px-1 rounded">useMemo</code>, <code className="text-[11px] bg-neutral-100 px-1 rounded">useCallback</code>, <code className="text-[11px] bg-neutral-100 px-1 rounded">React.memo</code>).
                  </li>
                  <li>
                    Engineered and secured 15+ RESTful endpoints utilizing Node.js, Express.js, and JWT-based authentication with role-based access control (RBAC).
                  </li>
                  <li>
                    Automated enterprise management and ERP operational workflows, resulting in an <strong>85.6% measurable efficiency gain</strong> and a 60% reduction in manual data entry.
                  </li>
                  <li>
                    Constructed MongoDB aggregation pipelines and normalized document models, optimizing data retrieval speeds by 45%.
                  </li>
                  <li>
                    Participated in daily Agile standups and sprint planning, collaborating on cross-browser compatibility across 100% of target mobile and desktop devices.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                  <div>
                    <span className="font-bold text-neutral-900 text-sm">Placement Cell Student Coordinator</span>
                    <span className="text-neutral-600"> — Malwa Institute of Science & Technology</span>
                  </div>
                  <div className="font-semibold text-neutral-600 italic">
                    Indore, India | 2023 – 2025
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 space-y-1 leading-relaxed">
                  <li>
                    Collaborated with corporate recruiters and college administration to coordinate campus recruitment drives, achieving an <strong>80% placement rate</strong>.
                  </li>
                  <li>
                    Conducted technical mock interviews, resume screening, and coding guidance in JavaScript and foundational algorithms for 150+ undergraduate peers.
                  </li>
                </ul>
              </div>
            </div>

            {/* Featured Software Projects */}
            <div className="mb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Featured Software Engineering Projects
              </h2>

              <div className="space-y-3">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="font-bold text-neutral-900">BizSuite — Enterprise Resource Planning (ERP) Platform</strong>
                      <span className="text-neutral-600"> | React.js, Node.js, Express, MongoDB, Tailwind</span>
                    </div>
                    <a href="https://github.com/SuhaniPatel36/bizsuite-erp" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-[11px] font-semibold">
                      github.com/SuhaniPatel36/bizsuite-erp
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 mt-1 space-y-0.5 leading-relaxed">
                    <li>Developed an ERP platform to centralize employee records, inventory tracking, and departmental workflows with RBAC security.</li>
                    <li>Built interactive analytics dashboards with real-time state sync, boosting business operational speed by <strong>85.6%</strong>.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="font-bold text-neutral-900">Urban Taal — Dance Academy & Certification Automation System</strong>
                      <span className="text-neutral-600"> | MERN Stack, PDFKit, Context API</span>
                    </div>
                    <a href="https://github.com/SuhaniPatel36/urban-taal-management" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-[11px] font-semibold">
                      github.com/SuhaniPatel36/urban-taal-management
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 mt-1 space-y-0.5 leading-relaxed">
                    <li>Digitized student enrollment, recurring fee billing, and attendance, saving <strong>60%</strong> manual administrative time.</li>
                    <li>Engineered an automated server-side PDF generator producing tamper-proof student certificates and printable salary invoices.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="font-bold text-neutral-900">Full-Stack Scalable E-Commerce Web Application</strong>
                      <span className="text-neutral-600"> | React 19, Node.js, Express, MongoDB, JWT</span>
                    </div>
                    <a href="https://github.com/SuhaniPatel36/mern-ecommerce-platform" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-[11px] font-semibold">
                      github.com/SuhaniPatel36/mern-ecommerce-platform
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 mt-1 space-y-0.5 leading-relaxed">
                    <li>Built a full-featured online store with protected routes, JWT tokens in HTTP-only cookies, and instant cart synchronization.</li>
                    <li>Achieved an <strong>80% rendering boost</strong> by decoupling component state and applying memoized hooks across catalog lists.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <strong className="font-bold text-neutral-900">NeuroLearn — AI-Assisted Adaptive Learning Platform</strong>
                      <span className="text-neutral-600"> | React, Node.js, Python Flask, Chart.js</span>
                    </div>
                    <a href="https://github.com/SuhaniPatel36/neurolearn-ai-platform" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-[11px] font-semibold">
                      github.com/SuhaniPatel36/neurolearn-ai-platform
                    </a>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs text-neutral-700 mt-1 space-y-0.5 leading-relaxed">
                    <li>Engineered a hybrid architecture interfacing an Express REST API with a Python Flask machine learning microservice for student risk scoring.</li>
                    <li>Constructed role-based dashboards for students and evaluators with visual assessment progress charts.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
                Education
              </h2>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <strong className="font-bold text-neutral-900">Bachelor of Technology (B.Tech) in Computer Science & Engineering</strong>
                    <div className="text-neutral-600">Malwa Institute of Science & Technology, Indore, Madhya Pradesh</div>
                  </div>
                  <div className="text-right sm:text-right mt-0.5 sm:mt-0">
                    <span className="font-semibold text-neutral-700">2022 – 2026</span>
                    <span className="block text-[11px] font-bold text-emerald-700">Final Year | CGPA: 7.9+</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <strong className="font-bold text-neutral-900">Diploma in Computer Applications (DCA)</strong>
                    <div className="text-neutral-600">Makhanlal Chaturvedi National University, Indore, Madhya Pradesh</div>
                  </div>
                  <div className="text-right sm:text-right mt-0.5 sm:mt-0">
                    <span className="font-semibold text-neutral-700">2022 – 2023</span>
                    <span className="block text-[11px] font-bold text-emerald-700">Distinction</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
