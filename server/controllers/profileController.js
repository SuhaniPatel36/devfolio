import mongoose from 'mongoose';
import Profile from '../models/Profile.js';
import { getFallbackData } from '../utils/dataLoader.js';

export const getProfile = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      try {
        const profile = await Profile.findOne({});
        if (profile) {
          return res.status(200).json({
            success: true,
            source: 'database',
            data: profile
          });
        }
      } catch (dbErr) {
        // Fall through
      }
    }

    const fallback = getFallbackData();
    return res.status(200).json({
      success: true,
      source: 'fallback',
      data: fallback.profile || {}
    });
  } catch (error) {
    next(error);
  }
};
