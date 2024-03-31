//require multer
const multer = require('multer')


//Multer configuration 
const imageStorage = multer.memoryStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

//define filter to upload images only
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    //reject file
    cb({
      message: 'Unsupported file format'
    }, false)
  }
}


//profile pic multer middleware
exports.profilePicUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 2 * 400 * 400
  },
  fileFilter: fileFilter

})

//property pics multer middleware
exports.ListingPicsUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 4 * 1024 * 1024
  },
  fileFilter: fileFilter
})