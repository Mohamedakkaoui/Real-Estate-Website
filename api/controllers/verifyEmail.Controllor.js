const UserSchema = require('../models/schemas/user.Model');

exports.verifyemail = async (req, res) => {
    const { email, token } = req.query;

    try {
        const user = await UserSchema.findOne({ Email: email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.verified) {
            return res.status(400).json({ message: 'Email already verified' });
        }

        // Vérifiez si le champ verificationToken existe dans le schéma utilisateur
        if (!user.verificationToken) {
            return res.status(400).json({ message: 'Verification token not found' });
        }

        // Vérifiez si le jeton de vérification correspond à celui stocké dans la base de données
        if (user.verificationToken !== token) {
            return res.status(400).json({ message: 'Invalid verification token' });
        }

        // Mettez à jour le champ verified dans le schéma utilisateur
        user.verified = true;
        await user.updateOne({$unset:{'verificationToken':''}})
        await user.save();

        return res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

