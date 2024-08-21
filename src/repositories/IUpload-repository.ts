import { Upload } from "../modules/upload/entitie/Upload";

export interface IUploadRepositoy {
  create(upload: Upload): Promise<Upload>;
  find(): Promise<Upload[]>;
  delete(id: string): Promise<void>;
  findUploadById(id: string): Promise<Upload | null>;
}
