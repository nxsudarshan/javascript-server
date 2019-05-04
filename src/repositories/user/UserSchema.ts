import * as mongoose from "mongoose";
// let Schema = mongoose.Schema;
export const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fName: String,
  lName: String,
  eMail: String,
  createdAt: { type: Date, default: Date.now },
});
