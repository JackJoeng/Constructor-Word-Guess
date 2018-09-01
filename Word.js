var Letter = require('./letter.js');

var Word = function(guessWord){
	this.guessWord = guessWord;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];
	this.grabLetters = function(){
		for(var i = 0; i <this.guessWord.length; i++){
			var theNewLetter = new Letter(this.guessWord[i]);
			this.guessedWord.push(theNewLetter);

		}
	}
	this.grabLetters();

	this.foundIt = function(guessLetter){
		for(var i = 0; i <this.guesses.length; i++){
			if(guessLetter == this.guesses[i]){
				return true;
			}
		}
		console.log(guessLetter);
		var added = false;

		this.guesses.push(guessLetter);
		for(var i = 0; i <this.guessedWord.length;i++){
			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}


 	this.compare = function(){
 		for(var i = 0; i < this.guessWord.length; i++){
 			if(this.guessWord.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}

	this.display = function(){
		var emptyString = "";
			
		for(var i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].current + " ";
		}
		return emptyString;
	}
} 

module.exports = Word;


