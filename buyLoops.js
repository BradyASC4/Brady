//var counter = 1;
//while(counter < 11){
//    console.log(counter);
//    counter++;
//}

var prompt = require('prompt-sync');
var money = 1000;
var item = [];

while(money>99){
    console.log("You Have $" + money + " left. Shirt = $100, Computer = $500");
    var answer = prompt("Which item do you want to buy? ");
    if(answer == "Shirt"){
        money -= 100;
        items.push("Shirt")
        console.log("You bought a Shirt!");
    }
    else if(answer == "Computer"){
        money -= 400;
        items.push("You bought a Computer!");

    }
    else {
        console.log("I didn's understand your answer. Try Again")
    }
}
