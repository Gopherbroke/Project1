var shipsFound = 0;
var guess;
var box;

//var ship1 = #1;
var myMove = function() {
  console.log('what the what?');
}
while (ship1 == ship2 || ship2 == ship3 || ship1 == ship3) {
  // Using three variables to save our ship positions



  var ship1 = Math.floor(Math.random() * 26);
  var ship2 = Math.floor(Math.random() * 26);
  var ship3 = Math.floor(Math.random() * 26);
}
var boxes = document.getElementsByClassName("space");

for(var i = 0; i < boxes.length; i++) {
  // Declare variable to hold each single box
  var box = boxes[i];
  // Creating an onclick event on the variabled we just declared
 box.onclick = function() {
    var str = this.getAttribute('id');
    var position = parseInt(str);
    torpedoes();
  if (position == ship1 || position == ship2 || position == ship3) {
        // If we get a hit, the box changes to black
        this.style.color = "red";
        alert("That\'s a hit!")
        shipsFound++;
  } else {
    this.style.backgroundColor = "grey";
    alert("Miss");




    //document.getElementById("try").style.display = "block"
    //document.getElementById("success").style.display = "none"
  }
}
}

          // 1. Need to make sure Onclick function for torpedoes() when tile is clicked works
          // 2. Add Jquery selector function on click to change html of #ammo



//var ammoRemaining= (16 - guess);
/*var ammoRemaining = 16;
ammoRemaining--;
var z = ammoRemaining;
document.getElementById("demo").innerHTML = z;*/

var torpedostack = 16;

function torpedoes() {
  console.log("Torpedo fired");
  --torpedostack;
  if (torpedostack > 0) {
    $("#ammo").html("You have " + torpedostack + " torpedoes remaining");
  }
  else {
    alert("Game over");
  }
}
    // document.getElementById("ammo").innerHTML = "You have 15 torpedoes remaining";



  //
  // what the fuck is happening below this point?
  function addClassByClick(){
    $(id"").addClass('disabled');
   }



/*
var game = function(){

function gridGuess(guess) {
  if (guess[i] === ship[i]) {
    alert('That\'s A Hit!')
  }
  else {
    alert('Miss')
  }
}

showWinner: function() {
},

showGameOver: function() {
},

var reset = function() {},

var move = function(r, c) {
    this.board[r][c] = this.currentPlayer;
  },

var myMove = function() {
  console.log('what the what?');
},

function myFunction() {
    document.getElementById("1").addEventListener ("click", checkIfHit);
},

var ammo = function(guess) {
  (16 - guess);

} */
