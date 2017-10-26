console.log("Game is working thus far...");

var WordBank = require('./words.js');
var wordArray = new WordBank();

var letters = require('./letters.js');

// make a new word level by pulling a word from the array in words.js
function Play() {

  var currentWord = new Play(wordArray.geekWords[Math.floor(Math.random() * wordArray.geekWords.length)]);
  currentWord.makeLetters();

  this.guessesLeft = 10;
  this.alreadyGuessed = [];
  this.status = 'start';

  console.log(this.currentWord.letterShow());
  console.log(" Guesses to go: " + this.guessesLeft);

  Play.prototype.isCorrect = function(playerGuess) {
    console.log(this.currentWord);

    var isCorrect = this.currentWord.checkForLetter(playerGuess);
    console.log("You guess a correct letter!");
  };

  Play.prototype.isWrong = function(playerGuess) {
    console.log(this.currentWord);

    var isWrong = this.currentWord.checkForLetter(playerGuess);
    console.log("You chose poorly.");
  }
};

function makeLetters() {

};

// Play();
