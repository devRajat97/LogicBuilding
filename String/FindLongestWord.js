// Program to find longest word in a given sentence ?

const FindLongestWord = (sentence) => {
  let largest = "";
  let current = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence.length === i || sentence[i] == " ") {
      if (current.length >= largest.length) {
        largest = current;
      }
      current = "";
    } else {
      current += sentence[i];
    }
  }
  console.log(largest);
};

FindLongestWord("I love programming in JavaScript");
