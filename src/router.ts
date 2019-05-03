import { Router } from "express";
import traineeRouter from "./controllers/trainee/routes";
import userRouter from "./controllers/user/routes";
export let routes: Router = Router();
routes.use("/trainee", traineeRouter);
routes.use("/user", userRouter);
