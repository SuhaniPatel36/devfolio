import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, '../seed/resumeData.json');

export const getFallbackData = () => {
  try {
    const raw = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[DataLoader] Error loading resumeData.json:', err.message);
    return { profile: {}, projects: [], skills: [], experience: [], education: [] };
  }
};
