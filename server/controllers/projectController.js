import mongoose from 'mongoose';
import Project from '../models/Project.js';
import { getFallbackData } from '../utils/dataLoader.js';

export const getProjects = async (req, res, next) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category && category !== 'All') {
      query.category = category;
    }

    if (mongoose.connection.readyState === 1) {
      try {
        const projects = await Project.find(query).sort({ order: 1 });
        if (projects && projects.length > 0) {
          return res.status(200).json({
            success: true,
            count: projects.length,
            source: 'database',
            data: projects
          });
        }
      } catch (dbErr) {
        // Fall through
      }
    }

    const fallback = getFallbackData();
    let fallbackProjects = fallback.projects || [];
    if (category && category !== 'All') {
      fallbackProjects = fallbackProjects.filter(p => p.category === category);
    }
    return res.status(200).json({
      success: true,
      count: fallbackProjects.length,
      source: 'fallback',
      data: fallbackProjects
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    if (mongoose.connection.readyState === 1) {
      try {
        const project = await Project.findOne({ slug });
        if (project) {
          return res.status(200).json({ success: true, source: 'database', data: project });
        }
      } catch (dbErr) {
        // ignore and fallback
      }
    }

    const fallback = getFallbackData();
    const fallbackProject = (fallback.projects || []).find(p => p.slug === slug);
    if (!fallbackProject) {
      return res.status(404).json({ success: false, message: `Project not found with slug ${slug}` });
    }

    return res.status(200).json({ success: true, source: 'fallback', data: fallbackProject });
  } catch (error) {
    next(error);
  }
};
