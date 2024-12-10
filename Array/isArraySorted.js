let arr = [1, 3, 4, 7, 9];
let isNotSorted = false;

for (let i = 0; i < arr.length - 1; i++) { 
    if (arr[i] > arr[i + 1]) {
        isNotSorted = true;
        break;
    }
}

if (isNotSorted) {
    console.log("Array is not sorted");
} else {
    console.log("Array is sorted");
}
