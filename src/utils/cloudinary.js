import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //To upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //File has been uploaded successfully
    console.log("File is uploaded on cloudinary: ", response.url);
    return response;
  } catch (error) {
    console.log("Error uploading file: ", error);
    fs.unlinkSync(localFilePath); //Removes the locally saved temp file as there was an error uploading on cloudinary
    return null;
  }
};

export { uploadOnCloudinary };
