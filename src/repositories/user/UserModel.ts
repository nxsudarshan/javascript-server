import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import { default as UserSchema } from "./UserSchema";
const userSchema = new UserSchema();
// tslint:disable-next-line: new-parens
export default mongoose.model<IUserModel>("User", userSchema);
