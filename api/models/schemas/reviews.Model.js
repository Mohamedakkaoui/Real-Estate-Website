const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new mongoose.Schema({
    Object_id : {
        type : String,
    },
    property_id: {
        type: Schema.Types.ObjectId,
        ref: 'Property', // Assuming you have a Property model
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Review', ReviewSchema)
