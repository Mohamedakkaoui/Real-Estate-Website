const nodemailer = require("nodemailer");
const crypto = require("crypto");

class EmailService {
  constructor() {
    // Configuration du transporteur SMTP avec Gmail
    this.transporter = nodemailer.createTransport({
      service: "gmail",
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
    const resetPasswordMail = `http://localhost:5173/users/auth/password-reset?id=${id}&token=${token}`;
    const MailText = `Password link  to reset your password : <br/><br/> <a href="${resetPasswordMail}">${resetPasswordMail}</a>`;
    return MailText;
  }

  // Fonction pour envoyer un email de vérification
  sendVerificationEmail(userEmail, verificationLink) {
    const mailOptions = {
      from: "rymz.og@gmail.com",
      to: userEmail,
      subject: "Veuillez vérifier votre adresse email",
      html: `Cliquez sur le lien suivant pour vérifier votre adresse email : <a href="${verificationLink}">${verificationLink}</a>`,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Erreur lors de l'envoi de l'email :", error);
      } else {
        console.log("Email envoyé :", info.response);
      }
    });
  }

  // Fonction pour générer un jeton de vérification
  generateVerificationToken() {
    return crypto.randomBytes(20).toString("hex"); // Génère un jeton aléatoire de 40 caractères hexadécimaux
  }

  //funciton to send the reservation email
  ConfirmationForReserve(
    PropertyName,
    Location,
    StartDate,
    EndDate,
    TotalPrice,
    ReservationNumber,
    Address,
    Username,
    UserEmail,
    PhoneNumber
  ) {
    const MailText = ` <p>Dear ${Username},</p>

        <p>Thank you for reserving <strong>${PropertyName}</strong> with us! We are excited to confirm your reservation and provide you with the details of your booking.</p>

        <h3>Reservation Details:</h3>
        <ul>
            <li><strong>Property Name:</strong> ${PropertyName}</li>
            <li><strong>Location:</strong> ${Location}</li>
            <li><strong>Reservation Dates:</strong> ${StartDate} to ${EndDate}</li>
            <li><strong>Total Price:</strong> ${TotalPrice} MAD</li>
            <li><strong>Reservation Number:</strong> ${ReservationNumber}</li>
            <li><strong>Address:</strong> ${Address}</li>
        </ul>

        <h3>Guest Information:</h3>
        <ul>
            <li><strong>Email:</strong> ${UserEmail}</li>
            <li><strong>Phone Number:</strong> ${PhoneNumber || 'N/A'}</li>
        </ul>

        <p>We have included all the details mentioned above. Please review the information and let us know if there are any discrepancies or if you have any questions.</p>

        <p>We look forward to hosting you and ensuring you have a comfortable and enjoyable stay at <strong>${PropertyName}</strong>. If you need any assistance or further information, please feel free to contact us.</p>

        <p>Thank you for choosing our services!</p>

        <p>Best regards,<br>
        RYMZ<br>
        <a href="mailto:rymz.og@gmail.com">rymz.og@gmail.com</a><br>
        <a href="http://localhost:5173/Home">http://localhost:5173/Home</a></p>`;
    return MailText;
  }
}

module.exports = EmailService;
