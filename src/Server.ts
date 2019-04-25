import * as bodyParser from "body-parser";
import * as express from "express";
import { notFoundRoute } from "./../libs/routes/notFoundRoute";
// tslint:disable-next-line: ordered-imports
import { IConfig } from "./config/IConfig";
// const app = express();
// tslint:disable-next-line: prefer-const
let config: IConfig;
export class Server {
  public PORT: number;
  public NODE_ENV: string;
  public app;
  // tslint:disable-next-line: variable-name
  constructor(configenv: IConfig) {
    this.PORT = configenv.PORT;
    this.NODE_ENV = configenv.NODE_ENV;
    this.app = express();

  }
  // tslint:disable-next-line: no-empty
  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    this.app.get("/health-check", (req, res) => {
      res.send("I am Ok!");
    });
    this.app.post("/hello", (req, res) => {
      console.log(req.body);
      res.json(req.body);
    });
    this.app.use((req, res, next) => {
      res.status(404).send(notFoundRoute);
      next();
    });
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
