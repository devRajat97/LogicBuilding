// *****
//  ****
//   ***
//    **
//     *

for(let i = 0; i<=4 ; i++){
    let stars = ""
    for(let j=0; j<=4; j++){
        if(i>j) stars += " "
        else stars += "*"
    }
    console.log(stars)
}