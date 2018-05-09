var img;
var col=255;

function preload() {
  img = loadImage('kiss.jpg');
}

function setup() {
  background(184,134,11);
  createCanvas(780,400);
  image(img,390,0);
  dr();
}

function draw(){
}

function dr(){
  noStroke();
  
  //ground
  fill(34,139,34);
  bezier(0, 320, 250, 280, 300, 175, 300,500);
  rect(0,320,280,80);
  
  //body
  fill(255,220,0);
  rect(100,10,130,320,100);
  ellipse(170,50,150,120);
  bezier(220, 30, 330, 270, 320, 270, 200, 320);
  
  //w hair
  fill(130,63,15,190);
  ellipse(210,50,60,70);
  
  //w face
  stroke(255,200,200);
  fill(255,212,173);
  ellipse(200,50,45,35);
  
  //neck
  bezier(120,25,200,0,210,60,140,45);
  
  //m hair
  fill(0);
  ellipse(190,25,55,45);
  
}

function mousePressed(){
  if(col == 255){
    col=0;
  }
  else{
    col=255;
  }
  fill(col);
  rect(mouseX,mouseY,random(10,30),random(10,30));
}
