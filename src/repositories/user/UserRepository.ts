import * as mongoose from "mongoose";
import { VersionableRepository } from "./../versionable/VersionableRepository";
import { default as UserModel } from "./UserModel";
export default class UserRepository extends VersionableRepository {
  public static generateObjectId() {
    return mongoose.Types.ObjectId();
  }
  constructor() {
    super(UserModel);
  }
}
