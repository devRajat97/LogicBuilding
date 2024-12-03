let arr1 =  [{user : "rajat", type : 1 , location : "indore"}]
let arr2 = [{user : "sanjil", type : 2 , location : "ujjain"} ]
let arr3 = []

for(let i = 0 ; i < arr1.length ; i++){
    arr3.push(arr1[i])
}

for(let i = 0 ; i< arr2.length; i++){
    arr3.push(arr2[i])
}

console.log(arr3)