import { AppError } from "../../../error/AppError";
import { IUploadRepositoy } from "../../../repositories/IUpload-repository";

interface IRequest {
  name: string;
  key: string;
  url: string;
  size: number;
}

export class CreateUploadService {
  constructor(private iuploadRepository: IUploadRepositoy) {}

  async execute({ name, key, size, url }: IRequest) {
    if (!key || !size || !name) {
      throw new AppError(401, "all fields need to be filled in");
    }

    const upload = await this.iuploadRepository.create({
      name,
      key,
      created_at: new Date(),
      size,
      url,
    });

    return upload;
  }
}
