//require necessary packs
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
//require config params
dotenv.config();
//cloudinary credentials
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
//handle upload function 
exports.cloudinaryUpload = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}