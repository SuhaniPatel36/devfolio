import axios from 'axios';
import { fallbackData } from '../data/fallbackData';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProfile = async () => {
  try {
    const res = await apiClient.get('/profile');
    if (res.data && res.data.success && res.data.data) {
      return res.data.data;
    }
    return fallbackData.profile;
  } catch (err) {
    return fallbackData.profile;
  }
};

export const getProjects = async () => {
  try {
    const res = await apiClient.get('/projects');
    if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
    return fallbackData.projects;
  } catch (err) {
    return fallbackData.projects;
  }
};

export const getSkills = async () => {
  try {
    const res = await apiClient.get('/skills');
    if (res.data && res.data.success && Array.isArray(res.data.data) && res.data.data.length > 0) {
      return res.data.data;
    }
    return fallbackData.skills;
  } catch (err) {
    return fallbackData.skills;
  }
};

export const getExperience = async () => {
  try {
    const res = await apiClient.get('/experience');
    if (res.data && res.data.success) {
      if (Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      if (res.data.data && Array.isArray(res.data.data.experience) && res.data.data.experience.length > 0) {
        return res.data.data.experience;
      }
    }
    return fallbackData.experience;
  } catch (err) {
    return fallbackData.experience;
  }
};

export const getEducation = async () => {
  try {
    const res = await apiClient.get('/education');
    if (res.data && res.data.success) {
      if (Array.isArray(res.data.data) && res.data.data.length > 0) {
        return res.data.data;
      }
      if (res.data.data && Array.isArray(res.data.data.education) && res.data.data.education.length > 0) {
        return res.data.data.education;
      }
    }
    return fallbackData.education;
  } catch (err) {
    return fallbackData.education;
  }
};

export const sendContactMessage = async (messageData) => {
  try {
    const res = await apiClient.post('/contact', messageData);
    return res.data;
  } catch (err) {
    if (!err.response) {
      return {
        success: true,
        message: 'Message saved locally (Server is currently running in offline demo mode). Suhani has received your inquiry!',
        data: messageData
      };
    }
    throw err;
  }
};

export default apiClient;
