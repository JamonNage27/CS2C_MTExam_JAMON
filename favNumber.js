//favNumber.js

let favNum = 27;
let userGuess = null;

while (userGuess !== favNum) {
  userGuess = Number(prompt("Guess the favorite number: "));

 if (userGuess > favNum) {
    console.log("Too high!");
  } else if (userGuess < favNum) {
    console.log("Too low!");
  } else {
    console.log("correct! you guessed the favorite number.");
  }
}
   
