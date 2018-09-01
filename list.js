var Word = require("./word.js");


var List = function(){
	this.wordList = ["python","columbia","jquery","bootstrap","mongo","cookies","heroku"];

	this.randomWord = this.wordList[ Math.floor(Math.random() * this.wordList.length)];
	this.currentWord = new Word(this.randomWord);
	
}


module.exports = List;