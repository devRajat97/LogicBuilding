
// prime number up to 50 

let number = 50
let i, j;

for(i = 2; i<=50; i++){
  for( j=2 ; j< i; j++){
   if(i%j == 0){
    break
   }
  }
  if(j == i ){
    console.log(i)
  }
}