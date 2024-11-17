// find missing element 

let arr = [2,5,5,1,7,5,4,8];
let max = 10;

for(let num = 1; num <= max; num++){
  let found = false;

  for(let i = 0; i < arr.length; i++ ){
    if(arr[i] == num)
      found = true
  }
  if(!found) console.log(num)

}