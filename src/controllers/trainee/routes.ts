
import { Router } from "express";
import expressValidator from "express-validator";
import { check, checkSchema, ValidationSchema } from "express-validator/check";
import { valid } from "./../../middleware/config";
export { validationResult } from "express-validator/check";
import { default as userSchema } from "src/middleware/config";
import { obj } from "./Controller";
const traineeRouter: Router = Router();
traineeRouter.get("/", obj.getList);
traineeRouter.get("/get", obj.get);
traineeRouter.post("/post", checkSchema(JSON.parse(JSON.stringify(valid))), obj.post);
traineeRouter.put("/put", checkSchema({
  name: {
    in: ["body"],
    isLength: true,
  },
}), obj.put);
traineeRouter.delete("/delete", obj.delete);
export default traineeRouter;
