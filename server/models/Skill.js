import mongoose from 'mongoose';

const skillItemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  level: { type: String, default: 'Proficient' },
  badge: { type: String, default: 'Core' },
  description: { type: String, default: '' }
}, { _id: false });

const skillCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true, trim: true },
    items: [skillItemSchema],
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('Skill', skillCategorySchema);
