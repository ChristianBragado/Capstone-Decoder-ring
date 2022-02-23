// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  function caesar(input, shift, encode = true) {
    // Creating alphabet array for shifting
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    // Creating a var results to return
    const results = [];
    // If shift is not a valid argument then return false
    if (shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false;
    }

    // when an input is given make it lowercase
    input = input.toLowerCase().split("");

    // if encode is true THEN we need to loop through the input
    if (encode === true) {
      // loop through the input and convert to unicode in order to shift
      input.forEach((char, index) => {
        // we need to make sure input is included in the alphabet variable
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              // new variable that will find the index and add the shift
              let index2 = index + shift;
              // If the shift is below 0 we need to add 26 if the shift is above 25 we subtract 26 to get
              // both ends of the array
              if (index2 < 0) {
                index2 = index2 + 26;
              }
              if (index2 > 25) {
                index2 = index2 - 26;
              }
              char2 = alphabet[index2];
              results.push(char2);
            }
          });
        } else {
          results.push(char);
        }
      });
    } else {
      input.forEach((char, index) => {
        if (alphabet.includes(char)) {
          alphabet.find((letter, index) => {
            if (char === letter) {
              let index2 = index - shift;
              if (index2 < 0) {
                index2 = index2 + 26;
              }
              if (index2 > 25) {
                index2 = index2 - 26;
              }
              char2 = alphabet[index2];
              results.push(char2);
            }
          });
        } else {
          results.push(char);
        }
      });
    }
    return results.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
