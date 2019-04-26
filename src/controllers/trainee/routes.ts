import { NextFunction, Request, Response } from "express";

export class Routes {
  public static getInstances() {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }
  }
  private static instance;

  constructor() {
    console.log("Hello");
  }
}
let obj = new Routes();
