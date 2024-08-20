import multer from "multer";
import path from "path";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: process.env.AWS_SECRET_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

interface CustomFile extends Express.Multer.File {
  key?: string;
}

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, res, cb) => {
      const uploadPath = path.resolve(__dirname, "..", "tmp", "uploads");
      cb(null, uploadPath);
    },

    filename: (req, file: CustomFile, cb) => {
      const time = new Date().getTime();

      file.key = `${time}_${file.originalname}`;

      cb(null, file.key);
    },
  }),
  s3: multerS3({
    s3: s3,
    bucket: "uploadimagess3",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const time = new Date().getTime();

      const filename = `${time}_${file.originalname}`;

      cb(null, filename);
    },
  }),
};

export const upload = multer({
  storage: storageTypes["s3"],
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
