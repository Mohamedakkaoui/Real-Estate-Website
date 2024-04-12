// const twilio = require('twilio');

// // Twilio credentials
// const accountSid = 'ACd6ded2e9bbb723f2608b22081226cfae';
// const authToken = '56e4b98fe1cc532579a0e707cfe23887';
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

const nexmo = new Nexmo({
  apiKey: '1c8fb771',
  apiSecret: 'VTjiswQEr4TocgyB'
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
