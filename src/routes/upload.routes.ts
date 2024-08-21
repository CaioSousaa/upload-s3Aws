import { Router } from "express";
import { createFactoryUpload } from "../modules/upload/factory/create-upload-factory";
import { upload } from "../config/multer";
import { findManyUploadFactory } from "../modules/upload/factory/find-many-upload-factory";
import { deleteUploadFactory } from "../modules/upload/factory/delete-upload-factory";

const routes = Router();

routes.post("/upload", upload.single("file"), (req, res) => {
  return createFactoryUpload().handle(req, res);
});

routes.get("/uploads", (req, res) => {
  return findManyUploadFactory().handle(req, res);
});

routes.delete("/delete/:id", (req, res) => {
  return deleteUploadFactory().handle(req, res);
});
export { routes };
