import * as mongoose from "mongoose";
export interface IUserModel extends mongoose.Document {
  _id: any;
  name: String;
  email: String;
  createdAt: any;
}
