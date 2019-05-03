import * as bodyParser from "body-parser";
import * as express from "express";
import { errorHandler } from "./../libs/routes/errorHandler";
import { notFoundRoute } from "./../libs/routes/notFoundRoute";
// tslint:disable-next-line: ordered-imports
import { IConfig } from "./config/IConfig";
import { routes } from "./router";

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
    this.app.use("/api", routes);
    this.app.get("/health-check", (req, res) => {
      res.send("I am Ok!");
    });
    this.app.get("/", (req, res) => {
      res.json("Hello");
    });
    this.app.use(errorHandler);
    this.app.use(notFoundRoute);
    return this;
  }
  public run() {
    try {
      this.app.listen(this.PORT, () => console.log(`Example app listening on port ${this.PORT}!`));
      return console.log("success");
    } catch (error) {
      return console.error(error);
    }
  }
  public initBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
}
