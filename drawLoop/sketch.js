function setup(){
    createCanvas(500,500);
    background(200)
    xSpeed = random(-2,2);
    ySpeed = random(-2,2);
}

var x = 250;
var y = 250;
var xSpeed;
var ySpeed;
function draw(){
    background (200);
    ellipse(x,y,30,30);
    if (x>=500){
        xSpeed = -2;
    }
    else if (x<=0){
        xSpeed = 4;
    }
    if (y>=500){
        ySpeed = -6;
    }
    else if (y<=0){
        ySpeed = 2;
    }
    x= x+xSpeed;
    y= y+ySpeed;
}