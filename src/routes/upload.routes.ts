import { Router } from "express";
import { createFactoryUpload } from "../factory/create-upload-factory";
import { upload } from "../config/multer";

const routes = Router();

routes.post("/upload", upload.single("file"), (req, res) => {
  return createFactoryUpload().handle(req, res);
});

export { routes };
