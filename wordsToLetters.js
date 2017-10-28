// I was trying to transform the whole words into individual letter objects, but couldn't figure out how

var Word = Function Word() {
  // couldn't figure out what to do here
}

var word = new Word();
for(var i = 0; i < wordFromWordBank; i++){
  var letter = new Letter(wordFromWordBank[i]) //a, or b, or c...
  word.letters.push(letter);
}

module.exports = word;
