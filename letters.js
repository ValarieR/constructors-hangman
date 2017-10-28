// letter - I'm trying to set up a scenario in which letters are hidden initially
var letter = function Letter(name) {
  this.character = name;
  this.display = false;
  this.letterShow = function() {
    return !(this.display) ? "_" : this.character;
  };
};


module.exports = letter;
