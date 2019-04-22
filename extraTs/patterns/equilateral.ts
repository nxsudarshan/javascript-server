export default function equilateral(noOfRows) {
  if (noOfRows >= 2 && noOfRows <= 10 && noOfRows != 0) {
    console.log("Equilateral");
    console.log(" ");
    let i = 0;
    let space = noOfRows - 1;
    let k, j, l, m, n;
    for (; i < noOfRows; i++) {
      for (k = i; k < noOfRows; k++) {
        process.stdout.write(" ");
      }
      space--;
      for (j = 1; j <= (2 * i) + 1; j++) {
        process.stdout.write("*");
      }
      console.log(" ")
    }
  }
  else {
    console.log("Arguments must be in range 2 to 10 or Argument Required");
  }
}
