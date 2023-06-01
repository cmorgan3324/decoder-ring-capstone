
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // Returns false if alphabet isnt 26 characters
    if (!alphabet || alphabet.length !== 26) return false;

    //Returns false if any duplicate characters
    let alphabetCharacters = "";

    for (let i = 0; i < alphabet.length; i++) {
      const character = alphabet[i];
      if (!alphabetCharacters.includes(character)) {
        alphabetCharacters += character;
      } else {
        return false;
      }
    }

    let outputString = "";

    // Decoding
    if (encode === false) {
      for (let i = 0; i < input.length; i++) {
        let letter = input[i].toLowerCase();
        if (letter === " ") {
          outputString += " ";
        } else {
          outputString += standardAlphabet[alphabet.indexOf(letter)];
        }
      }
      return outputString;
    }

    // Encoding
    for (let i = 0; i < input.length; i++) {
      let letter = input[i].toLowerCase();
      if (letter === " ") {
        outputString += " ";
      } else {
        outputString += alphabet[standardAlphabet.indexOf(letter)];
      }
    }
    return outputString;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
