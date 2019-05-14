import { Router } from "express";
import { checkSchema } from "express-validator/check";
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
import { authMiddleWare } from "../../../libs/routes/authMoiddleWare";
import { default as inputUserSchema } from "../../middleware/inputUserSchema";
import { sign_in_schema } from "../../middleware/tokenVerifySchema";
import { validationHandler } from "../../middleware/validationHandler";
import { default as valid } from "./../../middleware/config";
import { obj } from "./Controller";
const userRouter: Router = Router();
const { create, update } = valid as any;
const { sign_in } = sign_in_schema as any;
userRouter.get("/",
validationHandler,
authMiddleWare(MODULE_NAME, PERMISSION_READ),
obj.getList);

userRouter.post("/",
  authMiddleWare(MODULE_NAME, PERMISSION_WRITE),
  checkSchema(create),
  validationHandler, obj.post);

userRouter.put("/:id",
  authMiddleWare(MODULE_NAME, PERMISSION_WRITE),
  checkSchema(update),
  validationHandler, obj.put);

userRouter.delete("/:id",
  authMiddleWare(MODULE_NAME, PERMISSION_DELETE),
  checkSchema(valid.delete as any),
  validationHandler, obj.delete);

userRouter.post("/sign-in", checkSchema(sign_in),
  validationHandler, obj.signIn);

export default userRouter;
