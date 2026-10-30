import express from 'express';
import { submitContactMessage, getContactMessages } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';
const router = express.Router();
router.post('/', contactLimiter, submitContactMessage);
router.get('/', getContactMessages);
export default router;
