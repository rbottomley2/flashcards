var flashcardConstructor = require("./flashcard-constructor");

var inquirer = require("inquirer");

// array to hold the deck of flashcards that the user selects in the first prompt
var deck;

// first prompt to user to select a deck of flashcards from 4 different categories.
inquirer.prompt([{
	type: "list",
    message: "Which Flashcard Deck Category Would you like to choose?",
    choices: ["science", "\npresidents", "\nsports", "\nmovies"],
    name: "deckchoices"
}]).then (function(answer){
		console.log(answer);
		switch(answer.deckchoices){
  			case "science":
  				
    			deck = require('./science.js');
    			// function to prompt user to interact with the science deck and 
    			userPrompt2(deck);
  			break;

  			case "presidents":
    			var deck = require('./presidents.js');
    			userPrompt2(deck);
 			break;

  			case "sports":
		    	var deck = require('./sports.js');
		    	userPrompt2(deck);
  			break;

  			case "movies":
    			var deck = require('./movies.js');
    			userPrompt2();
  			break;

  			default:
    			console.log("Please select either: 'science', 'presidents', 'sports', or 'movies' ");
  			break;
		}

	});



// Group of Functions to Manipulate Deck Cards
var answerCard = function(deck){
	console.log("We're There!");
	console.log(deck[0].front);
	console.log(deck[0].back);
		inquirer.prompt([{
			type: "input",
			message: "Here is your Question?" + "\n" + deck[0].front,
			name: "cardanswer"
			}]).then (function(answer){
				if(answer.cardanswer===deck[0].back) {
					console.log("Congratulations You Answered Correctly!");
				} else {
					console.log("You Answered Incorrectly");
				}
			})
	
}
// Function to flip the flashcard over
var flipCard = function(deck){
	console.log(deck[0].back);
}

var nextCard = function(deck){
	// write correct deck reference
}

var exitGame = function(deck){

//End the Game
}

// second User Prompt to allow the User to Interact with the Chosen Flashcard Deck
var userPrompt2 = function(deck) {
	console.log("This is from User Prompt 2", deck);
inquirer.prompt([{
	type: "list",
    message: "Would you like to guess the answer the card, flip it to retrieve the answer, move to the next card, or Exit the Game?",
    choices: ["answer", "\nflip", "\nmove", "\nexit"],
    name: "deckchoices"
}]).then(function(answer){

		switch(answer.deckchoices){
  			case "answer":
    			answerCard(deck);
  			break;

  			case "flip":
    			flipCard(deck);
 			break;

  			case "move":
		    	nextCard(deck);
  			break;

  			case "exit":
    			exitGame(deck);
  			break;

  			default:
    			console.log("Please select either: 'answer', '\nflip', '\nmove', or '\nexit' ");
  			break;
		}

	});
}