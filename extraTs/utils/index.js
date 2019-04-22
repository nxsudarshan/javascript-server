"use strict";
exports.__esModule = true;
var check = require("./permission.js");
var checkValidation = require("./validations.js");
var constants_js_1 = require("../constants.js");
var string = "Permission Grant : ";
function checkPermission() {
    console.log(string + check.hasPermission(constants_js_1.MODULE_NAME, constants_js_1.ROLE_HEAD_TRAINER, constants_js_1.PERMISSION_ALL));
}
exports.checkPermission = checkPermission;
function checkEmailValidate(users) {
    checkValidation.validateUsers(users);
}
exports.checkEmailValidate = checkEmailValidate;
