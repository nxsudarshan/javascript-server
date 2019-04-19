import * as print1 from './patterns/index';
import * as print2 from './utils/index';

const noOfRows = process.argv[2];
console.log("------------------------------")
print1.diamond(noOfRows);
console.log(" ")
print1.equilateral(noOfRows);
console.log("------------------------------")


console.log("Permission");
print2.check();

