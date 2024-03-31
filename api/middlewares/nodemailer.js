const nodemailer = require ('nodemailer')
require('dotenv').config()
const EmailService = require('../Utils/Emails')

const emailService = new EmailService()

exports.mailsender = (email, Function, ...args) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_KEY,
    },
  })
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    const emailText = emailService[Function](...args)
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"RYMZ👻"', // sender address
      to: email, // list of receivers
      subject: "Welcome to RYMZ", // Subject line
      text: emailText, // plain text body
      html: emailText, // html body
    });
    console.log("Message sent: %s", info.messageId);
  }
  
  main().catch(console.error)
}

