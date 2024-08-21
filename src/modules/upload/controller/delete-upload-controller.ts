import { DeleteUploadService } from "../service/delete-upload-service";
import { Request, Response } from "express";

export class DeleteUploadController {
  constructor(private deleteUpload: DeleteUploadService) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUpload = await this.deleteUpload.execute({ id });

    res.json(deleteUpload).status(200);
  }
}
