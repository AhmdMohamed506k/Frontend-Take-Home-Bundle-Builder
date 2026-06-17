import multer from "multer";
import fs from "fs";



export const validExtensions = {
  image: [
     "image/png",
     "image/jpg", 
     "image/jpeg",
     "image/webp"
  ],
};


export const MulterHost = (customvalidtion = []) => {



 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {

    
    if (customvalidtion.includes(file.mimetype)) {
      return cb(null, true);
    }
    return cb(new Error("File type not supported"), false);
  };

  return multer({
    storage,
    fileFilter,
    limits: {
      fileSize: 20 * 1024 * 1024, // 20MB
    },
  });
};
