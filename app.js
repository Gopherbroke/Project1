
var shipsFound = 0;
var guess;
var box;
var scream = "Wilhelm-Scream.mp3";

//var ship1 = #1;
var myMove = function() {
audio.src =  sink;
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


          //alert("You Win!");
    if (torpedostack < 0) {
      $( "body" ).off( "click", ".space", boxes);
    }
    else if (shipsFound === 3) {
      $( "body" ).off( "click", ".space", boxes);
    }
    else if (torpedostack === 0 && shipsFound === 3) {
      $("#ammo").html("You Win!");
    }
    else if (position == ship1 || position == ship2 || position == ship3) {
        // If we get a hit, the box changes to black
        this.style.color = "red";
        shipsFound++;
        if (shipsFound === 3) {
              $("#gameFeedback").html("You Win!<br>");
              $("#gameHistory").prepend("You Win!<br>");
        } else {
          $("#gameFeedback").html("That's a hit!<br>");
          $("#gameHistory").prepend("That's a hit!<br>");
        };
    }
    else {
        this.style.backgroundColor = "grey";
        $("#gameFeedback").html("Miss<br>");
        $("#gameHistory").prepend("Miss!<br>");
  }
}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

          // 1. Need to make sure Onclick function for torpedoes() when tile is clicked works
          // 2. Add Jquery selector function on click to change html of #ammo



//var ammoRemaining= (16 - guess);
//var ammoRemaining = 16;
//ammoRemaining--;
//var z = ammoRemaining;
//document.getElementById("demo").innerHTML = z;

var torpedostack = 25;

function torpedoes() {
  console.log("Torpedo fired");
  --torpedostack;
  if (torpedostack >= 0) {
    $("#ammo").html("You have " + torpedostack + " torpedoes remaining");
  }
  else if (shipsFound === 3) {
    $( "body" ).off( "click", ".space", boxes);
  }
  else if (torpedostack === 0 && shipsFound === 3) {
    $("#ammo").html("You Win!");
  }
  else {
    $("#ammo").html("Game Over");
    //alert("Game Over");

  }
}

// function hitOrMiss() {
//  if ()
//  }
/*
    var shipsFound = 0;
    var guess;
    var box;
    var torpedostack = 16;
    var myMove = function() {}


    var model = {
        boardSize: 5,
        numShips: 3,
        shipLength: [4, 3, 2],
        shipsSunk: 0,

    	ship1: [
    		{ locations: [0, 0, 0, 0], hits: ["", "", "", ""] },
    	],
      ship2: [
        { locations: [0, 0, 0], hits: ["", "", ""] },
      ],
      ship3: [
        { locations: [0, 0], hits: ["", ""] }
      ],

      generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
		do {
				locations = this.generateShip();
		} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},
  generateShip: function() {
  var direction = Math.floor(Math.random() * 2);
  var row, col;

  if (direction === 1) { // horizontal
    row = Math.floor(Math.random() * this.boardSize);
    col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
  } else { // vertical
    row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
    col = Math.floor(Math.random() * this.boardSize);
  }

  var newShipLocations = [];

  for (var i = 0; i < this.shipLength; i++) {
    if (direction === 1) {
      newShipLocations.push(row + "" + (col + i));
    } else {
      newShipLocations.push((row + i) + "" + col);
    }
  }
  return newShipLocations;
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
};

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
*/
