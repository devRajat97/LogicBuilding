let arr = [1,4,6,7,8,4,6,8]
let newLength = 0

for(let i = 0 ; i< arr.length; i++){
    if( arr.indexOf(arr[i]) == i ){
        arr[newLength] = arr[i]
        newLength++   
}
}
arr.length = newLength
console.log(arr)
