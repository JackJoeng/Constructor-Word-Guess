var prompt = require("prompt");
var List = require('./list.js');
var hangmanGame = new List();
var userGuess = 10;

	prompt.start(); 
	startGame(userGuess);
		function startGame(guesses){
			console.log("Guesses left: " + guesses);
			console.log("________________");
			if(hangmanGame.currentWord.compare() == true){
				console.log("________________");
				console.log("You Win!!!");
				return;
			}
			if(guesses === 0){
				console.log("________________");
				console.log("Game Over!");
				return;
			}

		console.log(hangmanGame.currentWord.display());

	prompt.get(["enterYourGuess"], function(err, result){
		if(err){
			return err;
		}
		if(hangmanGame.currentWord.foundIt(result.enterYourGuess) == false){
			guesses --;
		}
		startGame(guesses);

	});
}



