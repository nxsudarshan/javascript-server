import { Router } from "express";
import traineeRouter from "./controllers/trainee/routes";
import userRouter from "./controllers/user/routes";
export let traineeRoutes: Router = Router();
traineeRoutes = traineeRouter;
export let userRoutes: Router = Router();
userRoutes = userRouter;
