import { NextFunction, Request, Response } from "express";
import { validationResult } from "./routes";
const result = {
  trainee_1: {
    id: 12,
    message: "Fake Response from trainee",
  },
  trainee_2: {
    id: 13,
    message: "Fake Response from trainee",
  },
};
const list = {
  availableLinks: "yes",
  get: "get::http://localhost:9000/trainee/get",
  post: "post::http://localhost:9000/trainee/post",
  put: "put::http://locahost:9000/trainee/put",
  delete: "delete::http://locahost:9000/trainee/delete",
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
}
export const obj = new Controller();
Object.freeze(obj);
