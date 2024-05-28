const { cloudinaryUpload } = require("./cloudinary")


//setup upload for profile pic
exports.bufferAndUpload = async (req) => {
    try {
        // const b64 = Buffer.from(req).toString("base64");
        // let dataURI = "data:" + req.mimetype + ";base64," + b64;
        const cldRes = await cloudinaryUpload(req);
        return cldRes;
    }
    catch (error) {
        throw error
    }
}

//setup upload for property pics
exports.bufferAndUploadMultiple = async (req) => {
    try {
        const uploadUrls = []
        const localImages = req.files
        for (const image of localImages) {
            const b64 = Buffer.from(image.buffer).toString("base64");
            let dataURI = "data:" + image.mimetype + ";base64," + b64;
            const cldRes = await cloudinaryUpload(dataURI);
            uploadUrls.push(cldRes);
        }
        return uploadUrls;
    } catch (error) {
        throw error
    }
}