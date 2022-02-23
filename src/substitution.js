// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const secretKey = {};
  // Defining that substitution alphabet must exist and be exactly 26 characters long
    if (!alphabet || alphabet.length < 26 || alphabet.length > 26) {return false};
    // This will be 97-122 char codes that match a through z (a-z)
    let charCount = 97;
     // iterate through the alphabet
    for(let i = 0; i <= 25; i++){ 
      // if a value in secretKey already exists (in alphabet[i]) we dont want our alphabet to match the input
      if (Object.values(secretKey).includes(alphabet[i])) { return false; } 
      else{
         // fill our object (secretKey) with normal alphabet keys paired with substitution keys (alphabet)
        secretKey[String.fromCharCode(charCount)] = alphabet[i]
        charCount++;
      }
      
    }
      // we want the input string to be all lowercase and single spaced for better usablility as an array
     const encryption = input.toLowerCase().split('');

      // encryption and decryption will happen here
    {
      // we need to iterate through each letter in our input
		 return encryption.map(letter => {  
       // iterate through each object in secretKey
		  	for(let flatLetter in secretKey){ 
           // set our keys value to substitutionLetter
		  		let substitutionLetter = secretKey[flatLetter];
           // This is to keep the spaces
          if (letter == " ") return " "; 
           // encode - if our input letter = key's string of flat letter, return the value of subsitutionLetter
		  		if (encode && letter == flatLetter) return substitutionLetter;
           // decode - if our input letter equals a substitution letter, return the flatLetter
          if (!encode && letter == substitutionLetter) return flatLetter; 
      }

		}).join('');
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


