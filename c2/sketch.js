let ball1;
let rad = 10;
let speed = 5;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  ball1 = new Ball(width,height,rad,speed);
}

function draw() {
  // put drawing code here
  background(220);
  ball1.createBall();
  ball1.moveBall();
  ball1.checkWalls();
}
