import { IUploadRepository } from "../IUploadRepository";
import Upload from "../../model/post";
import { IUpload } from "../IUploadRepository";
import { AppError } from "../../error/AppError";

export class MongoUploadRepositorie implements IUploadRepository {
  async create({
    name,
    size,
    key,
    url,
    created_at,
  }: IUpload): Promise<IUpload> {
    const createUpload = await Upload.create({
      name,
      size,
      key,
      url,
      created_at,
    });

    if (!createUpload) {
      throw new AppError(401, "non-existing file");
    }

    return createUpload as IUpload;
  }
}
