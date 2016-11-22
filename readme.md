# Project 1: Battleship

## Josh Owen WDI8

The purpose of project 1 was to create a basic game using HTML, CSS, and JavaScript. I chose to make a one player version of the board game Battleship. The game generates a randomized board layout and selections on the game board are made via mouse clicks. The game provides feedback to the player with messages of Hit and Miss and a decrementing message of how many torpedoes(guesses) are remaining. There is also a reset button.

## Sample Code for ship generation
while (ship1 == ship2 || ship2 == ship3 || ship1 == ship3) {


// Using variables to save our ship positions
  var ship1 = Math.floor(Math.random() * 26);
  var ship2 = Math.floor(Math.random() * 26);
  var ship3 = Math.floor(Math.random() * 26);
}
var boxes = document.getElementsByClassName("space");
//Using a for loop to hide the ships
for(var i = 0; i < boxes.length; i++) {
  // Declare variable to hold each single box
  var box = boxes[i];
