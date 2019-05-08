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
    return this.modelObj.estimatedDocumentCount(query);
  }
  public updateById(id, data) {
    return this.modelObj.findByIdAndUpdate(id, data);
  }
  public findOneRecord(data) {
    return this.modelObj.findOne(data);
  }
  public findOneAndDelete(conditions) {
    return this.modelObj.findOneAndDelete(conditions);
  }
  public getUserDetails(query: any) {
    return this.modelObj.find().where(query);
  }
}
