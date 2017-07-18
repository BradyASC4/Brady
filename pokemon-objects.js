function Pokemon(healthPoints,attack,defense,speed,type,pokemonNumber){
    this.Hp = healthPoints;
    this.Atk = attack;
    this.Def = defense;
    this.Sp = speed;
    this.Type = type;
    this.Pokedex = pokemonNumber;
}

var bulbasaur = new Pokemon (45,49,49,45,"Grass,Posion",1);
var cyndaquil = new Pokemon (32, 52,43,65,"Fire",155);
var mudkip = new Pokemon (50,70,50,40,"Water",258);
var chimchar = new Pokemon (44,58,48,61,"Fire",390);
var snivy = new Pokemon (45,45,55,63,"Grass",495);
var popplio = new Pokemon (50,54,54,40,"Water",728);

var pokemonArray = [bulbasaur,cyndaquil,mudkip,chimchar,snivy,popplio];
function printRoster(roster){
    for (var i=0; i<roster.length;i++){
        console.log(roster[i]);
    }
}

function pokemonAttacked 
printRoster(pokemonArray)
