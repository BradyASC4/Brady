var charizard = {"attack":"blaze", 
    "hp":"266",
    "legendary":false, 
    "types":["fire","flying"]
};

console.log(charizard.legendary);



function Superhero(trueName,whatPower,whatCause,whatLoc) {
    this.realname = trueName;
    this.power = whatPower;
    this.cause = whatCause;
    this.location = whatLoc
}

var batman = new Superhero("Bruce Wayne","Cash","Dead parents",["Wayne Manor","BatCave"]);
var spiderman = new Superhero("Peter Parker", "Spidery Shit","Raidoacive Spider","Queens")

console.log(batman);
console.log(spiderman);

