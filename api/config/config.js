require('dotenv').config()

module.exports = {
    server: {
        // Configuration for the server
        PORT: process.env.PORT || 5000,
    },
    database: {
        // Configuration for the database
        url: process.env.MONGO_URL, // URI for connecting to your MongoDB database
        options: {
            timestamps: true, // Enable automatic timestamps (createdAt and updatedAt)
            versionKey: false, // Disable version key (e.g., __v)
            useNewUrlParser: true, // Use the new URL parser for MongoDB
        },
        color: {
            // Define color codes for console output
            green: "\x1b[32m", // Green color
            red: "\x1b[31m", // Red color
        }
    }
}