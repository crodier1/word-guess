let Letter = require("./Letter");

class Word {
  constructor(word) {

    //splits string into an array by characters
    this.letters = word.split("").map(char => {
      return new Letter(char);
    })

    //return the correctly guessed word as a string
    this.getSolution = () => {
      return this.letters.map(letter => {
        return letter.getSolution();
      }).join("");
    }

    //joing multi-word array as a string
    this.toString = () => {
      return this.letters.join(" ");
    }

    //checks if letters matched the letter guessed
    this.guessLetter = char => {

      let foundLetter = false;
      this.letters.forEach(letter => {
        if (letter.guess(char)) foundLetter = true;

      });

      console.log("\n" + this + "\n");
      return foundLetter;
    }

    //returns true if all letters were gussed right
    this.guessedCorrectly = () => {
      return this.letters.every(letter => {
        return letter.visible;
      });
    }


  }
}

module.exports = Word;
