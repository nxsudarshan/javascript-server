import * as dotenv from "dotenv";
import { IConfig } from "./IConfig";
dotenv.config();

// tslint:disable-next-line: variable-name
const config_env: IConfig = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  KEY: String(process.env.KEY),
  dbLink: String(process.env.dbLink),
};

export let configenv = Object.freeze(config_env);
