import { Error,NextFunction, Request, Response } from "express";
class Controller {
  public getTrainee(err:Error,req: Request, res: Response, next: NextFunction){
    res.send("here")
  }
}
export const obj=new Controller();
Object.freeze(obj);
