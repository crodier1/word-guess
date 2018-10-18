class Letter {
  constructor(char){
    
    this.char = char

    //if the word has been guess display the character else the underscore
    this.toString = () => {
      return this.visible ? this.char : "_";
    }

    //return the letter if guessed correctly
    this.getSolution = () => {
      return this.char;
    }

    //if the character guesed is correct then make the character visible
    this.guess = charGuess => {
      if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
      }

      return false;
    }

  }
}

module.exports = Letter;
