import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, default: 'Indore, India' },
    period: { type: String, required: true },
    type: { type: String, enum: ['Internship', 'Full-Time', 'Leadership', 'Contract'], default: 'Internship' },
    description: { type: String, required: true },
    achievements: [{ type: String }],
    technologies: [{ type: String }],
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('Experience', experienceSchema);
