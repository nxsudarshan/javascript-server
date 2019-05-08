import * as jwt from "jsonwebtoken";
import check from "../../extraTs/utils/permission";
import { configenv } from "../../src/config/configuration";
import UserModel from "../../src/repositories/user/UserModel";
import { default as UserRepository } from "../../src/repositories/user/UserRepository";
export const authMiddleWare = (mo, permissionType) => (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(403).json({ message: "Unauthorized access", status: 403, hint: "You need to provide Token to access" });
  }
  const userDetails = jwt.verify(token, configenv.KEY);
  if (!userDetails) {
    next({ error: "Token doesn't have emailid and id" });
  }
  if (!check(mo, userDetails.role, permissionType)) {
    next({ status: 403, error: "Unauthorized User", timestamp: new Date() });
  }
  next({ status: 200, message: "User Authorized to access it" });
};

export const authMiddleWareToUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    next({ error: "Token Required", status: 422, message: "Bad Request" });
  }
  const userData = jwt.verify(token, configenv.KEY, (err, result) => {
    const { email, id } = result;
    if (email && id) {
      const repository = new UserRepository();
      repository.count({ _id: id, email }).then((count) => {
        if (count === 0) {
          next({ error: "User not exists in the DB" });
        }
        req.user = result;
        next();

      }).catch((err) => {
        next({ err });
      });
    } else {
      next({ error: "Wrong Token" });
    }
  });
};
