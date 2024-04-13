const nodemailer = require('nodemailer');
const crypto = require('crypto');

class EmailService {
  constructor() {
    // Configuration du transporteur SMTP avec Gmail
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_KEY,
      },
    });
  }

  welcomingEmail(UserName) {
    const MailText = `Dear ${UserName},<br/>
    
    Welcome to RYMZ! We're thrilled to have you join our community of real estate enthusiasts and home seekers.
    
    At RMYZ, we understand that finding the perfect property can be an exciting journey, and we're here to support you every step of the way. Whether you're searching for your dream home, exploring investment opportunities, or simply curious about the real estate market, our platform offers a wealth of resources to help you achieve your goals.
    
    Start your journey with RYMZ today by browsing our listings, saving your favorite properties, and connecting with real estate agents in your area.
    
    Thank you for choosing US as your trusted resource for all things real estate. We look forward to helping you find your perfect property!
    
    Warm regards,<br/>`;

    return MailText;
  }

  resetPasswordEmail(id, token) {
    const MailText = `Password link  to reset your password : <br/><br/>http://localhost:3500/users/auth/reset-password/${id}/${token}`;
    return MailText;
  }

  // Fonction pour envoyer un email de vérification
  sendVerificationEmail(userEmail, verificationLink) {
    const mailOptions = {
      from: 'rymz.og@gmail.com',
      to: userEmail,
      subject: 'Veuillez vérifier votre adresse email',
      html: `Cliquez sur le lien suivant pour vérifier votre adresse email : <a href="${verificationLink}">${verificationLink}</a>`,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erreur lors de l\'envoi de l\'email :', error);
      } else {
        console.log('Email envoyé :', info.response);
      }
    });
  }

  // Fonction pour générer un jeton de vérification
  generateVerificationToken() {
    return crypto.randomBytes(20).toString('hex'); // Génère un jeton aléatoire de 40 caractères hexadécimaux
  }
}


module.exports = EmailService;
