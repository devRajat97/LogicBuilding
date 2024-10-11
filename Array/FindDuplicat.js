// Find Duplicat From Array

let arr = [1,2,3,7,3,5,2]

for(let i =0 ; i<= arr.length-1;i++){
    if(arr.indexOf(arr[i]) != i){
        console.log(arr[i])
    }
}
