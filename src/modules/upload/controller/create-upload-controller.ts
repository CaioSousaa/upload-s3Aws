import { Request, Response } from "express";
import { CreateUploadService } from "../service/create-upload";
import { AppError } from "../../../error/AppError";

interface CustomFile extends Express.Multer.File {
  url?: string;
  key?: string;
  location?: string;
}

export class CreateUploadController {
  constructor(private createUploadService: CreateUploadService) {}
  async handle(req: Request, res: Response) {
    const file = req.file as CustomFile;

    if (!file) {
      throw new AppError(401, "no files inserted");
    }

    const { originalname: name, size, key = "", location: url = "" } = file;

    const createUpload = await this.createUploadService.execute({
      name,
      size,
      url,
      key,
    });

    res.json(createUpload).status(201);
  }
}
