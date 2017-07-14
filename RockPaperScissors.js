var myChoice = "R";

var choices = ["R","P","S"];
var playerChoice = choices[Math.floor(Math.random()*3)];

console.log("my Choice " + myChoice);
console.log("player Choice " + playerChoice);

if (myChoice == playerChoice) {
    console.log("We Tie");
}
else if (myChoice=="R"){
    if (playerChoice=="S"){
        console.log("I Win");
    }
    if (playerChoice=="P"){
        console.log("Player Wins");
    }
}

if (myChoice == playerChoice) {
    console.log("We Tie");
}
else if (myChoice=="P"){
    if (playerChoice=="R"){
        console.log("I Win");
    }
    if (playerChoice=="S"){
        console.log("Player Wins");
    }
}

if (myChoice == playerChoice) {
    console.log("We Tie");
}
else if (myChoice=="S"){
    if (playerChoice=="P"){
        console.log("I Win");
    }
    if (playerChoice=="R"){
        console.log("Player Wins");
    }
}