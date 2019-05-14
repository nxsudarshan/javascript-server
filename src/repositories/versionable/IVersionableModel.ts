import * as mongoose from "mongoose";
export interface IVersionableModel extends mongoose.Document {
  _id: any;
  createdAt: any;
  updateAt: any;
}
