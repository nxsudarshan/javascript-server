
import * as mongoose from "mongoose";
export class VersionableSchema extends mongoose.Schema {
  constructor(baseSchema, options) {
    const versionableSchema = Object.assign({
      _id: mongoose.Schema.Types.ObjectId,
      createdAt: { type: Date, default: Date.now },
      updateAt: { type: Date, default: Date.now },
    }, baseSchema);
    super(versionableSchema, options);
  }
}
