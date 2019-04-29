import { Router } from "express";
import { obj } from "./Controller";
const traineeRouter: Router = Router();
traineeRouter.get("/", obj.getList);
traineeRouter.get("/get", obj.get);
traineeRouter.post("/post", obj.post);
traineeRouter.put("/put", obj.put);
traineeRouter.delete("/delete", obj.delete);
export default traineeRouter;
