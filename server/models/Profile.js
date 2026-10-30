import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    secondaryTitle: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    location: { type: String },
    availability: { type: String },
    linkedIn: { type: String },
    github: { type: String },
    summary: { type: String, required: true },
    highlights: [{ type: String }],
    metrics: {
      operationalEfficiency: { type: String },
      speedAccuracyBoost: { type: String },
      adminReduction: { type: String },
      memoizationBoost: { type: String }
    }
  },
  { timestamps: true }
);

export default mongoose.model('Profile', profileSchema);
