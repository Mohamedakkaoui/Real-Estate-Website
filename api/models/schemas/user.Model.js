const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema ({
  FirstName: {
    type : String,
    required : true
  },
  LastName : {
    type : String,
    required : true
  },
  Username : {
    type : String,
    required : true
  },
  Email : {
    type : String,
    required : true,
    unique : true
  },
  Password : {
    type : String,
    required : true,
    unique : true
  },
  PhoneNumber : {
    required : true,
    type : Number,
    min : 500000000,
    max : 800000000
  },
  Role : {
     type : String,
     default : 'guest'
  },
  ProfilePic : {
    type : String
  },
  Listings : [String],
  Bookings : [String],
  isActive : {
    type : Boolean,
    default : true
  }
})

module.exports = mongoose.model('Users', UserSchema)