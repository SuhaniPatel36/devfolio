import validator from 'validator';

export const validateContactInput = (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ success: false, message: 'Your name is required.' });
  }
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return res.status(400).json({
      success: false,
      message: 'Please include a message with at least 5 characters.'
    });
  }
  next();
};
