import { Document } from "mongoose";

export interface IUpload extends Document {
  name?: string | null;
  key?: string | null;
  url?: string | null;
  size?: number | null;
  created_at: Date;
}

export interface IUploadRepository {
  create(upload: IUpload): Promise<IUpload>;
}
