import * as mongoose from "mongoose";
import { default as UserModel } from "./UserModel";
class UserRepository {
  public static getObjectId() {
    return mongoose.Types.ObjectId();
  }
  public create(data) {
    const id = UserRepository.getObjectId();
    const model = new UserModel({
      _id: id,
      ...data,
    });
    return model.save();
  }
  public count(query: any = {}) {
    return UserModel.countDocuments(query);
  }
  public getUserDetails(query: any) {
    return UserModel.find().where(query);
  }
}
export default UserRepository;
