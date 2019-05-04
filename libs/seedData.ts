import UserRepository from "../src/repositories/user/UserRepository";
import { userSchema } from "../src/repositories/user/UserSchema";
export default () => {
  const repositoryObject = new UserRepository();
  repositoryObject.create({ fName: "S", lName: "G", eMail: "sudarshangonewar@gmail.com" });
};
