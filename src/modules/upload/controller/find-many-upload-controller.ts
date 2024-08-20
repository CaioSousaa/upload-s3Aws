import { Request, Response } from "express";
import { FindManyUploadsService } from "../service/find-many-uploads-service";

export class FindManyUploadController {
  constructor(private findManyUploadService: FindManyUploadsService) {}

  async handle(req: Request, res: Response) {
    const findMany = await this.findManyUploadService.execute();

    res.json(findMany).status(200);
  }
}
