"use strict";
exports.__esModule = true;
exports.expression = "/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
exports.domain_name = "@successive.tech$";
function validateEmail(value) {
    return (value.match(exports.expression) || value.match(exports.domain_name));
}
exports.validateEmail = validateEmail;
