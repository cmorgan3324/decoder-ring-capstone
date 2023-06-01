
const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    //Return false if shift is less than -25 greater than 25, 0, or undefined/doesnt exist
    if (shift < -25 || shift > 25 || shift === 0 || !shift) {
      return false;
    } //Switch shift direction if encode is false (decode)
    else if (encode === false) {
      shift = -shift;
    }
    // Convert input message into array of ASCII character values
    const inputToCharCode = ([...input]) => {
      // [...input] => returns array of individual characters
      const charCodeArray = input.map((char) => {
        let lowerCaseChar = char.toLowerCase();
        return lowerCaseChar.charCodeAt(0);
      });
      return charCodeArray; // [94, 111, 32, ...]
    };
    let shiftedCodeArray = [];
    // Loop through array and implement shift w/ ASCII code values
    for (let i = 0; i < inputToCharCode(input).length; i++) {
      let letter = inputToCharCode(input)[i];
      if (letter >= 97 && letter <= 122) {
        letter += shift;
        shiftedCodeArray.push(letter);
      } else {
        shiftedCodeArray.push(letter);
      }
    }

    // Convert unicode array back to encoded characters
    let encodedMessageArray = [];

    for (let i = 0; i < shiftedCodeArray.length; i++) {
      let letter = shiftedCodeArray[i];
      //Wrap letters shifted off the end to the beginning
      if (letter > 122) {
        letter = 96 + (letter - 122);
      } //Wrap letters shifted off the top to the end
      else if (letter >= 72 && letter < 97) {
        letter = 123 - (97 - letter);
      }
      let newLetter = String.fromCharCode(letter);
      encodedMessageArray.push(newLetter);
    }
    // Join method to get encoded message into string
    return encodedMessageArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
