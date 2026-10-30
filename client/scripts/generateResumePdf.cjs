const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function generateResume(outputPath, options = {}) {
  // A4 paper: 595.28 x 841.89 points
  // Margins: 36 points (0.5 inch)
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 32, bottom: 32, left: 36, right: 36 },
    bufferPages: true
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const primaryColor = '#111827';
  const accentColor = '#1d4ed8';
  const grayColor = '#4b5563';
  const lightGray = '#9ca3af';

  // --- HEADER ---
  doc.font('Helvetica-Bold').fontSize(20).fillColor(primaryColor).text('SUHANI PATEL', { align: 'center', characterSpacing: 1 });
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(10).fillColor(accentColor).text('React.js Developer & Full-Stack MERN Software Engineer', { align: 'center' });
  doc.moveDown(0.2);

  doc.font('Helvetica').fontSize(8.5).fillColor(grayColor).text(
    'Indore, Madhya Pradesh, India   •   +91 9009212605   •   shuwanipatel@gmail.com',
    { align: 'center' }
  );
  doc.moveDown(0.15);
  doc.font('Helvetica').fontSize(8.5).fillColor(accentColor).text(
    'LinkedIn: linkedin.com/in/Suhani-Patel-WebDev   •   GitHub: github.com/SuhaniPatel36',
    { align: 'center' }
  );

  doc.moveDown(0.5);

  function drawSectionDivider(title) {
    doc.moveDown(0.4);
    const y = doc.y;
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text(title.toUpperCase(), 36, y);
    doc.strokeColor('#d1d5db').lineWidth(0.75).moveTo(36, doc.y + 2).lineTo(595.28 - 36, doc.y + 2).stroke();
    doc.moveDown(0.35);
  }

  // --- PROFESSIONAL SUMMARY ---
  drawSectionDivider('Professional Summary');
  doc.font('Helvetica').fontSize(8.5).fillColor(primaryColor).text(
    'Computer Science Engineering undergraduate and Full-Stack MERN Developer with production internship experience architecting enterprise management systems, high-speed React dashboards, and secure REST APIs. Proven track record in boosting operational workflow efficiency by 85.6% and accelerating client-side rendering speed by 80% through memoization, modular component decoupling, and database index tuning. Proficient in React 19, JavaScript (ES6+), Node.js, Express.js, MongoDB, and Tailwind CSS.',
    { align: 'justify', lineGap: 1.5 }
  );

  // --- TECHNICAL SKILLS ---
  drawSectionDivider('Technical Skills');
  const skills = [
    { label: 'Languages & Core:', val: 'JavaScript (ES6+), Core Java, HTML5 Semantic, CSS3 / Modern Flexbox & Grid, SQL' },
    { label: 'Frontend Technologies:', val: 'React.js (v18 & v19), Context API, Redux Toolkit, Tailwind CSS, React Router, Vite, Framer Motion' },
    { label: 'Backend & APIs:', val: 'Node.js, Express.js, RESTful Architecture, JWT Authentication, Role-Based Access Control (RBAC), Axios' },
    { label: 'Databases:', val: 'MongoDB, Mongoose ODM, MongoDB Atlas Cloud Clusters' },
    { label: 'Tools & Methodologies:', val: 'Git, GitHub, Postman API Testing, Vercel, Render, Clean Architecture, Performance Optimization, Agile/Scrum' }
  ];

  skills.forEach(s => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text(s.label + ' ', { continued: true });
    doc.font('Helvetica').fontSize(8.5).fillColor(grayColor).text(s.val, { lineGap: 1 });
  });

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionDivider('Professional Work Experience');

  // Experience 1
  const expY1 = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('MERN Stack Developer Intern', 36, expY1, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(grayColor).text(' — Keen Solution', { continued: true });
  doc.font('Helvetica-Bold').fontSize(8).fillColor(grayColor).text('Indore, India  |  Jan 2025 – Present', 36, expY1, { align: 'right' });
  doc.moveDown(0.2);

  const exp1Bullets = [
    'Architected modular, reusable UI components using React.js and Tailwind CSS, reducing client-side render latency by 80% using memoization hooks (useMemo, useCallback, React.memo).',
    'Engineered and secured 15+ RESTful endpoints utilizing Node.js, Express.js, and JWT-based authentication with role-based access control (RBAC).',
    'Automated enterprise management and ERP operational workflows, resulting in an 85.6% measurable efficiency gain and a 60% reduction in manual data entry.',
    'Constructed MongoDB aggregation pipelines and normalized document models, optimizing data retrieval speeds by 45%.',
    'Participated in daily Agile standups and sprint planning, collaborating on cross-browser compatibility across 100% of target mobile and desktop devices.'
  ];

  exp1Bullets.forEach(bullet => {
    doc.font('Helvetica').fontSize(8).fillColor(primaryColor).text('•  ', 44, doc.y, { continued: true });
    doc.font('Helvetica').fontSize(8).fillColor(grayColor).text(bullet, { lineGap: 1.2, align: 'justify' });
  });

  doc.moveDown(0.3);

  // Experience 2
  const expY2 = doc.y;
  doc.font('Helvetica-Bold').fontSize(9).fillColor(primaryColor).text('Placement Cell Student Coordinator', 36, expY2, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(grayColor).text(' — Malwa Institute of Science & Technology', { continued: true });
  doc.font('Helvetica-Bold').fontSize(8).fillColor(grayColor).text('Indore, India  |  2023 – 2025', 36, expY2, { align: 'right' });
  doc.moveDown(0.2);

  const exp2Bullets = [
    'Collaborated with corporate recruiters and college administration to coordinate campus recruitment drives, achieving an 80% placement rate.',
    'Conducted technical mock interviews, resume screening, and coding guidance in JavaScript and foundational algorithms for 150+ undergraduate peers.'
  ];

  exp2Bullets.forEach(bullet => {
    doc.font('Helvetica').fontSize(8).fillColor(primaryColor).text('•  ', 44, doc.y, { continued: true });
    doc.font('Helvetica').fontSize(8).fillColor(grayColor).text(bullet, { lineGap: 1.2, align: 'justify' });
  });

  // --- FEATURED SOFTWARE PROJECTS ---
  drawSectionDivider('Featured Software Engineering Projects');

  const projects = [
    {
      title: 'BizSuite — Enterprise Resource Planning (ERP) Platform',
      tech: 'React.js, Node.js, Express, MongoDB, Tailwind CSS',
      link: 'github.com/SuhaniPatel36/bizsuite-erp',
      bullets: [
        'Built an enterprise-grade ERP web platform centralizing inventory tracking, employee management, and department workflows with RBAC security.',
        'Designed real-time graphical analytics dashboards with dynamic state sync, boosting business operational speed by 85.6%.'
      ]
    },
    {
      title: 'Urban Taal — Dance Academy & Certification Automation System',
      tech: 'MERN Stack, PDFKit, Context API',
      link: 'github.com/SuhaniPatel36/urban-taal-management',
      bullets: [
        'Digitized student enrollment, recurring fee billing, and attendance, saving 60% manual administrative time.',
        'Engineered an automated server-side PDF generator producing tamper-proof student certificates and printable salary invoices.'
      ]
    },
    {
      title: 'Full-Stack Scalable E-Commerce Web Application',
      tech: 'React 19, Node.js, Express, MongoDB, JWT',
      link: 'github.com/SuhaniPatel36/mern-ecommerce-platform',
      bullets: [
        'Developed a production-grade online store with protected routes, JWT tokens in HTTP-only cookies, and instant cart synchronization.',
        'Boosted frontend responsiveness by 80% utilizing memoized component trees and optimistic cart updates.'
      ]
    },
    {
      title: 'NeuroLearn — AI-Assisted Adaptive Learning Platform',
      tech: 'React.js, Node.js, Express.js, Python Flask Microservice',
      link: 'github.com/SuhaniPatel36/neurolearn-ai-platform',
      bullets: [
        'Engineered a hybrid architecture interfacing an Express REST API with a Python Flask machine learning microservice for student risk scoring.',
        'Delivered instructor and student role-based dashboards featuring dynamic chart visualizations and automated assessment workflows.'
      ]
    }
  ];

  projects.forEach(p => {
    const projY = doc.y;
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text(p.title, 36, projY, { continued: true });
    doc.font('Helvetica').fontSize(8).fillColor(grayColor).text(' | ' + p.tech, { continued: true });
    doc.font('Helvetica').fontSize(7.5).fillColor(accentColor).text(p.link, 36, projY, { align: 'right' });
    doc.moveDown(0.15);

    p.bullets.forEach(b => {
      doc.font('Helvetica').fontSize(7.8).fillColor(primaryColor).text('•  ', 44, doc.y, { continued: true });
      doc.font('Helvetica').fontSize(7.8).fillColor(grayColor).text(b, { lineGap: 1, align: 'justify' });
    });
    doc.moveDown(0.2);
  });

  // --- EDUCATION ---
  drawSectionDivider('Education');

  const edu1Y = doc.y;
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('Bachelor of Technology (B.Tech) in Computer Science & Engineering', 36, edu1Y);
  doc.font('Helvetica').fontSize(8).fillColor(grayColor).text('Malwa Institute of Science & Technology, Indore, Madhya Pradesh', 36, doc.y);
  doc.font('Helvetica-Bold').fontSize(8).fillColor(grayColor).text('2022 – 2026  |  Final Year  |  CGPA: 7.9+', 36, edu1Y, { align: 'right' });
  doc.moveDown(0.3);

  const edu2Y = doc.y;
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(primaryColor).text('Diploma in Computer Applications (DCA)', 36, edu2Y);
  doc.font('Helvetica').fontSize(8).fillColor(grayColor).text('Makhanlal Chaturvedi National University, Indore, Madhya Pradesh', 36, doc.y);
  doc.font('Helvetica-Bold').fontSize(8).fillColor(grayColor).text('2022 – 2023  |  Graduated with Distinction', 36, edu2Y, { align: 'right' });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      console.log('Successfully generated resume at:', outputPath);
      resolve();
    });
    stream.on('error', reject);
  });
}

async function run() {
  const dir = path.join(__dirname, '..', 'public', 'resumes');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const file1 = path.join(dir, 'Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf');
  const file2 = path.join(dir, 'Suhani_Patel_Web_Dev_Resume.pdf');

  await generateResume(file1);
  await generateResume(file2);
  console.log('All PDF resumes generated successfully!');
}

run().catch(console.error);
