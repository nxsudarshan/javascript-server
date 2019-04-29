import * as express from "express";
import { obj } from "./Controller";
const router = express.Router();
const app = express();

export const Routes = (req, res,next) => {
  res.json()
  router.get("/get",obj.getTrainee);
  next();
}

// export function Routes() {
//   console.log("Hello");
//   router.get("/get",obj.get);
// }
