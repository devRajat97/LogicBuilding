// if number is odd print table

let arr = [1,3,5,4,7,8,9]

for(let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 != 0){
        for(let j = 1 ; j<= 10; j++){
            console.log(arr[i] * j)
        }
    }
}