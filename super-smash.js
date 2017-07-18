var prompt = require('prompt-sync')();
var mashArray = ["Omega Stage", "The Great Maze", "CD Factory", "Battle Field"];
var firstQuestion = ["4", "7"];
var secondQuestion = ["Samus", "Mario", "Sonic", "Link"];

function  askQuestions(){
    firstQuestion.push(prompt("How many times will you fight?"));
    secondQuestion.push(prompt("Who will you choose to fight?"));
}

function rand(upperBound){
    return Math.floor(Math.random()*upperBound);
}
function displayAnswer(){
    var stage = mashArray[rand(mashArray.length)];
    var hits = firstQuestion[rand(firstQuestion.length)];
    var opponent = secondQuestion[rand(secondQuestion.lengh)];
    console.log("You Fought " + opponent + " in the " + stage + " and hit them " + hits + " times. Too bad. Mewtwo wins!");
}