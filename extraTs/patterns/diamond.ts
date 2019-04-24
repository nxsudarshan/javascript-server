import { IPatterns } from "../interfaces";
let diamond: IPatterns;

export default diamond = (noOfRows) => {
  if ((noOfRows >= 2 && noOfRows <= 10) && noOfRows !== 0) {
    // tslint:disable-next-line: no-console
    console.log("Diamond");
    let i = 0;
    let space = noOfRows - 1;
    let k: number;
    let j: number;
    let l: number;
    let m: number;
    let n: number;
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
  } else {
    console.log("Arguments must be in range 2 to 10  or Argument Required");
  }
};
