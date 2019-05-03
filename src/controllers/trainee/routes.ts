
import { Router } from "express";
import { checkSchema } from "express-validator/check";
import { default as valid } from "./../../middleware/config";
export { validationResult } from "express-validator/check";
import { validationHandler } from "./../../middleware/validationHandler";
import { obj } from "./Controller";
const traineeRouter: Router = Router();
traineeRouter.get("/", validationHandler, obj.getList);
traineeRouter.get("/get", validationHandler, obj.get);
traineeRouter.post("/", checkSchema(valid.create as any), validationHandler, obj.post);
traineeRouter.put("/:id", checkSchema(valid.update as any), validationHandler, obj.put);
traineeRouter.delete("/:id", checkSchema(valid.delete as any), validationHandler, obj.delete);
export default traineeRouter;
