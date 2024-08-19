import { Request, Response } from "express";
import { CreateUploadService } from "../service/create-upload";
import { AppError } from "../error/AppError";

export class CreateUploadController {
  constructor(private createUploadService: CreateUploadService) {}
  async handle(req: Request, res: Response) {
    const file = req.file;

    if (!file) {
      throw new AppError(401, "no files inserted");
    }

    const { originalname: name, size, filename: key } = file;

    const createUpload = await this.createUploadService.execute({
      name,
      size,
      url: "",
      key,
    });

    res.json(createUpload).status(201);
  }
}
