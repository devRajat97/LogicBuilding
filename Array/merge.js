//  Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

let arr1 = [0, 3, 4, 31];
let arr2 = [4, 6, 30];
let arr3 = [];

let i = 0; // Pointer for arr1
let j = 0; // Pointer for arr2

// Merge the arrays while comparing elements
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    arr3.push(arr1[i]);
    i++;
  } else {
    arr3.push(arr2[j]);
    j++;
  }
}

console.log(arr3)

