const { cloudinaryUpload } = require("./cloudinary")

exports.bufferAndUpload = async (req) => {
    console.log(req)
    const b64 = Buffer.from(req.buffer).toString("base64");
    let dataURI = "data:" + req.mimetype + ";base64," + b64;
    const cldRes = await cloudinaryUpload(dataURI);
    return cldRes;
}

exports.bufferAndUploadMultiple = async (req) => {
    const uploadUrls = []
    const localImages = req.files
    for (const image of localImages) {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const cldRes = await cloudinaryUpload(dataURI);
        uploadUrls.push(cldRes);
    }
    return uploadUrls;
}