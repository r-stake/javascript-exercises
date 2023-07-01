const reverseString = function(string) {
  const wordArray = string.split(" ");
  if (wordArray.length === 1) {
    const charArray = string.split("");
    charArray.reverse();
    let reversedArray = charArray.join("");
    return reversedArray;
  }
  let output = "";
  let reversedArray = wordArray.reverse();
  for (let i = 0; i < wordArray.length; i++) {
    let currentWord = reversedArray[i];
    const charArray = currentWord.split("");
    charArray.reverse();
    let currentWordReversed = charArray.join("")
    output += `${currentWordReversed} `
  }
  reversedArray = output.trimEnd();
  return reversedArray;
};

// Do not edit below this line
module.exports = reverseString;
