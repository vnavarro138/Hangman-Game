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
	//empty the placeholders for answer spaces, otherwise if your next word 
	//is shorter than the previous one guessed correctly, the letters will
	//still be there appended to your next word's underscores
		answerSpaces = [];
	//reset guesses remaining to 12 
		guessesRemaining = 12;
	//get a new random word from random word array
		currentWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
	//split the word to be guessed into an array, each letter is it's own index	
		currentLetters = currentWord.split("");
		console.log(currentLetters);
	//replace the word to be guessed with answer spaces
			for (var i = 0; i < currentWord.length; i++) {
					answerSpaces[i] = " _ ";
			}

			console.log(answerSpaces);
			$("#current-word").text(answerSpaces.join(""));		
}

console.log("Test: " + guessesRemaining);



function newFunction () {
	//Captures keyboard input (letter)
document.onkeyup = function(event) {

		var guess = event.key;
		console.log(guess)
		var xGuess = false;

		for (var j = 0; j < currentLetters.length; j++) {
			if (currentLetters[j] === guess) {
				xGuess = true;
				
			}
		
		}
			
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