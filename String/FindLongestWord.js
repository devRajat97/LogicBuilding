
// 1. Program to find longest word in a given sentence ?

const LongestWord = (sentence) => {
  let current = "";
  let max = "";

  for (let i = 0; i < sentence.length; i++) {
    current += sentence[i];
    
    if(sentence[i] == " " || i == sentence.length-1){
      if(current.length > max.length){
        max = current
        current = ""
      }
    }
   
  }
  console.log(max)

};

LongestWord("hello world of javascript");
