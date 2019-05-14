import * as mongoose from "mongoose";
export class VersionableRepository {
  public static generateObjectId() {
    return mongoose.Types.ObjectId();
  }
  public modelObj: any;
  constructor(modelObj) {
    this.modelObj = modelObj;
  }
  public insert(data) {
    data._id = VersionableRepository.generateObjectId();
    return this.modelObj.create(data);
  }
  public count(query: any = {}) {
    return this.modelObj.countDocuments(query);
  }
  public getUserDetails(query: any) {
    return this.modelObj.findOne(query);
  }
}
