PImage b;

void setup(){
  size(300,300);
  noLoop();
} 

void draw(){
  background(128);
  background(255);
  strokeWeight(10);
  stroke(0);
  line(10,10,50,60);
  stroke(255,0,0);
  line(40,200,150,60);

  stroke(0,128,0);
  strokeWeight(1);
  for (int i=0; i<200; i+=4) {
    line(50,250-i,250,50+i);
  }
}
