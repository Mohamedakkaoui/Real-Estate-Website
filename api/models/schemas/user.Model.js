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
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true,
    unique : true
  },
  PhoneNumber : {
    required : true,
    type : Number
  },
  role : {
     type : String,
     default : 'guest'
  },
  ProfilePic : {
    type : String
  },
  listings : [],
  bookings : [],
  isactive : {
    type : Boolean,
    default : true
  }
})

module.exports = mongoose.model('Users', UserSchema)