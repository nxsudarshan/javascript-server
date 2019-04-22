import * as print1 from './patterns/index';
import * as print2 from './utils/index';
import { users } from './constants.js';


const noOfRows = process.argv[2];
console.log("------------------------------")
print1.diamond(noOfRows);
console.log("------------------------------")
print1.equilateral(noOfRows);
console.log("------------------------------")


console.log("Check Permission");
print2.checkPermission();

console.log("------------------------------")

console.log("Check Email")
print2.checkEmailValidate(users)

console.log("------------------------------")
