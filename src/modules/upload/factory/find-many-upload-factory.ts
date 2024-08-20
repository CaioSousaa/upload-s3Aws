import { PrismaUploadRepository } from "../../../repositories/upload-repository.ts/prisma-upload-repositoriy";
import { FindManyUploadController } from "../controller/find-many-upload-controller";
import { FindManyUploadsService } from "../service/find-many-uploads-service";

export const findManyUploadFactory = () => {
  const repository = new PrismaUploadRepository();
  const service = new FindManyUploadsService(repository);
  const controller = new FindManyUploadController(service);

  return controller;
};
