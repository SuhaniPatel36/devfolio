import mongoose from 'mongoose';
import Experience from '../models/Experience.js';
import { getFallbackData } from '../utils/dataLoader.js';

export const getExperience = async (req, res, next) => {
  try {
    const fallback = getFallbackData();

    if (mongoose.connection.readyState === 1) {
      try {
        const experiences = await Experience.find({}).sort({ order: 1 });
        if (experiences && experiences.length > 0) {
          return res.status(200).json({
            success: true,
            count: experiences.length,
            source: 'database',
            data: {
              experience: experiences,
              education: fallback.education || []
            }
          });
        }
      } catch (dbErr) {
        // Fall through
      }
    }

    return res.status(200).json({
      success: true,
      source: 'fallback',
      data: {
        experience: fallback.experience || [],
        education: fallback.education || []
      }
    });
  } catch (error) {
    next(error);
  }
};
