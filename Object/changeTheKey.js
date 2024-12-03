// input : [{id : 1, userName : "mahesh"}, {id : 2 , userName : "akshay"}] outuput : [{id : 1 , value : mahesh}, {id : 2 , value : "akshay"}]

let arr = [
  { id: 1, userName: "mahesh" },
  { id: 2, userName: "akshay" },
];

for (let i = 0; i < arr.length; i++) {
  let newObj = {};
  for (let key in arr[i]) {
    if (key === "userName") {
      newObj["value"] = arr[i][key];
    } else {
      newObj[key] = arr[i][key];
    }
  }
  arr[i] = newObj;
}

console.log(arr);
