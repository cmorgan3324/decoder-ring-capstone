
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polybiusSquare = [
    { letter: "a", num: "11" },
    { letter: "b", num: "21" },
    { letter: "c", num: "31" },
    { letter: "d", num: "41" },
    { letter: "e", num: "51" },
    { letter: "f", num: "12" },
    { letter: "g", num: "22" },
    { letter: "h", num: "32" },
    { letter: "i/j", num: "42" },
    { letter: "k", num: "52" },
    { letter: "l", num: "13" },
    { letter: "m", num: "23" },
    { letter: "n", num: "33" },
    { letter: "o", num: "43" },
    { letter: "p", num: "53" },
    { letter: "q", num: "14" },
    { letter: "r", num: "24" },
    { letter: "s", num: "34" },
    { letter: "t", num: "44" },
    { letter: "u", num: "54" },
    { letter: "v", num: "15" },
    { letter: "w", num: "25" },
    { letter: "x", num: "35" },
    { letter: "y", num: "45" },
    { letter: "z", num: "55" },
  ];

  function polybius(input, encode = true) {
    // your solution code here
    let outputString = "";

    // Decoding
    if (encode === false) {
      let noSpace = input.split(" ").join("");
      if (!(noSpace.length % 2 == 0)) return false;

      for (let i = 0; i < input.length; i += 2) {
        // Maintain space and skip to next iteration
        if (input[i] === " ") {
          outputString += " ";
          i++;
        }

        let number = input[i] + input[i + 1];
        if (number === "42") {
          outputString += "(i/j)";
        } else {
          let decoded = polybiusSquare.find((code) => number === code.num);
          outputString += decoded.letter;
        }
      }
      return outputString;
    }

    //Encoding
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        outputString += input[i];
      } else {
        let letter = input[i].toLowerCase();
        let encoded = polybiusSquare.find((code) =>
          code.letter.includes(letter)
        );
        outputString += encoded.num;
      }
    }
    return outputString;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

// console.log(polybius("thinkful")); //> "4432423352125413"
// console.log(polybius("Hello world")); //> '3251131343 2543241341'

// console.log(polybius("4432423352125413", false)); //> "th(i/j)nkful
// console.log(polybius("44324233521254134", false)); //> false
