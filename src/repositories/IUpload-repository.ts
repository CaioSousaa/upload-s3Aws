import { Upload } from "../entitie/Upload";

export interface IUploadRepositoy {
  create(upload: Upload): Promise<Upload>;
}
