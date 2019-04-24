import { users } from "./constants";
import * as print1 from "./patterns/index";
import * as print2 from "./utils/index";

const noOfRows: number = 5;

console.log("------------------------------");
print1.diamond(noOfRows);

console.log("------------------------------");
print1.equilateral(noOfRows);

console.log("------------------------------");


console.log("Check Permission");
print2.checkPermission();

console.log("------------------------------");

console.log("Check Email");
print2.checkEmailValidate(users);

console.log("------------------------------");
