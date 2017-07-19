function setup(){
    createCanvas(1000,1000);
    background(200);
}

function mouseDragged(){
   fill(random(255),random(255),random(255));
   var ellwidth = random(200);
   var ellheight = random (200);

   ellipse(mouseX,mouseY,ellwidth,ellheight);
   rect(mouseX,mouseY,ellwidth,ellheight);
}