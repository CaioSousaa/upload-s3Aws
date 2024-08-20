import { Upload } from "../modules/upload/entitie/Upload";

export interface IUploadRepositoy {
  create(upload: Upload): Promise<Upload>;
  find(): Promise<Upload[]>;
}
