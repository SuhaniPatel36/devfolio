import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    subtitle: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ['Full-Stack MERN', 'Frontend', 'Enterprise & ERP', 'AI & Machine Learning'],
      default: 'Full-Stack MERN'
    },
    keyHighlights: [{ type: String }],
    metrics: {
      efficiencyBoost: { type: String, default: '' },
      performance: { type: String, default: '' }
    },
    technologies: [{ type: String, required: true }],
    liveUrl: { type: String, default: '#' },
    githubUrl: { type: String, default: 'https://github.com/SuhaniPatel36' },
    imageUrl: { type: String, default: '/images/projects/bizsuite.svg' },
    featured: { type: Boolean, default: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
