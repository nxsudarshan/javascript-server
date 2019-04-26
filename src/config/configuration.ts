import * as dotenv from "dotenv";
import { IConfig } from "./IConfig";
dotenv.config();

// tslint:disable-next-line: variable-name
const config_env: IConfig = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
};

export let configenv = Object.freeze(config_env);
