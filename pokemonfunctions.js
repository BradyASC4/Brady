function randLetter(){
    var alphabet = "abcdefghijklmopqrstuvwxyz"
    return alphabet[rand(alphabet.length)];
}
function randWord(){
    var string =""
    for(var i=1; i<rand(100); i++){
        string += randLetter();
    }
    return string
}
function randSentance(){
    var sentance =""
    for(var i=1; i<rand(20); i++){
        sentance= sentance+randWord();
    }
    return sentance
}
function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}


var array1 = ["Pikachu", 23, 100];
var array2 = ["Charizard", 50, 200];

function pokeAttack(array1,array2){
    array[2] -= array1[1];
    return array2;
}
console.log(pokeAttack(array1,array2));