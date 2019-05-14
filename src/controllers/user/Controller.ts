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
    return res.json(result);
  }
  public post(req: Request, res: Response, next: NextFunction) {
    return res.json(req.body);
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
  public createUser(req: Request, res: Response, next: NextFunction) {
    const userDetails = req.body;
    const repository = new UserRepository();
    repository.insert(userDetails).then((result) => {
      res.status(200).json({ response: "User Created Successfully" });
    }).catch((err) => {
      next({ error: "User Already Exists" });
    });
  }
  public createToken(req: Request, res: Response, next: NextFunction) {
    const { id, email, role } = req.body;
    const token = jwt.sign({ id, email, role}, configenv.KEY, {
      expiresIn: 86400,
    });
    return res.status(200).json(token);
  }
  public verifyToken(req: Request, res: Response, next: NextFunction) {
    return res.status(200);
  }
  public getSingleUser(req: Request, res: Response, next: NextFunction) {
    const userData = req.user;
    const repository = new UserRepository();
    const { email, id } = userData;
    repository.getUserDetails({ _id: id, email }).then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      res.status(422).json({ error: "Error in Database" });
    });
  }
}
export const obj = new Controller();
Object.freeze(obj);
