//imports object constructor from Letter letter.js
let Letter = require("./letter"),
    string = new Letter("bellwether"),
    string2 = new Letter("idiosyncratic"),
    string3 = new Letter("luminescent"),
    string4 = new Letter("magnanimous"),
    string5 = new Letter("perfidious");

    
//Word object constructor and game rules
function Word() {
    this.arr = [];    

    this.pushToArray = (str) => {
        this.arr.push(str)
    }
    
    this.gameRules = (mysteryWord, hidden, userGuess) => {
        for(let i=0; i<mysteryWord.length; i++){
            if(hidden[i] === userGuess.toLowerCase()){
                mysteryWord.splice(i,1,userGuess.toLowerCase()); 
            }
        }        

        return mysteryWord.indexOf("-") !== -1 ? wordGuess() : console.log("That's right the mystery word is " + mysteryWord.join("") + ".\nCongrats you won!");

    }
    
}

//sample object from Word constructor
let sample = new Word();

//pushes letter objects into sample
sample.pushToArray(string.str);
sample.pushToArray(string2.str);
sample.pushToArray(string3.str);
sample.pushToArray(string4.str);
sample.pushToArray(string5.str);

//exports sample to index.js
module.exports = sample;