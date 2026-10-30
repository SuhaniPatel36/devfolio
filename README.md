# Suhani Patel — MERN Stack Developer Portfolio

A production-grade, highly optimized developer portfolio designed specifically for **Suhani Patel** (React.js Developer & Full-Stack MERN Engineer).

Architected strictly following the **Model-View-Controller (MVC)** design pattern, featuring variable-driven dynamic theming (with a bespoke **Warm Editorial** light aesthetic), non-clustered vector assets, quantifiable project achievements, and an interactive **Recruiter Fast Track** cheat sheet.

---

## 🌟 Key Highlights & Design Philosophy

- **Anti-AI Craftsmanship**: Purposefully built to avoid generic AI portfolio clichés (such as glowing neon purple/cyan gradients on pure black backgrounds). Utilizes an editorial light color system, crisp typography (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`), and bespoke geometric vector mockups.
- **Dynamic Theming Engine**: Uses CSS variables controlled by React's `ThemeContext` supporting instant switching between:
  1. `Warm Editorial` (Default Light Canvas: Alabaster `#FBFBF9`, Indigo `#1E3A8A`, Ochre `#D97706`)
  2. `Nordic Slate` (Cool Silver Fog: Slate `#F4F6F8`, Teal `#0F766E`, Sunset `#EA580C`)
  3. `Obsidian Pro` (High Contrast: Charcoal `#0E1117`, Electric Azure `#3B82F6`)
- **Recruiter-Centric Conversion**:
  - Live availability status indicator (`🟢 Open to Full-Time / Intern Roles`).
  - Sticky top Recruiter Bar with 1-click **Recruiter Quick View** modal.
  - Direct resume download buttons linking to Suhani's PDF resume.
  - Quantifiable metrics displayed upfront (`+85.6% ERP Efficiency`, `+60% Speed & Accuracy`, `+80% Memoization Speed`).
- **Full MERN Stack & Zero-Downtime Reliability**: Built with React 18, Express.js, Node.js, and MongoDB. If MongoDB is connecting or offline, the API operates in high-availability mode by automatically serving validated resume data.

---

## 📐 Architecture (Strict MVC Pattern)

```
portfolio/
├── client/                                 # VIEW LAYER (React 18 + Vite)
│   ├── public/
│   │   ├── resumes/                        # Suhani's verified resume PDFs
│   │   │   ├── Suhani_Patel_Web_Dev_Resume.pdf
│   │   │   └── Suhani_Patel_React_JS_Developer_Infosys_ATS_Resume.pdf
│   │   └── images/projects/                # Clean vector mockup illustrations
│   └── src/
│       ├── context/ThemeContext.jsx        # Variable Theme Provider
│       ├── services/api.js                 # Axios API Client with fallback handling
│       ├── data/fallbackData.js            # Structured client fallback dataset
│       ├── components/
│       │   ├── layout/                     # Navbar, RecruiterBar, Footer, ThemeToggle
│       │   ├── ui/                         # Button, Badge, Modal, Toast, BrandIcons
│       │   └── sections/                   # Hero, About, Skills, Projects, Experience, Education, Contact
│       └── index.css                       # CSS Custom Properties for theme tokens
│
├── server/                                 # CONTROLLER & MODEL LAYERS (Express + MongoDB)
│   ├── config/db.js                        # MongoDB Connection Handler
│   ├── models/                             # MODEL LAYER (Mongoose Schemas)
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   ├── Experience.js
│   │   ├── ContactMessage.js
│   │   └── Profile.js
│   ├── controllers/                        # CONTROLLER LAYER (Business Logic)
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   ├── experienceController.js
│   │   ├── contactController.js
│   │   └── profileController.js
│   ├── routes/                             # Express REST API Routes
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── contactRoutes.js
│   │   └── profileRoutes.js
│   ├── middleware/                         # Security & Validation
│   │   ├── errorHandler.js
│   │   ├── rateLimiter.js
│   │   └── validator.js
│   ├── seed/                               # Database Seeder & Resume Dataset
│   │   ├── resumeData.json
│   │   └── seedDatabase.js
│   ├── server.js                           # Express entry point
│   └── test-endpoints.js                   # Automated API verification test
│
└── package.json                            # Root command scripts
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js (v18+ recommended, v22 tested)
- npm (v9+ recommended)
- (Optional) MongoDB instance (local or MongoDB Atlas connection string)

### 2. Installation
Dependencies are already installed. If running in a fresh clone:
```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 3. Run the Development Servers

From the root directory:

#### Start Frontend (Vite):
```bash
npm run client
```
> Runs at: **http://localhost:5173**

#### Start Backend API (Express):
```bash
npm run server
```
> Runs at: **http://localhost:5000**
> API Base: **http://localhost:5000/api/v1**

#### Run Automated API Endpoint Tests:
```bash
npm run test:api
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Server status and candidate metadata |
| `GET` | `/api/v1/profile` | Candidate bio, metrics, and direct links |
| `GET` | `/api/v1/projects` | All featured projects (supports `?category=...`) |
| `GET` | `/api/v1/projects/:slug` | Deep-dive single project details |
| `GET` | `/api/v1/skills` | Categorized technical skills matrix |
| `GET` | `/api/v1/experience` | Keen Solution internship & education timeline |
| `POST`| `/api/v1/contact` | Submits recruiter inquiry with validation & rate limiting |

---

## 💼 Featured Projects Showcased

1. **BizSuite — ERP Management Platform**
   - *Tech*: React.js, Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, Tailwind CSS.
   - *Key Impact*: Centralized inventory and employee workflows; role-based access control; **85.6% increase in operational efficiency**.
2. **Urban Taal — Dance Management System**
   - *Tech*: React.js, Express.js, Node.js, MongoDB, PDFKit, Context API, Axios.
   - *Key Impact*: Automated attendance, fees, notifications, and dynamic PDF certificate generation; **reduced manual admin work by 60%**.
3. **Full-Stack E-Commerce Web Application**
   - *Tech*: React.js, Node.js, Express.js, MongoDB, JWT Authentication, Tailwind CSS.
   - *Key Impact*: Protected API routes, persistent cart drawer, advanced memoization boosting rendering speed by **80%**.
4. **NeuroLearn — AI-Assisted Learning Platform**
   - *Tech*: React.js, Vite, Node.js, Express.js, MongoDB, Python Flask microservice.
   - *Key Impact*: Flask AI microservice for real-time risk scoring, adaptive quiz engines, and multi-role dashboards.

---

## 🌐 Production Deployment Guide

### Frontend (Vercel / Netlify)
1. Set Root Directory to `client`.
2. Build Command: `npm run build`.
3. Output Directory: `dist`.
4. Environment Variables:
   - `VITE_API_URL`: Your deployed backend URL (e.g. `https://suhani-portfolio-api.onrender.com/api/v1`).

### Backend (Render / Railway)
1. Set Root Directory to `server`.
2. Build Command: `npm install`.
3. Start Command: `node server.js`.
4. Environment Variables:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `MONGO_URI`: Your MongoDB Atlas connection URI.
   - `CLIENT_URL`: Your deployed frontend domain (e.g. `https://suhanipatel.vercel.app`).

