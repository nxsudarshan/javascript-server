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


let permission = {
  [MODULE_NAME]: {
    [PERMISSION_ALL]: [ROLE_HEAD_TRAINER],
    [PERMISSION_READ]: [ROLE_TRAINER, ROLE_TRAINEE],
    [PERMISSION_WRITE]: [ROLE_TRAINER],
    [PERMISSION_DELETE]: [],
  }
}
export function hasPermission(module, role, permissionType) {
  return (permission[module] && permission[module][permissionType].indexOf(role) !== -1
    || permission[module][PERMISSION_ALL].indexOf(role) !== -1)
}


