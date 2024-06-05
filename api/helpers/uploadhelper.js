const { GetUserbyIdDB, updateProfileDB } = require("../models/methods/user.Methods");
const { bufferAndUpload, bufferAndUploadMultiple } = require("./datauri");

exports.uploadSingle = async (req, res) => {
    try {
        const { profilePic } = req.body
        const uploadedImage = await bufferAndUpload(profilePic)
        const { id } = req.user
        if (!id) {
            return res.status(404).json({ message: 'no user identified!' })
        }
        const user = await GetUserbyIdDB(id)
        if (!user) {
            return res.status(404).json({ message: 'no user found' });
        }
        const updatedUser = await updateProfileDB(id, { ProfilePic: uploadedImage.url }, { new: true })
        return res.status(200).json('successful picture update')
    }
    catch (err) {
        return res
            .status(404)
            .json({ Message: "Unable to upload", Error: err.message });
    }
}

exports.uploadMultiple = async (req, res) => {
    try {
        const localImages = req.file
        const uploadedimages = await bufferAndUploadMultiple(req);
        return res.status(200).json({ Message: "Upload successful", Images: uploadedimages });
    }
    catch (err) {
        return res
            .status(404)
            .json({ Message: "Unable to upload", Error: err.message });
    }
}