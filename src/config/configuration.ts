import * as dotenv from "dotenv";
import { Server } from "../Server";
import { IConfig } from "./IConfig";
dotenv.config();

// tslint:disable-next-line: variable-name
export let config_env: IConfig = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV)
}
