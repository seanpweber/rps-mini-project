//define variables
var wins = 0;
var ties = 0;
var losses = 0;

var gameChoices = ["R","P","S"];

var runAgain = true;

//indicates start of game function
function game(){

//computer guess
var compGuess = gameChoices[Math.floor(Math.random() * gameChoices.length)];

//prompt user, get user's guess
window.alert("Rock Paper Scissors!");

var userGuess = window.prompt("Please enter a choice of R, P, or S");
userGuess = userGuess.toLocaleUpperCase();
console.log(userGuess);
while((userGuess != "R") && (userGuess != "P") && (userGuess != "S")){
    userGuess = window.prompt("Please enter a choice of R, P, or S");
    userGuess = userGuess.toLocaleUpperCase();
    console.log(userGuess);
}

window.alert("Computer guessed: " + compGuess);

//compare variables to check if user won, lost or tied
if(userGuess == compGuess){
    ties++;
    window.alert("It's a tie!");
}
else if ((userGuess == "R" && compGuess == "S") || (userGuess == "P" && compGuess == "R") || (userGuess == "S" && compGuess == "P")){
    wins++;
    window.alert("You win!");
}
else {
    losses++;
    window.alert("You lose!");
}

//alert user of stats after each round
alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses);
runAgain = window.confirm("Would you like to play again?");

console.log(runAgain);
}

//runs game
game();

//runs game again
while(runAgain){
    game();
}