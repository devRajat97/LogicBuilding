let str = "Rajat jain"
let count= {}

for(let i =0 ;i <= str.length-1; i++){
    let char = str[i]

    if(count[char]){
        count[char]++
    }else{
        count[char] = 1
    }
}
console.log(count)