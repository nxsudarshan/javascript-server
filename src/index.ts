import { configenv } from "./config/configuration";
import { Server } from "./Server";

const obj = new Server(configenv);

obj.bootstrap().run();
