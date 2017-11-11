// PSEUDOCODE
//Start new game (loop).
//select random words for user to guess.
//convert the word to an array vs. string
//Determine number of letters.
//replace letters with underscores.
//set up defaults (ie. guesses to 12)
//Captures keyboard input (letter).
//determine if letter is in the word ie. right guess or wrong guess.
//determine position of correct guess, add some true or false statement.
//replace the underscore with the correctly guessed letter.
//keep track of number of guesses remaining (start at 12)
//keep track of letters guessed 
//display letters guessed
//do not count repeated letters against player
//keep track of any wins
//start new game once number of guesses reaches zero
//mark win or loss (keep track therefore another loop)
//set guesses remaining back to 12
//clear letters guessed
//grab another random word
//remove current word
//remove letters already guessed

//Start Game

//-----------------------------
//set variables
//-------------------------
//variables for letters and words
var randomWordArray = ["battle","king","persian","traitor","honor","glory","victory"];
var guessesRemaining = 12;
//global variable as an array
var currentWord = "";
var answerSpaces = [];
var currentLetters = [];
var lettersGuessed = [];
var wins = 0;
var losses = 0;


function startGame () {
	//replaces letters guessed with an empty array for the letters guessed
		lettersGuessed = [];
			//empty the placeholders for answer spaces otherwise if your next
			//
		answerSpaces = [];
		guessesRemaining = 12;
		currentWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
		currentLetters = currentWord.split("");
		console.log(currentLetters);
			for (var i = 0; i < currentWord.length; i++) {
					answerSpaces[i] = " _ ";
			}

			console.log(answerSpaces);
			$("#current-word").text(answerSpaces.join(""));		
}

console.log("Test: " + guessesRemaining);




	//Captures keyboard input (letter)
document.onkeyup = function(event) {
	var guess = event.key;
//check if guess already exists in lettersGuessed ie. duplicate guesses won't count against player
	if (lettersGuessed.includes(guess)===false) {

		console.log(guess)
		var xGuess = false;

		for (var j = 0; j < currentLetters.length; j++) {
			if (currentLetters[j] === guess) {
				xGuess = true;
				
			}
		
		}
	//replace underscores with correctly guessed letters		
		if (xGuess == true) { 
			for (var j = 0; j < currentLetters.length; j++) {
				if (currentLetters[j] === guess) {
					answerSpaces[j] = guess;
				}
			}

		} 

	//
		else { 
			console.log("xGuess still false? " + xGuess);
			guessesRemaining--;
			lettersGuessed.push(guess);
		 	console.log(lettersGuessed);
		 	console.log(answerSpaces + "array test");
			console.log(guessesRemaining);
		}

		$("#counter").text(guessesRemaining);
		$("#letters-guessed").text(lettersGuessed);
		$("#current-word").text(answerSpaces.join(""));
		winsDetermined ();
	}
	else {
		alert("You already guessed this letter!");
	}
}

console.log(guessesRemaining);

//new code 09NOV17
function winsDetermined () {		
	if (currentLetters.toString() === answerSpaces.toString()) {
		wins++;
		document.getElementById("wins-count").innerHTML = wins;
		alert("THIS...IS...SPARTA!");
		console.log ("You win");
		console.log(wins);
		startGame();
		//calculate loss
	} else if (guessesRemaining === 0) {
		losses++;
		alert("You lose! No glory!");
		console.log ("You lose");
		console.log(losses);
		startGame();
	}
}
startGame();
newFunction();