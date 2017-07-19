function setup(){
    createCanvas(300,300);
    background(200);
    strokeWeight(3);
    fill(255,0,0)
    ellipse(150,150,100,100);
    line(150, 150, 100, 150);
    line(150, 150, 199, 150);
    ellipseMode(RADIUS);
    fill(255);
    ellipse(150,150, 20, 20);
    ellipseMode(CENTER)
    fill(0);
    ellipse(150,150, 20, 20);
}