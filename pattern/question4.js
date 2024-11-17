//   *
//  ***
// *****

let row = 3;


for (let i = 1; i <= row; i++) {
    let stars = "";
  for (let j = 1; j <= 5; j++) {
    if (j >= 4 - i && j <= i + 2) {
      stars += "*";
    } else {
      stars += " ";
    }
  }
  console.log(stars);
}
