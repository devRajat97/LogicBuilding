// let obj1 = {user : "rajat" , type : 1} 
//    let obj2 = {location : "indore"}
//    output = obj1 = {user : "rajat" , type : 1,location : "indore"}

let obj1 = {user : "rajat" , type : 1} 
let obj2 = {location : "indore"}

for(let key in obj2){
 obj1[key] = obj2[key]
}
console.log(obj1)