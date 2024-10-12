// Write a program to remove duplicates from an array ?

let arr = [1,2,3,4,5,2,4,3,8]
let uniqArry = []

for(let i=0 ;i<=arr.length-1; i++){
    if(arr.indexOf(arr[i]) == i){
        uniqArry.push(arr[i])
    }
}
console.log(uniqArry)