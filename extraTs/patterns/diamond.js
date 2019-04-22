"use strict";
exports.__esModule = true;
function diamond(noOfRows) {
    if ((noOfRows >= 2 && noOfRows <= 10) && noOfRows != 0) {
        console.log("Diamond");
        console.log(" ");
        var i = 0;
        var space = noOfRows - 1;
        var k = void 0, j = void 0, l = void 0, m = void 0, n = void 0;
        for (; i < noOfRows; i++) {
            for (k = i; k < noOfRows; k++) {
                process.stdout.write(" ");
            }
            space--;
            for (j = 1; j <= (2 * i) + 1; j++) {
                process.stdout.write("*");
            }
            console.log(" ");
        }
        space = 1;
        for (l = 1; l <= noOfRows; l++) {
            for (m = 1; m <= space; m++) {
                process.stdout.write(" ");
            }
            space++;
            for (n = 1; n <= 2 * (noOfRows - l) + 1; n++) {
                process.stdout.write("*");
            }
            console.log(" ");
        }
    }
    else {
        console.log("Arguments must be in range 2 to 10  or Argument Required");
    }
}
exports["default"] = diamond;
