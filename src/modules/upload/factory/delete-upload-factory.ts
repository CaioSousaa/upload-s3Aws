import { PrismaUploadRepository } from "../../../repositories/upload-repository.ts/prisma-upload-repositoriy";
import { DeleteUploadController } from "../controller/delete-upload-controller";
import { DeleteUploadService } from "../service/delete-upload-service";

export const deleteUploadFactory = () => {
  const repository = new PrismaUploadRepository();
  const service = new DeleteUploadService(repository);
  const controller = new DeleteUploadController(service);

  return controller;
};
