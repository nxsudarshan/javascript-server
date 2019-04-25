import * as express from "express";
import { configenv } from "./config/configuration";
// tslint:disable-next-line: ordered-imports
import { IConfig } from "./config/IConfig";
const app = express()
// tslint:disable-next-line: prefer-const
let config: IConfig;
export class Server {
  public PORT: number;
  public NODE_ENV: string;
  // tslint:disable-next-line: variable-name
  constructor(config_env: IConfig) {
    this.PORT = config_env.PORT;
    this.NODE_ENV = config_env.NODE_ENV;
  }
  // tslint:disable-next-line: no-empty
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    app.get("/health-check", (req, res) => res.send("I am Ok!"));
    return this;
  }
  public run() {
    app.listen(this.PORT, () => console.log(`Example app listening on port ${this.PORT}!`))
  }
}
