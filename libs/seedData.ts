import UserRepository from "../src/repositories/user/UserRepository";
import { userSchema } from "../src/repositories/user/UserSchema";
const repositoryObject = new UserRepository();
export default () => {
  repositoryObject.count().then((res) => {
    if (res === 0) {
      repositoryObject.create({ name: "S", email: "sudarshangonewar@gmail.com" });
    }
  });
};
