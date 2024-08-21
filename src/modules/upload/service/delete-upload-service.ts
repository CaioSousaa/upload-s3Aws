import { IUploadRepositoy } from "../../../repositories/IUpload-repository";

interface IRequest {
  id: string;
}

export class DeleteUploadService {
  constructor(private uploadRepositoy: IUploadRepositoy) {}

  async execute({ id }: IRequest) {
    await this.uploadRepositoy.findUploadById(id);

    const deleteUpload = await this.uploadRepositoy.delete(id);

    return deleteUpload;
  }
}
