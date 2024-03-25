const nodemailer = require ('nodemailer')
require('dotenv').config()

exports.mailsender = (email, Name) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_KEY,
    },
  })
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"RYMZ👻" <akkaouimohamed00@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Welcome to RYMZ", // Subject line
      text: EmailFormat(Name), // plain text body
      html: "<b>Thanks for signing in</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error)
}

const EmailFormat = (UserName) => {
const MailText = `Dear ${UserName},

Welcome to RYMZ! We're thrilled to have you join our community of real estate enthusiasts and home seekers.

At RMYZ, we understand that finding the perfect property can be an exciting journey, and we're here to support you every step of the way. Whether you're searching for your dream home, exploring investment opportunities, or simply curious about the real estate market, our platform offers a wealth of resources to help you achieve your goals.

Start your journey with RYMZ today by browsing our listings, saving your favorite properties, and connecting with real estate agents in your area.

Thank you for choosing US as your trusted resource for all things real estate. We look forward to helping you find your perfect property!

Warm regards,

RYMZ`
 return MailText
}