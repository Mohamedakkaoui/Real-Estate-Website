
const bcrypt = require("bcrypt");

class BcryptHash {
    async HashPassword(password, salt = 10) {
        try {
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        } catch (err) {
            throw error;
        }
    }

    async VerifyPassword(password, hashedPassword) {
        try {
            const isMatch = await bcrypt.compare(password, hashedPassword);
            return isMatch;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new BcryptHash();
