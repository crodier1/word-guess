//imports objects from words.js, sets up inquirier & chooses a random word.
let sample = require("./word"),
    inquirer = require("inquirer"),
    randomI = Math.floor(Math.random() * 5),
    mysteryWord = "-".repeat(sample.arr[randomI].length).split(""),
    hidden = sample.arr[randomI];

//prompt user to guess a letter
wordGuess = () => {
    inquirer.prompt([
        {
            name: "guess",            
            message: mysteryWord.join("") + "\n" + "Guess a letter",
            type: "input"         
        }
    ]).then((res) => {
        let userGuess = res.guess;

        sample.gameRules(mysteryWord, hidden, userGuess);

        /*
        //game rules code for reference
        for(let i=0; i<mysteryWord.length; i++){
            if(hidden[i] === res.guess.toLowerCase()){
                mysteryWord.splice(i,1,res.guess.toLowerCase()); 
            }
        }        

        return mysteryWord.indexOf("-") !== -1 ? wordGuess() : console.log("That's right the mystery word is " + mysteryWord.join("") + ".\nCongrats you won!");
        */
        
    })
}

wordGuess();
