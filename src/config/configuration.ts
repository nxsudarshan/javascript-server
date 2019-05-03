import * as dotenv from "dotenv";
import { IConfig } from "./IConfig";
dotenv.config();

// tslint:disable-next-line: variable-name
const config_env: IConfig = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  KEY: String(process.env.KEY),
  MONGO_URL: String(process.env.MONGO_URL),
};

export let configenv = Object.freeze(config_env);
