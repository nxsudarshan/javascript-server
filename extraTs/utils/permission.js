"use strict";
exports.__esModule = true;
var _a, _b;
var constants_js_1 = require("../constants.js");
var permission = (_a = {},
    _a[constants_js_1.MODULE_NAME] = (_b = {},
        _b[constants_js_1.PERMISSION_ALL] = [constants_js_1.ROLE_HEAD_TRAINER],
        _b[constants_js_1.PERMISSION_READ] = [constants_js_1.ROLE_TRAINER, constants_js_1.ROLE_TRAINEE],
        _b[constants_js_1.PERMISSION_WRITE] = [constants_js_1.ROLE_TRAINER],
        _b[constants_js_1.PERMISSION_DELETE] = [],
        _b),
    _a);
function hasPermission(module, role, permissionType) {
    return (permission[module] && permission[module][permissionType].indexOf(role) !== -1
        || permission[module][constants_js_1.PERMISSION_ALL].indexOf(role) !== -1);
}
exports.hasPermission = hasPermission;
