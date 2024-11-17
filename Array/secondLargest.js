let str = "hello world of javascript";

function findLargestWord(str) {
  let maxWord = "";       // To store the largest word found
  let currentWord = "";    // To build each word as we traverse the string

  for (let i = 0; i <= str.length; i++) {
    if (i === str.length || str[i] === ' ') {
      // End of a word when a space or end of the string is found
      if (currentWord.length > maxWord.length) {
        maxWord = currentWord; // Update maxWord if currentWord is longer
      }
      currentWord = ""; // Reset currentWord for the next word
    } else {
      // Append character to the current word
      currentWord += str[i];
    }
  }

  return maxWord;
}

console.log(findLargestWord(str)); // Output: "javascript"
