import * as mongoose from "mongoose";
export const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
});
