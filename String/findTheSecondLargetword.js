// find the second largest word from string

const secondLargestword = (string) => {
  let current = "";
  let largest = "";
  let secondLargest = "";
  for (let i = 0; i < string.length; i++) {
    current += string[i]
    if (string[i] == " " || i == string.length - 1) {
      if (current > largest) {
        largest = current;
        current = "";
      } else if (current > secondLargest) {
        secondLargest = current;
        current = "";
      } else {
        current = ""
      }
    }
  }
  console.log(secondLargest)
};

secondLargestword("hello world of javascript oaiseooasdijfaoiwejfoajsdj hii");
