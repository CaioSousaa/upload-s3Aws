import { IUploadRepositoy } from "../IUpload-repository";
import { prisma } from "../../database/prisma";
import { v4 as uuid } from "uuid";
import { Upload } from "../../entitie/Upload";

export class PrismaUploadRepository implements IUploadRepositoy {
  async create({ name, created_at, key, size, url }: Upload): Promise<Upload> {
    const uploadData = await prisma.upload.create({
      data: {
        name,
        key,
        size,
        url,
        created_at,
      },
    });

    return uploadData;
  }
}
