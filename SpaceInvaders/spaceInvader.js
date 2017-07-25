function setup(){
createCanvas(800, 700);
background(0);
strokeWeight(3);
}
var x = 375;
var y = 650;
var counter = 0;
function draw() {
  if (keyIsDown(LEFT_ARROW)){
    x-=5;

  }

  else if (keyIsDown(RIGHT_ARROW)){
    x+=5;

  }
counter ++ 
if(counter >= frameRate()){
    if (keyIsDown(32)){
         projArray.push(new Projectile(x, y, true))
    counter = 0 
    }
}
     
  background(0);
  fill(10,200,90);
  rect(x, y, 20, 40);
for(i=0; i<projArray.length; i++){
    rect(projArray[i].x, projArray[i].y, 10, 10)
    projArray[i].y-=6
}
    fill(255,0,0);

    for (var i=0;i<13;i++){
        rect(i*70,20,30,30)
    }
    for (var i=0;i<13;i++){
        rect(i*70,100,30,30)
    }
    for (var i=0;i<13;i++){
        rect(i*70,180,30,30)
    }
    for (var i=0;i<13;i++){
        rect(i*70,260,30,30)
    }
    for (var i=0;i<13;i++){
        rect(i*70,340,30,30)

     
    }
    
}
function Projectile(x, y, isActive){
    this.x = x;
    this.y = y;
    this.isActive = isActive; 
}
var projArray = [];


