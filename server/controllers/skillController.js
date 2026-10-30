import mongoose from 'mongoose';
import Skill from '../models/Skill.js';
import { getFallbackData } from '../utils/dataLoader.js';

export const getSkills = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      try {
        const skills = await Skill.find({}).sort({ order: 1 });
        if (skills && skills.length > 0) {
          return res.status(200).json({
            success: true,
            count: skills.length,
            source: 'database',
            data: skills
          });
        }
      } catch (dbErr) {
        // Fall through
      }
    }

    const fallback = getFallbackData();
    return res.status(200).json({
      success: true,
      count: (fallback.skills || []).length,
      source: 'fallback',
      data: fallback.skills || []
    });
  } catch (error) {
    next(error);
  }
};
