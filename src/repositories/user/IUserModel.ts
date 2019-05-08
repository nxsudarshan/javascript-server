import * as mongoose from "mongoose";
export interface IUserModel extends mongoose.Document {
  name: String;
  email: String;
}
