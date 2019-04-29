import { Router } from "express";
import { obj } from "./Controller";
const userRouter: Router = Router();
userRouter.get("/", obj.getList);
userRouter.get("/get", obj.get);
userRouter.post("/post", obj.post);
userRouter.put("/put", obj.put);
userRouter.delete("/delete", obj.delete);
export default userRouter;
