// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) {
//       return null;
//     }
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });
//     return response;
//   } catch (error) {
//     console.error("upload on cloudinary failed", error);
//     fs.unlinkSync(localFilePath);
//     return null;
//   }
// };

// const deleteOnCloudinary = async (public_id, resource_type = "image") => {
//   try {
//     if (!public_id) {
//       return null;
//     }
//     const result = await cloudinary.uploader.destroy(public_id, {
//       resource_type: `${resource_type}`,
//     });
//   } catch (error) {
//     console.error("delete on cloudinary failed", error);
//     return error;
//   }
// };

// export { uploadOnCloudinary, deleteOnCloudinary };


import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Cloudinary par upload karain
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Success: File upload ho gayi, ab temp file delete karain
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    
    return response;
  } catch (error) {
    console.error("Cloudinary upload error:", error.message);
    
    // Error: Agar upload fail hua, tab bhi temp file delete karain taake space khali rahay
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};

const deleteOnCloudinary = async (public_id, resource_type = "image") => {
  try {
    if (!public_id) return null;
    
    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type: resource_type,
    });
    return result;
  } catch (error) {
    console.error("Cloudinary delete error:", error.message);
    return null;
  }
};

export { uploadOnCloudinary, deleteOnCloudinary };