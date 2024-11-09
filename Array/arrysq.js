//Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

function hasMatchingSquares(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  console.log(frequencyCounter1)

 
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter2)

  
  for (let key in frequencyCounter1) {
    const squaredValue = key * key;
    if (!(squaredValue in frequencyCounter2) || frequencyCounter2[squaredValue] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(hasMatchingSquares([1, 2, 3, 2], [9, 1, 4, 4]));
// console.log(hasMatchingSquares([1, 2, 3], [1, 4, 9, 16]));   // false
// console.log(hasMatchingSquares([1, 2, 1], [4, 4, 1]));       // false
