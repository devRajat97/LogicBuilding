
let fisrtNumber = 0;
let secondNumber = 1;
let sum = 0;

for(let i = 1 ; i <= 10; i++ ){
    sum = fisrtNumber + secondNumber
    console.log(sum)
    fisrtNumber = secondNumber;
    secondNumber = sum;
}