import * as bodyParser from "body-parser";
import * as express from "express";
import { errorHandler } from "./../libs/routes/errorHandler";
import { notFoundRoute } from "./../libs/routes/notFoundRoute";
// tslint:disable-next-line: ordered-imports
import { IConfig } from "./config/IConfig";
import { traineeRoutes, userRoutes } from "./router";

export class Server {
  public PORT: number;
  public NODE_ENV: string;
  public app;
  constructor(configenv: IConfig) {
    this.PORT = configenv.PORT;
    this.NODE_ENV = configenv.NODE_ENV;
    this.app = express();
  }
  public bootstrap() {
    this.initBodyParser();
    this.setUpRoutes();
    return this;
  }
  public setUpRoutes() {
    try {
      this.app.use("/trainee", traineeRoutes);
      this.app.use("/user", userRoutes);
    } catch (error) {
      throw new Error(String(errorHandler));
    }
    this.app.use(notFoundRoute);
    return this;
  }
  public run() {
    this.app.listen(this.PORT, () => console.log(`Example app listening on port ${this.PORT}!`));
  }
  public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
}
