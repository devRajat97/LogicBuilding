
// 
let str = "hello world of javascript how are you?"
let current = ""
let max = ""

for(let i =0; i<str.length ; i++){
    current += str[i]
    if(str[i] == " " || i == str.length-1){
        if(current.length > max.length){
            max = current
        }
        current = ''
    }
}
console.log(max)