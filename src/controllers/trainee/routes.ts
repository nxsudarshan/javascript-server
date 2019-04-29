import { express } from "express";
import traineeRouterController from "./Controller";
// tslint:disable-next-line: no-unused-expression
const router = express.Router;
router.get("/", traineeRouterController.get);
