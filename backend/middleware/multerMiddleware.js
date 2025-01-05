import multer from "multer";

// Define the storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./file"); // Specify the directory where files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now(); // Create a unique suffix for the filename
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

// Create the multer instance
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "video/mp4",
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error("Unsupported file type"), false); // Reject the file
    }
  },
});

export default upload;