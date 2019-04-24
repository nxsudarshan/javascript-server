import { users } from "./constants";
import * as print1 from "./patterns/index";
import * as print2 from "./utils/index";

const noOfRows: number = 4;
// tslint:disable-next-line: no-console
console.log("------------------------------");
print1.diamond(noOfRows);
// tslint:disable-next-line: no-console
console.log("------------------------------");
print1.equilateral(noOfRows);
// tslint:disable-next-line: no-console
console.log("------------------------------");

// tslint:disable-next-line: no-console
console.log("Check Permission");
print2.checkPermission();
// tslint:disable-next-line: no-console
console.log("------------------------------");

// tslint:disable-next-line: no-console
console.log("Check Email");
print2.checkEmailValidate(users);

// tslint:disable-next-line: no-console
console.log("------------------------------");
