import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    const uploadPath = path.resolve(__dirname, "..", "tmp", "uploads");
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const time = new Date().getTime();
    cb(null, `${time}_${file.originalname}`);
  },
});

export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  dest: path.resolve(__dirname, "..", "tmp", "uploads"),

  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
      "archive/pdf",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("invalid file type."));
    }
  },
});
