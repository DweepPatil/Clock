var hr, mn, sc;
var hAngle,mAngle,sAngle;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(sAngle,(sAngle+110)/2,170);
  angleMode(DEGREES);
  translate(200,200);
  
  
  push()
  noFill();
  stroke("white")
  strokeWeight(3);
  ellipse(0,0,300,300);
  pop();
  
  hr=hour();
  mn=minute();
  sc=second();
  
  hAngle=map(hr,0,12,0,360);
  mAngle=map(mn,0,60,0,360);
  sAngle=map(sc,0,60,0,360);
  
  push()
  rotate(sAngle);
  strokeWeight(4);
  stroke("yellow")
  line(0,0,0,-100);
  pop();
  
  push()
   rotate(mAngle);
  stroke("orange");
  strokeWeight(6);
  line(0,0,0,-120);
  pop();
  
  push()
  rotate(hAngle); 
  stroke("green");
  strokeWeight(8);
  line(0,0,0,-50);
  pop();
}