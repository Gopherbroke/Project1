
var shipsFound = 0;
var guess;
var box;


var myMove = function() {
audio.src =  sink;
}
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
  // Creating an onclick event on the variabled we just declared
 box.onclick = function() {
    var str = this.getAttribute('id');
    var position = parseInt(str);
    torpedoes();

    //stop all guesses once player has run out of torpedoes
    if (torpedostack < 0) {
      $( "body" ).off( "click", ".space", boxes);
    } //stop all guesses once all three ships have been hit
    else if (shipsFound === 3) {
      $( "body" ).off( "click", ".space", boxes);
    }  //alert("You Win!");
    else if (torpedostack === 0 && shipsFound === 3) {
      $("#ammo").html("You Win!");
    }
    else if (position == ship1 || position == ship2 || position == ship3) {
        // If we get a hit, the box text changes to red
        this.style.color = "red";
        //creates a running tally of ships hit
        shipsFound++;
        if (shipsFound === 3) {
              //Create a win response from the game
            $("#gameFeedback").prepend("<p>You Win!</p>");
        }
        else {
          //Create a hit response and adds it to the list of responses
            $("#gameFeedback").prepend("<p>That's a hit!</p>");
          // Add a sound effect for each hit
            $("#scream")[0].play();
        };
    }
    else {
          //changes background to grey on chosen spaces that were misses
        this.style.backgroundColor = "grey";
          //Create a miss response and adds it to the list of responses
        $("#gameFeedback").prepend("<p>Miss</p>");
      //  $("#gameHistory").prepend("Miss!<br>");
  }
}
}
//creating an accordion panel for the instructions
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
//Setting total number of shots/guesses to 16
var torpedostack = 16;

function torpedoes() {
  console.log("Torpedo fired");
  //decrementing the torpedostack vaiable
  --torpedostack;
  if (torpedostack >= 0) {
    //Updating the #ammo div
    $("#ammo").html("You have " + torpedostack + " torpedoes remaining");
  }
  else if (shipsFound === 3) {
    //turning off guesses once the game has been won
    $( "body" ).off( "click", ".space", boxes);
  }
  else if (torpedostack === 0 && shipsFound === 3) {
    //redundant win response
    $("#ammo").html("You Win!");
  }
  else { //alert("Game Over");
    $("#ammo").html("Game Over");
    }
}
