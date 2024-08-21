import { IUploadRepositoy } from "../IUpload-repository";
import { prisma } from "../../database/prisma";
import { Upload } from "../../modules/upload/entitie/Upload";
import { AppError } from "../../error/AppError";

export class PrismaUploadRepository implements IUploadRepositoy {
  async findUploadById(id: string): Promise<Upload> {
    const upload = await prisma.upload.findFirst({
      where: {
        id,
      },
    });

    if (!upload) {
      throw new AppError(401, "upload not existing");
    }

    return upload;
  }

  async delete(id: string): Promise<void> {
    await prisma.upload.delete({
      where: {
        id,
      },
    });
  }

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
