import mongoose, { Schema } from "mongoose";

const uploadModel = new Schema({
  name: String,
  key: String,
  url: String,
  size: Number,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Upload = mongoose.model("Upload", uploadModel);

export default Upload;
