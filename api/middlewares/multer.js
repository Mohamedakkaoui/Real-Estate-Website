const multer = require('multer')


//Multer configuration for profile
const profileStorage = multer.diskStorage ({
 destination : (req, file, cb) => {
  cb(null, './Public/Images') // needs refactoring
 },
 filename : (req, file , cb) => {
  cb(null, Date.now() + '-' + file.originalname)
 }
})


//Multer configuration for listings 
const ListingStorage = multer.diskStorage ({
  destination : (req, file, cb) => {
   cb(null, './Public/Images') // needs refactoring
  },
  filename : (req, file , cb) => {
   cb(null, Date.now() + '-' + file.originalname)
  }
 })




 exports.profileUpload = multer ({storage : profileStorage,
  limits : {
    fileSize : 2 * 400 * 400
  }})
 exports.ListingUpload = multer ({storage : ListingStorage,
  limits : {
    fileSize : 4 * 1024 * 1024
  }})