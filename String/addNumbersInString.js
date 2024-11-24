let str = "ahsdj24nsd8osy9e084osdy9";
let sum = 0;

for (item of str) {
  let num = 0;
  if (item >= "0" && item <= "9") {
    num = item - "0";
  }
  sum += num;
}
console.log(sum);
