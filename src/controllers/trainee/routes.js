"use strict";
exports.__esModule = true;
var Routes = /** @class */ (function () {
    function Routes() {
        console.log("Hello");
    }
    Routes.getInstances = function () {
        if (!Routes.instance) {
            Routes.instance = new Routes();
        }
    };
    return Routes;
}());
exports.Routes = Routes;
var obj = new Routes();
