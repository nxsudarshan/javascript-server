import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import { default as UserModel } from "./UserModel";
class UserRepository {
  public static getObjectId() {
    return mongoose.Types.ObjectId();
  }
  public create(data: IUserModel) {
    const id = UserRepository.getObjectId();
    const model = new UserModel({
      _id: id,
      ...data,
    });
    return model.save();
  }
  // public update(data: IUserModel) {
  //   const id = UserRepository.getObjectId();
  //   let model = new UserModel({
  //     _id: id,
  //     ...data
  //   });
  //   return model.update({}, { $set: { _id: id, ...data } });
  // }
  // public delete(data: IUserModel) {

  // }

}
export default UserRepository;
