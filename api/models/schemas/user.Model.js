const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    PhoneNumber: {
        required: true,
        type: Number
    },
    Role: {
        type: String,
        default: 'guest'
    },
    ProfilePic: {
        type: Object
    },
    Listings: [String],
    Bookings: [String],
    isActive: {
        type: Boolean,
        default: true
    },
    OwnerId: {
        type: String,
        unique: true
    },
    verified: {
        type: Boolean,
        default: false // Par défaut, l'email n'est pas vérifié
    },
    verificationToken: {
        type: String // Specify the type as String to store the verification token
    },
    watchList: [{
        type: Schema.Types.ObjectId,
        //ref: 'Listing'
    }]
    
    })

    module.exports = mongoose.model('Users', UserSchema)