import { Router } from "express";
import { checkSchema } from "express-validator/check";
import { authMiddleWare } from "./../../../libs/routes/authMoiddleWare";
import { default as valid } from "./../../middleware/config";
export { validationResult } from "express-validator/check";
import {
  MODULE_NAME,
  PERMISSION_ALL,
  PERMISSION_DELETE,
  PERMISSION_READ,
  PERMISSION_WRITE,
  ROLE_HEAD_TRAINER,
  ROLE_TRAINEE,
  ROLE_TRAINER,
} from "../../../extraTs/constants";
import { validationHandler } from "./../../middleware/validationHandler";
import { obj } from "./Controller";
const traineeRouter: Router = Router();

traineeRouter.get("/", authMiddleWare(MODULE_NAME, PERMISSION_READ), validationHandler, obj.getList);
traineeRouter.get("/get", authMiddleWare(MODULE_NAME, PERMISSION_READ), validationHandler, obj.get);
// traineeRouter.post("/sign-in", authMiddleWare("getUsers", "all"));
// tslint:disable-next-line: max-line-length
traineeRouter.post("/", authMiddleWare(MODULE_NAME, PERMISSION_WRITE), checkSchema(valid.create as any), validationHandler, obj.post);
// tslint:disable-next-line: max-line-length
traineeRouter.put("/:id", authMiddleWare(MODULE_NAME, PERMISSION_WRITE), checkSchema(valid.update as any), validationHandler, obj.put);
// tslint:disable-next-line: max-line-length
traineeRouter.delete("/:id", authMiddleWare(MODULE_NAME, PERMISSION_DELETE), checkSchema(valid.delete as any), validationHandler, obj.delete);

export default traineeRouter;
