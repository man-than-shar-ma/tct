let walker1;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  walker1 = new Walker(width,height);
  background(0);
}

function draw() {
  // put drawing code here
  walker1.step();
  walker1.display();
}