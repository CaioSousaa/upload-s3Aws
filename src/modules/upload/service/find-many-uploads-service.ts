import { IUploadRepositoy } from "../../../repositories/IUpload-repository";

export class FindManyUploadsService {
  constructor(private uploadsRepository: IUploadRepositoy) {}

  async execute() {
    const get = await this.uploadsRepository.find();

    return get;
  }
}
