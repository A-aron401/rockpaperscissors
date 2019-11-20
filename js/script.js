// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerChoice;
var randomNumber;
var winner;
$("#shoot").click(function() {
var userChoice= $("#input").val();
console.log("checking: " + userChoice);
 $("#userChoice").text(userChoice);

//console.log("text");
randomNumber = Math.ceil(Math.random()*3);
if (randomNumber=== 3) {
    $("#computerChoice").text("rock");
} else if(randomNumber=== 2) {
    $("#computerChoice").text("paper");
} else {
    $("#computerChoice").text("scissors")
}
if ((userChoice=== "paper"&& computerChoice==="rock")|| (userChoice==="rock"&& computerChoice=== "scissors")|| (userChoice=== "scissors"&& computerChoice=== "paper")) {
 $("#result").text("Winner");
} else if((userChoice=== "paper"&& computerChoice=== "paper")|| (userChoice==="rock"&& computerChoice=== "rock")|| (userChoice==="scissors"&& computerChoice=== "scissors")){
    $("#result").text("Tied");
} else if ((userChoice=== "rock"&& computerChoice=== "paper")|| (userChoice=== "scissors"&& computerChoice=== "rock")|| (userChoice=== "paper"&& computerChoice=== "scissors")){
    $("#result").text("Lose");
} else{
    $("#result").text("Debugging");
}
console.log("hi");
});


// DOCUMENT READY FUNCTION BELOW

