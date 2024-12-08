let arr1 = [1,4,6,7,8]
let arr2 = [2,4,5]
let arr3 = []
let i = 0
let j = 0

while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        arr3.push(arr1[i])
        i++
    }else{
        arr3.push(arr2[j])
        j++
    }
}

while (i < arr1.length) {
    arr3.push(arr1[i]);
    i++;
}

// Add any remaining elements from arr2
while (j < arr2.length) {
    arr3.push(arr2[j]);
    j++;
}
console.log(arr3)