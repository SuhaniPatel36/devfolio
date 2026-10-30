import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { getFallbackData } from './utils/dataLoader.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(helmet({ crossOriginResourcePolicy: false }));

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: Not allowed by CORS'), false);
  },
  credentials: true
}));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(generalLimiter);

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    candidate: 'Suhani Patel - React.js / MERN Stack Developer'
  });
});

app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/skills', skillRoutes);
app.use('/api/v1/experience', experienceRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/profile', profileRoutes);

app.get('/api/v1/education', (req, res) => {
  const fallback = getFallbackData();
  res.status(200).json({
    success: true,
    count: (fallback.education || []).length,
    source: 'fallback',
    data: fallback.education || []
  });
});

app.get('/', (req, res) => {
  res.json({
    message: "Suhani Patel Developer Portfolio API (MERN Stack)",
    version: "1.0.0",
    endpoints: {
      health: "/api/v1/health",
      profile: "/api/v1/profile",
      projects: "/api/v1/projects",
      skills: "/api/v1/skills",
      experience: "/api/v1/experience",
      education: "/api/v1/education",
      contact: "/api/v1/contact"
    }
  });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Suhani Patel Portfolio Server running on port ${PORT}`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api/v1`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/v1/health`);
  console.log(`=======================================================`);
});

export default app;
