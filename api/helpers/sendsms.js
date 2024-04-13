
const Nexmo = require('nexmo');
const dotenv = require('dotenv');

dotenv.config();

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET 
});


// function to send a welcome SMS message
const sendWelcomeSMS = async (phoneNumber) => {
  const from = 'RYMZ';
  const text = 'Welcome to RYMZ! 🎉 Thank you for registering with us. You\'re now part of our community for easy and convenient bookings.';
  
  try {
    await nexmo.message.sendSms(from, phoneNumber, text);
    return true;
  } catch (error) {
    throw new Error('Failed to send welcome SMS');
  }
};

module.exports = { sendWelcomeSMS };
