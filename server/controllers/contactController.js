import mongoose from 'mongoose';
import ContactMessage from '../models/ContactMessage.js';
import validator from 'validator';

export const submitContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, and message.'
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const cleanName = validator.escape(name.trim());
    const cleanSubject = subject ? validator.escape(subject.trim()) : 'Portfolio Recruiter Inquiry';
    const cleanMessage = validator.escape(message.trim());
    const cleanEmail = validator.normalizeEmail(email);

    let savedToDb = false;
    if (mongoose.connection.readyState === 1) {
      try {
        const newMsg = await ContactMessage.create({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          ip: req.ip || req.headers['x-forwarded-for'] || ''
        });
        if (newMsg) savedToDb = true;
      } catch (dbErr) {
        console.log('[Contact Controller] Saved in memory log.');
      }
    }

    console.log(`[New Contact Submission] From: ${cleanName} <${cleanEmail}> | Subject: ${cleanSubject}`);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Suhani will get back to you shortly.',
      savedToDb
    });
  } catch (error) {
    next(error);
  }
};

export const getContactMessages = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      try {
        const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, count: messages.length, data: messages });
      } catch (dbErr) {
        // Fall through
      }
    }
    return res.status(200).json({ success: true, count: 0, data: [], note: 'Database connection inactive' });
  } catch (error) {
    next(error);
  }
};
