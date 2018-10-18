let inquirer = require("inquirer"),
    chalk = require("chalk"),
    Word = require("./Word"),
    words = require("./words");

class Game {
    constructor() {
        let self = this;

        //sets up guesses left
        this.play = () => {
            this.guessesLeft = 13;
            this.nextWord();
        }

        //selects random word
        this.nextWord = () => {
            let randWord = words[Math.floor(Math.random() * words.length)];
            this.currentWord = new Word(randWord);
            console.log("\n" + this.currentWord + "\n");
            this.makeGuess();
        }

        //ends game if guesses are out or gives another opporutnity to guess
        this.makeGuess = () => {
            this.askForLetter().then(() => {
                if (self.guessesLeft < 1) {
                    console.log(
                        "GAME OVER. No guesses left! Word was: \"" + self.currentWord.getSolution() + "\"\n"
                    );
                    self.askToPlayAgain();
                }
                else if (self.currentWord.guessedCorrectly()) {
                    console.log("That's right! Guess the next word.");
                    self.guessesLeft = 10;
                    self.nextWord();

                }
                else {
                    self.makeGuess();
                }
            });
        }

        //if game over give chance to play again
        this.askToPlayAgain = () => {
            inquirer
                .prompt([
                    {
                        type: "confirm",
                        name: "choice",
                        message: "New game?"
                    }
                ])
                .then(function (val) {
                    return val.choice ? self.play() : self.quit;
                });
        }


        //prompts user to guess a letter and advises if it is right or wrong
        this.askForLetter = () => {
            return inquirer
                .prompt([
                    {
                        type: "input",
                        name: "choice",
                        message: "Guess a letter!",
                        validate: val => {
                            return /[a-z]/gi.test(val);
                        }
                    }
                ])
                .then(val => {
                    let didGuessCorrectly = self.currentWord.guessLetter(val.choice);
                    if (didGuessCorrectly) {
                        console.log(chalk.green("\nThat's right!!!\n"));

                    }
                    else {
                        self.guessesLeft--;
                        console.log(chalk.red("\nSorry, wrong guess.\n"));
                        console.log(self.guessesLeft + " guesses left!!!\n");
                    }
                });
        }

        //after game over if play opts not to play gain
        this.quit = () => {
            console.log("\nSee ya later!");
            process.exit(0);
        }


    }
}

module.exports = Game;
