console.log("Game is working thus far...");

var WordBank = require('./words.js');
var wordArray = new WordBank();

var letters = require('./letters.js');
var worToLetters = require('./wordsToLetters.js')

// make a new word level by pulling a word from the array in words.js
function Play(currentWord, guessesLeft, alreadyGuessed) {

  var currentWord = new Play(wordArray.geekWords[Math.floor(Math.random() * wordArray.geekWords.length)]);
  currentWord.makeLetters();
  this.guessesLeft = 10;
  this.alreadyGuessed = [];

  console.log(this.currentWord.letterShow());
  console.log("Guesses to go: " + this.guessesLeft);

    if (playerGuess === letter) {
      this.isCorrect = function(playerGuess) {
        console.log(this.currentWord);

        var isCorrect = this.currentWord.checkForLetter(playerGuess);
        console.log("You guessed a correct letter!");
        this.guessesLeft --;
      };
    }
    else {
      this.isWrong = function(playerGuess) {
        console.log(this.currentWord);

        var isWrong = this.currentWord.checkForLetter(playerGuess);
        console.log("You chose poorly.");
        this.guessesLeft --;
      }
    }
};


Play();
