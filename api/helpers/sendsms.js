// const twilio = require('twilio');

// // Twilio credentials
// const accountSid = TWILIO_ACCOUNT_SID;
// const authToken = TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = '+12565408372'; 
// const phoneNumber = '+212627618729'

// const client = twilio(accountSid, authToken);

// // Function to send SMS notification
// exports.sendSMSNotification = async (body) => {
//     let msgOpt = {
//         from: twilioPhoneNumber,
//         to: phoneNumber,
//         body : 'Hello from RYMZ'
//     }
//   try {
//     const message = await client.messages.create(msgOpt);
//     console.log(message, 'SMS notification sent successfully')
   
//   } catch (error) {
//     console.error('Error sending SMS notification:', error);
//   }
// }


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
