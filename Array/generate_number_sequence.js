let arr = [1,5,3,8,4]
let max = 10;
let newArry = []

for(let num = 1 ; num <= max ; num++ ){
    let found = false;
    for(let i = 0 ; i <= arr.length ; i++){
        if(arr[i] == num){
            found = true
            newArry.push(num)
        }
    }
    if(!found) newArry.push(num)
}
console.log(newArry)