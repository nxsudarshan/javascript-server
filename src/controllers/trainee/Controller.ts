import { Request, Response, NextFunction } from 'express';
import { router } from "express";
// tslint:disable-next-line: import-spacing
const response = {
  para: "Some Response from TraineeController",
};

class TraineeRoutes {
  public get(req: Request, res: Response, next: NextFunction) {
    res.json(response);
  }
  public post() {

  }
  public put() {

  }
  public delete() {

  }
}
export default new TraineeRoutes();
