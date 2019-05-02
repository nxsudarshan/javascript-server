import { NextFunction, Request, Response } from "express";
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
    res.json(result);
  }
  public post(req: Request, res: Response, next: NextFunction) {
    return res.json(req.body);
  }
  public put(req: Request, res: Response, next: NextFunction) {
    return res.json(req.body);
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    return res.json(req.body);
  }
  public getList(req: Request, res: Response, next: NextFunction) {
    return res.json(list);
  }
}
export const obj = new Controller();
Object.freeze(obj);
