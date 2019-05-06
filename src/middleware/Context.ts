import * as express from "express";

export class Context {
  constructor(public someContextVariable) {
    this.log = someContextVariable;
  }
  public log(message: string) {
    console.log(this.someContextVariable, { message });
  }
}

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}
