let walker1;
let og;
let rad = 5;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  og = createGraphics(width,height);
  walker1 = new Walker(width,height,rad,og);
  background(0);
  og.clear();
}

function draw() {
  // put drawing code here
  walker1.step();
  walker1.display(og, 255);
  image(og,0,0);
  walker1.display(this,color(255,0,0));
}