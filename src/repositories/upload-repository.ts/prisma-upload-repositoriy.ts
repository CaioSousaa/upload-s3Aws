import { IUploadRepositoy } from "../IUpload-repository";
import { prisma } from "../../database/prisma";
import { Upload } from "../../modules/upload/entitie/Upload";

export class PrismaUploadRepository implements IUploadRepositoy {
  async find(): Promise<Upload[]> {
    const findUploads = await prisma.upload.findMany();

    return findUploads;
  }

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
