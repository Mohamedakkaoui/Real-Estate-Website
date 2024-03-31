class EmailService {
  constructor() {}

  welcomingEmail(UserName) {
    const MailText = `Dear ${UserName},<br/>
    
    Welcome to RYMZ! We're thrilled to have you join our community of real estate enthusiasts and home seekers.
    
    At RMYZ, we understand that finding the perfect property can be an exciting journey, and we're here to support you every step of the way. Whether you're searching for your dream home, exploring investment opportunities, or simply curious about the real estate market, our platform offers a wealth of resources to help you achieve your goals.
    
    Start your journey with RYMZ today by browsing our listings, saving your favorite properties, and connecting with real estate agents in your area.
    
    Thank you for choosing US as your trusted resource for all things real estate. We look forward to helping you find your perfect property!
    
    Warm regards,<br/>
    
    RYMZ`

    return MailText
  }

  resetPasswordEmail(id, token) {
    const MailText = `Password link  to reset ur password : <br/><br/>http://localhost:3500/users/auth/reset-password/${id}/${token}`
    return MailText
  }
}

module.exports = EmailService