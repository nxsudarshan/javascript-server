import { NextFunction, Request, Response } from "express";
const result = {
  data: "Fake Response from trainee get"
};
const list = {
  availableLinks: "yes",
  get: "get::http://localhost:9000/trainee/get",
  post: "post::http://localhost:9000/trainee/post",
  put: "put::http://locahost:9000/trainee/put",
  delete: "delete::http://locahost:9000/trainee/delete",
}
class Controller {
  public get(req: Request, res: Response, next: NextFunction) {
    res.json(result);
  }
  public post(req: Request, res: Response, next: NextFunction) {
    res.json(req.body);
  }
  public put(req: Request, res: Response, next: NextFunction) {
    res.json("Trainee Put");
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    res.json("Trainee Delete");
  }
  public getList(req: Request, res: Response, next: NextFunction) {
    res.json(list);
  }
}
export const obj = new Controller();
Object.freeze(obj);
