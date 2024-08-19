import { PrismaUploadRepository } from "../repositories/upload-repository.ts/prisma-upload-repositoriy";
import { CreateUploadService } from "../service/create-upload";
import { CreateUploadController } from "../controller/create-upload-controller";

export const createFactoryUpload = () => {
  const repository = new PrismaUploadRepository();
  const service = new CreateUploadService(repository);
  const controller = new CreateUploadController(service);

  return controller;
};
