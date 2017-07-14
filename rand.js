function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

var lunches = ["Chinese","Caribbean","Mexican"];

var lunch_today = lunches[rand(lunches.length)];

console.log(lunch_today);