import * as check from "./permission";
import * as checkValidation from "./validations";

import {
  MODULE_NAME,
  PERMISSION_ALL,
  PERMISSION_DELETE,
  PERMISSION_READ,
  PERMISSION_WRITE,
  ROLE_HEAD_TRAINER,
  ROLE_TRAINEE,
  ROLE_TRAINER,
} from "../constants";
const result = "Permission Grant : ";
export function checkPermission() {
  console.log(result + check.default(MODULE_NAME, ROLE_HEAD_TRAINER, PERMISSION_ALL));
}

export function checkEmailValidate(users) {
checkValidation.default(users);
}
