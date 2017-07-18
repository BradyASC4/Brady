function setup(){
    createCanvas(300,300);
    background(200);
    strokeWeight(3);
    fill(255,0,0)
    ellipse(150,150,100,100);
    line(150, 150, 100, 150);
    line(150, 150, 199, 150);
    fill(255,255,255);
    arc(150, 150, 80, 80, 0, PI);
    ellipseMode(CENTER);
    fill(255);
    ellipse(150, 150, 35, 35);
    ellipseMode(CENTER);
    fill(0);
    ellipse(150, 150, 18, 18);
}