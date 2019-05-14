import * as jwt from "jsonwebtoken";
import check from "../../extraTs/utils/permission";
import { configenv } from "../../src/config/configuration";
import UserModel from "../../src/repositories/user/UserModel";
import { default as UserRepository } from "../../src/repositories/user/UserRepository";
export const authMiddleWare = (moduleName, permissionType) => async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    next({ error: "Token Required" });
  }
  const getUsersDetails = jwt.verify(token, configenv.KEY);
  const { userEmail, userId } = getUsersDetails;
  const userRepository = new UserRepository();
  const isFound = await userRepository.getUserDetails({ _id: userId, email: userEmail });
  if (!isFound) {
    next({ error: "User is not exists in the database" });
  }
  if (!check(moduleName, isFound.role, permissionType)) {
    next({ status: 422, error: "Unauthorized user", timestamp: new Date() });
  }
  next();
};
