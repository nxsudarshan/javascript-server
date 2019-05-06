import * as mongoose from "mongoose";
import { IUserModel } from "./IUserModel";
import { userSchema } from "./UserSchema";

export default mongoose.model<IUserModel>("User", userSchema);
