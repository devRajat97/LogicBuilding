// prime number up to 50



for (let i = 2; i <= 50; i++) {
  let isPrime = true;
  for (let j = 2; j <= i - 1; j++) {
    if (i%j == 0) {
      isPrime = false;
      break;
    }
  }
  if(isPrime) console.log(i)
}