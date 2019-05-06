import { Router } from "express";
import { checkSchema } from "express-validator/check";
import { authMiddleWare, authMiddleWareToUser } from "../../../libs/routes/authMoiddleWare";
import { default as inputUserSchema } from "../../middleware/inputUserSchema";
import { default as tokenVerifySchema } from "../../middleware/tokenVerifySchema";
import { validationHandler } from "../../middleware/validationHandler";
import { default as valid } from "./../../middleware/config";
import { obj } from "./Controller";
const userRouter: Router = Router();
const { create, update } = valid as any;
const { createUser } = inputUserSchema as any;
const { tokenCreate, getToken } = tokenVerifySchema as any;
userRouter.get("/", validationHandler, obj.getList);
userRouter.get("/get", validationHandler, obj.get);
userRouter.post("/", checkSchema(create), validationHandler, obj.post);
userRouter.put("/:id", checkSchema(update), validationHandler, obj.put);
userRouter.delete("/:id", checkSchema(valid.delete as any), validationHandler, obj.delete);

userRouter.post("/createUser", checkSchema(createUser), validationHandler, obj.createUser);
userRouter.post("/createToken", checkSchema(tokenCreate), validationHandler, obj.createToken);
userRouter.post("/verifyUser", validationHandler, authMiddleWareToUser, obj.getSingleUser);

export default userRouter;
