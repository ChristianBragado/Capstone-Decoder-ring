// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //Create a polybius table to encode and decode the input
  
  const encodedPolybius = {
      'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51',
      'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j': '42', 'k':'52',
      'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53',
      'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
      'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55'
    }

    const decodedPolybius = {
      '11':'a', '21':'b', '31':'c', '41':'d', '51':'e',
      '12':'f', '22':'g', '32':'h', '42':'(i/j)', '52':'k',
      '13':'l', '23':'m', '33':'n', '43':'o', '53':'p',
      '14':'q', '24':'r', '34':'s', '44':'t', '54':'u',
      '15':'v', '25':'w', '35':'x', '45':'y', '55':'z'
    }

  function polybius(input, encode = true) {
    // We need to convert the input into lowercase for better compatability
    input = input.toLowerCase();
    encryptedMessage = "";
    if (encode == true) {
      for (let i = 0; i < input.length; i++) {
        //we need to be able to handle spaces for the encoding and decoding
        if (input[i] == " ") {
          encryptedMessage += " ";
        } else {
          encryptedMessage += encodedPolybius[input[i]];
        }
      }
      return encryptedMessage;
    } else {
      // Changing 1 space strings to 2 so that the string length stays as an even number
      let decryptedMessage = "";
      let evenSpaced = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] != " ") {
          evenSpaced += input[i];
        } else {
          evenSpaced += "  ";
        }
      }
      if (evenSpaced.length % 2 != 0) {
        return false;
      }
      for (let i = 0; i < evenSpaced.length; i += 2) {
        if (evenSpaced[i] != " ") {
          let code = "";
          code += evenSpaced[i];
          code += evenSpaced[i + 1];
          decryptedMessage += decodedPolybius[code];
        }
        //This will Change the double spaced message into single spaced
        else {
          decryptedMessage += " ";
        }
      }
      return decryptedMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
