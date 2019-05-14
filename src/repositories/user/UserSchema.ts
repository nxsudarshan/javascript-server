import { VersionableSchema } from "../versionable/VersionableSchema";
export default class UserSchema extends VersionableSchema {
  constructor() {
    const userSchema = {
      name: String,
      email: { type: String, unique: true, required: true },
      role: String,
      sub: String,
    };
    const options = {

    };
    super(userSchema, options);
  }
}