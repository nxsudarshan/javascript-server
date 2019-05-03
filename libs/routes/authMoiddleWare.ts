
import * as jwt from "jsonwebtoken";
import check from "../../extraTs/utils/permission";
import { configenv } from "../../src/config/configuration";
export const authMiddleWare = (mo, permissionType) => (req, res, next) => {
  // tslint:disable-next-line: no-string-literal
  const token = req.headers.authorization;
  if (!token) {
    res.status(403).json({ message: "Unauthorized access", status: 422, hint: "You need to provide Token to access" });
  }
  const userDetails = jwt.verify(token, configenv.KEY);
  return check(mo, userDetails.role, permissionType) ?
    res.status(200).json({ status: 200, message: "Authorized User", timestamp: new Date() }) :
    res.status(403).json({ status: 403, error: "Unauthorized User", timestamp: new Date() });

};
