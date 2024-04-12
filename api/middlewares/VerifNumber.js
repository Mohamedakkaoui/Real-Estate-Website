const Nexmo = require('nexmo');
const UserSchema = require('../models/schemas/user.Model');
const nexmo = new Nexmo({
  apiKey: '1c8fb771',
  apiSecret: 'VTjiswQEr4TocgyB'
});

exports.sendVerificationCode = async (PhoneNumber) => {
    try {
      const verificationCode = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit code
      const from = 'RYMZ';
      const text = `Your verification code for RYMZ is: ${verificationCode}`;
      await nexmo.message.sendSms(from, PhoneNumber, text);
      return verificationCode; // Return the generated verification code
    } catch (err) {
      console.error('Error sending verification code:', err);
      throw new Error('Failed to send verification code');
    }
  };  


exports.verifyVerificationCode = (req, res) => {
    const { verificationCode } = req.body;
    const storedVerificationCode = res.locals.verificationCode; // Retrieve stored verification code from previous middleware
  
    if (verificationCode === storedVerificationCode) {
      return res.status(200).json({ success: true, message: 'Verification code is correct' });
    } else {
      return res.status(400).json({ success: false, message: 'Incorrect verification code' });
    }
  };