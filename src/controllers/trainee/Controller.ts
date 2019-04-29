import { Error, NextFunction, Request, Response } from "express";
let result={
  error:"asf",
}
class Controller {
  public get(req: Request, res: Response, next: NextFunction) {
    res.json(result);
  }
  public post(req: Request, res: Response, next: NextFunction) {
    res.json(req.body);
  }
}
export const obj=new Controller();
Object.freeze(obj);
