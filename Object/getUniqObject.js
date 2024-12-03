// 10. Write logic to get unique objects from below array ?
//  I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
//  O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}]

let obj = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" },
];

let unique = []
let seeName = {}

for(let i=0 ; i< obj.length ; i++){
    for(let key in obj[i]){
    let value = obj[i][key]
        if(!seeName[value]){
            seeName[value] = true
            unique.push(obj[i])
        }
    }
}
console.log(unique)