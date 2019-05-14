import { IVersionableModel } from "../versionable/IVersionableModel";
export interface IUserModel extends IVersionableModel {
  name: String;
  email: String;
  password: String;
}
