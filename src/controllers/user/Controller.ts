import * as bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { configenv } from "../../config/configuration";
import UserModel from "../../repositories/user/UserModel";
import UserRepository from "../../repositories/user/UserRepository";
const result = {
  user_1: {
    id: 10,
    message: "Fake Response from User",
  },
  trainee_2: {
    id: 11,
    message: "Fake Response from User",
  },
};
const list = {
  availableLinks: "yes",
  get: "get::http://localhost:9000/user/get",
  post: "post::http://localhost:9000/user/post",
  put: "put::http://locahost:9000/user/put",
  delete: "delete::http://locahost:9000/user/delete",
};
class Controller {
  public get(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json(result);
  }
  public post(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json(req.body);
  }
  public put(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({ message: "Record Updated" });
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    return res.status(200).json({ message: "Record Deleted" });
  }
  public getList(req: Request, res: Response, next: NextFunction) {
    return res.json(list);
  }
  public async signIn(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      next({ error: "In body Email & password required" });
    }
    const { email, password } = req.body;
    const userRepository = new UserRepository();
    const userDetails = await userRepository.getUserDetails({ email });
    if (!userDetails) {
      next({
        status: 422,
        message: "Email id & password is incorrect",
      });
    }
    const isMatch = await bcrypt.compare(password, userDetails.password);
    if (isMatch) {
      const userEmail = userDetails.email;
      const userId = userDetails._id;
      const token = jwt.sign({ userEmail, userId }, configenv.KEY, {
        expiresIn: 86400,
      });
      return res.status(200).json({ token });
    }
    next({ status: 422, message: "Password is incorrect" });
  }
}
export const obj = new Controller();
Object.freeze(obj);
