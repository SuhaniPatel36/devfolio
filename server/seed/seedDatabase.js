import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Profile from '../models/Profile.js';
import { getFallbackData } from '../utils/dataLoader.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    const isConnected = await connectDB();
    if (!isConnected) {
      console.log('[Seeder] Aborting DB seed since MongoDB is not reachable. Resilient file data will be used.');
      process.exit(0);
    }
    const data = getFallbackData();
    console.log('[Seeder] Clearing existing collections...');
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Profile.deleteMany({});

    await Profile.create(data.profile);
    await Project.insertMany(data.projects);
    await Skill.insertMany(data.skills);
    await Experience.insertMany(data.experience);

    console.log('✅ [Seeder] Database seeding completed successfully for Suhani Patel!');
    process.exit(0);
  } catch (error) {
    console.error('❌ [Seeder] Seeding failed with error:', error);
    process.exit(1);
  }
};

seedDatabase();
