var Letter = function(letters){

	this.current = "_"
	this.guessLetters = letters;
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.guessLetters == letter){
			this.current = this.guessLetters; 
			return true;
		}
			return false;
	}
	this.letterShows = function(){
		return this.current;
	}
};

module.exports = Letter;