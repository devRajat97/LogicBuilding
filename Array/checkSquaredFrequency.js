// Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

let arr1 = [1,2,3,4,5]
let arr2 = [1,25,9,16,4]

function check(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    else{
        for( let i = 0 ; i< arr1.length; i++){
            let found = false
            for(let j = 0 ; j < arr1.length; j++){
                if(arr1[i] * arr1[i] === arr2[j] ){
                    found = true
                    break;
                }
            }
            if(!found) return false
        }
    }
    return true
}


console.log(check(arr1,arr2))