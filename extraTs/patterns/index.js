"use strict";
exports.__esModule = true;
var check = require("./diamond");
var equli = require("./equilateral");
function diamond(noOfRows) {
    check["default"](noOfRows);
}
exports.diamond = diamond;
function equilateral(noOfRows) {
    equli["default"](noOfRows);
}
exports.equilateral = equilateral;
