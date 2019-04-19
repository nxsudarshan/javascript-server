import * as check from './permission.js';
import {
  MODULE_NAME,
  PERMISSION_ALL,
  PERMISSION_DELETE,
  PERMISSION_READ,
  PERMISSION_WRITE,
  ROLE_HEAD_TRAINER,
  ROLE_TRAINEE,
  ROLE_TRAINER
} from './../constants.js';
let string ="Permission Grant : ";
export function check(){
  console.log(string+check.hasPermission(MODULE_NAME,ROLE_HEAD_TRAINER,PERMISSION_ALL));
}

