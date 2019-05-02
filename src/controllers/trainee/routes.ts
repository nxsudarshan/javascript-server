import { authMiddleWare } from './../../../libs/routes/authMoiddleWare';

import { Router } from "express";
import { checkSchema } from "express-validator/check";
import { default as valid } from "./../../middleware/config";
export { validationResult } from "express-validator/check";
import { validationHandler } from "./../../middleware/validationHandler";
import { obj } from "./Controller";
const traineeRouter: Router = Router();
traineeRouter.get("/", validationHandler, obj.getList);
traineeRouter.get("/get", validationHandler, obj.get);
traineeRouter.post("/post", checkSchema(valid.create as any), validationHandler, obj.post);
traineeRouter.put("/put", checkSchema(valid.update as any), validationHandler, obj.put);
traineeRouter.delete("/delete", checkSchema(valid.delete as any), validationHandler, obj.delete);
traineeRouter.post("/sign-in", authMiddleWare("getUsers", "all"));
export default traineeRouter;
