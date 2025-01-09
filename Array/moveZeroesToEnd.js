let arr = [1, 3, 6, 8, 0, 4, 0, 4, 2];

for (let i = 0; i < arr.length - 1; i++) {
    for( let j = 0 ; j < arr.length -1; j++){
        if (arr[j] === 0) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
 
}

console.log(arr);
