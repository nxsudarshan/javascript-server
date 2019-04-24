import { config_env } from "./config/configuration";
import { Server } from "./Server";

const obj = new Server(config_env);

obj.bootstrap().setupRoutes().run();
