import { Router } from "express";
import {obj} from "./Controller";
const router: Router = Router();
router.get("/get", obj.get);
router.post("/post", obj.post);
// router.put("/put", obj.put);
// router.delete("/delete",obj.delete);
export default router;
//   console.log("Hello");
//   router.get("/get",obj.get);
// }
